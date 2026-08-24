const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 200, email: 200, message: 5000 };

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

async function handleContact(request, env) {
  console.error(
    "RESEND_API_KEY binding check:",
    typeof env.RESEND_API_KEY,
    env.RESEND_API_KEY ? `length ${env.RESEND_API_KEY.length}, starts "${env.RESEND_API_KEY.slice(0, 3)}", ends "${env.RESEND_API_KEY.slice(-2)}"` : "empty/undefined"
  );

  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request body." }, 400);
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";

  if (company) {
    // Honeypot field: real visitors never fill this in.
    return jsonResponse({ ok: true }, 200);
  }

  if (!name || !email || !message) {
    return jsonResponse({ ok: false, error: "Name, email, and message are required." }, 400);
  }
  if (name.length > MAX_LEN.name || email.length > MAX_LEN.email || message.length > MAX_LEN.message) {
    return jsonResponse({ ok: false, error: "One or more fields is too long." }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return jsonResponse({ ok: false, error: "That email address doesn't look valid." }, 400);
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Contact form <contact@tyjaefox.dev>",
      to: "tyjaefox@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`
    })
  });

  if (!resendResponse.ok) {
    const errText = await resendResponse.text().catch(() => "");
    console.error("Resend API error:", resendResponse.status, errText);
    return jsonResponse({ ok: false, error: "Message could not be sent. Please try again later." }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};
