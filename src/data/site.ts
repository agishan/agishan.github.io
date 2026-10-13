// Site-wide text that isn't a work or project entry. Edit freely.

export const site = {
  name: "Agishan Thaya",
  location: "Waterloo, ON",
  description:
    "Agishan Thaya: engineer working where operations research meets software infrastructure.",

  // Home page
  lead: "I'm Agishan, an engineer working where operations research meets software infrastructure.",
  bio: [
    "I like taking a messy operational process, modelling it, and handing the people who run it a system that makes the decision for them. That's been surgical scheduling at a hospital, plant routing at Dandy, and webhook delivery at Shopify.",
    "Management Engineering at the University of Waterloo, class of 2026.",
  ],
  now: "", // e.g. "Reading about stream processing and cooking through a ramen book." Empty hides it.
  reachOut:
    "Reach out if you want to talk scheduling problems, streaming systems, or what to cook this week.",

  // Put image files in public/photos/ and set src to "/photos/<file>". Empty src shows a placeholder.
  photos: [
    { src: "", alt: "Somewhere I've been" },
    { src: "", alt: "Me, doing a thing" },
    { src: "", alt: "Something I cooked" },
  ],

  // Put your resume at public/resume.pdf, then set this to "/resume.pdf". Empty hides the link.
  resume: "",

  socials: [
    { label: "GitHub", href: "https://github.com/Agishan" },
    { label: "LinkedIn", href: "https://linkedin.com/in/agishan" },
  ],
};

// Misc page
export const reading = [
  { title: "Web Scalability for Startup Engineers", author: "Artur Ejsmont", status: "reading", note: "" },
];

export const cooking = [
  // { src: "/photos/ramen.jpg", name: "Tonkotsu ramen" },
] as { src: string; name: string }[];
