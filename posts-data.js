// Notes articles template.
//
// To publish a new note:
// 1. Copy the TEMPLATE object below.
// 2. Fill in every field (see the Form Field Input Model / publishing guide).
// 3. Paste it as a new entry at the TOP of the SITE_POSTS array below, so it
//    shows as the newest note. Don't forget a comma after the closing `}`
//    if it's not the last entry.
//
// TEMPLATE - copy this whole object:
//
// {
//   id: "your-post-slug",              // kebab-case, must be unique
//   title: "Your Post Title",
//   date: "24 Aug 2026",               // "D Mon YYYY"
//   read: "3 min",                     // "N min"
//   tags: ["Tag One", "Tag Two"],      // 1-3 short keywords
//   excerpt: "One sentence shown on the Notes list page.",
//   pullLabel: "The short version",
//   pull: "One-to-two sentence takeaway shown in the highlighted callout box.",
//   body: [
//     "First paragraph.",
//     "Second paragraph.",
//     "Add as many paragraphs as needed."
//   ]
// }

window.SITE_POSTS = [
          // Starting Note - First Post on Site
          {
            "id": "starting-here",
            "title": "Starting here",
            "date": "22 Aug 2026",
            "read": "4 min",
            "tags": [
              "Site",
              "Process"
            ],
            "excerpt": "Why I finally built a site, and what these articles are for.",
            "pullLabel": "The short version",
            "pull": "Having an outlet for thoughts regarding your interests is important. Don’t isolate yourself (Unless you signed an NDA, then perhaps you should consider not blogging about it).",
            "body": [
              "This is the first article on the site, so it may as well be about the site. For a long time, I’ve been putting off the idea of making my own site. It can be a hassle (if you don’t like spending money) and it never seemed necessary. But with Heron releasing soon, I needed a real place to display the app’s page, as well as who I am as a developer.",
              "Something that has always bothered me is the feeling of being alone, in a sense, when working on personal projects. Obviously, I have coworkers and friends to tell about my projects, but it isn’t the same feeling as when directly working side-by-side with another developer.",
              "This was made obvious to me when working on Heron. The most difficult problem to deal with during the initial development wasn’t really writing the code, but not taking time to take intentional pauses to stop and document what I’ve been doing. My wife is great about letting me bounce ideas off of her, but I think she’s one more “metadata” utterance away from buying a set of earplugs (kidding...hopefully).",
              "There isn’t a specific function that these articles will serve. For the time being, you might see Heron feature update devlogs, to interesting books I’m reading, or how I received a permanent ban from League of Legends for making an announcer program that’s narrating my games in Javier Bardem’s voice from ‘No Country for Old Men’.",
              "In the ‘About Me’ section, there are links to my X and LinkedIn profiles, as well. I will most likely post more frequently on X, but might share more structured posts on LinkedIn about open-source contributions I’ve made or other more ‘professional’ projects.",
              "Even writing this initial post feels good. I recommend anyone that is interested or involved in software development (or any field for that matter) to find a way to express your interests publicly, even if it’s completely anonymous."
            ]
          }

           {
             "id": "heron-v100-release-notes",              // kebab-case, must be unique
             "title": "Heron v1.0.0 Release Notes",
             "date": "24 Aug 2026",               // "D Mon YYYY"
             "read": "3 min",                     // "N min"
             "tags": ["Heron", "Release Notes"],      // 1-3 short keywords
             "excerpt": "Version Summary, Features, and Known Issues." ,
             "pullLabel": "Personal Notes",
             "pull": "I'm glad to finally be able to publicly release Heron. Feel free to contact me directly with feedback by using the Contact Me form on the Index page of the site.  ",
             "body": [
               "Version Summary: Initial release, made publicly available on MS Store, GitHub, and Gumroad.",
               "Feature List: Persistent notes with no enforced cloud-saves, login, advertisements, or dependencies. Able to configure font sizing, color scheme, text wrapping, and line numbers. System Tray integration, allowing quick access when no note is currently open. All dependencies compiled, so no additional setup required outside of clicking Install.",
               "Known Issues: Incorrect pathing for System Tray 'Open Notes Folder' option. Works for .exe version (Github, Gumroad), but Microsoft .msix packaging affects storage path. This is inconvenient due to lack of solidified, in-window delete option. Storage folder is located in C:/Users/AppData/Local/Packages/tyjaefox.devxxxxxx/LocalCache/Local. If AppData folder isn't visible, select View -> Show -> Hidden Items in File Explorer. This is the priority issue along with origin folder organization with v1.0.1 "
             ]
           }
];
