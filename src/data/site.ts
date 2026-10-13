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
    { src: "/photos/porto.jpg", alt: "Me by the Douro river in Porto" },
    { src: "/photos/grad-friends.jpg", alt: "Graduation day at Waterloo with friends" },
    { src: "/photos/headshot.jpg", alt: "Me in a shirt and tie on campus" },
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

// Extracurriculars & volunteering page (/clubs). Groups show in this order.
export const involvement: {
  group: string;
  items: { org: string; role: string; when: string; what: string; href?: string }[];
}[] = [
  {
    group: "University of Waterloo",
    items: [
      {
        org: "Institute of Industrial & Systems Engineers (IISE), Waterloo chapter",
        role: "Chapter President, then Advisor",
        when: "2023–2024",
        what: "Restarted the chapter after a 3-year hiatus. Raised $16,000 from faculty, the department, EngSoc and private sponsors, led two delegations to the IISE national conference (we won 2 of 4 competitions), and started a first-year mentorship program, including the scripts that matched mentors to students.",
      },
      {
        org: "UW Cooking Club",
        role: "VP",
        when: "",
        what: "Helped run the club, and built its websites: a Django + Vue recipe and events site, then a React rebuild.",
      },
      {
        org: "UW Data Science Club",
        role: "Internals Lead",
        when: "",
        what: "",
      },
      { org: "Industry 4.0", role: "VP", when: "", what: "" },
      { org: "Engineering Society (EngSoc)", role: "Elected representative", when: "", what: "" },
      {
        org: "UW Poker Club",
        role: "Developer",
        when: "",
        what: "Built the club's website in TypeScript and Tailwind, including tournament logistics.",
      },
      { org: "UW Analytics Group for Games and Sports", role: "Member", when: "", what: "" },
      { org: "First-year mentorship", role: "Mentor", when: "", what: "Mentored incoming first-year students." },
      { org: "Intramurals", role: "Dodgeball, flag football", when: "", what: "" },
    ],
  },
  {
    group: "Before university",
    items: [
      {
        org: "707 Royal Canadian Air Cadets",
        role: "Squadron Warrant Officer (WO2)",
        when: "2014–2020",
        what: "Six years. Led a squadron-wide trip for 50 cadets on a $2,500 budget, and taught cadets of different ages everything from leadership to survival skills.",
      },
      {
        org: "Father Michael McGivney AV Team",
        role: "President",
        when: "2018–2020",
        what: "Ran my high school's AV team. Rebuilt admissions and team events (92% member retention), trained 25 members on the equipment, and directed a 40-student seminar series that earned Club Executive of the Month.",
      },
    ],
  },
];
