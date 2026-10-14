// Site-wide text that isn't a work or project entry. Edit freely.

export const site = {
  name: "Agishan Thaya",
  location: "Waterloo, ON",
  description:
    "Agishan Thaya: data analyst turned data scientist turned operations researcher turned software engineer.",

  // Home page
  lead: "I'm Agishan. I started as a data analyst, became a data scientist, then an operations researcher, and now I'm a software engineer.",
  bio: [
    "Analyst at Loblaw and Maple Leaf Foods. Data scientist at RBC and Dandy. Operations research at Cambridge Memorial Hospital. Software engineer at Shopify and Claim Health AI.",
    "I graduated from the University of Waterloo in 2026 with a degree in Management Engineering, a double specialization in Artificial Intelligence & Computing, and a spot on the Dean's Honours List.",
  ],
  now: "", // e.g. "Reading about stream processing and cooking through a ramen book." Empty hides it.
  reachOut:
    "Reach out if you want to talk scheduling problems, streaming systems, or what to cook this week.",

  // Put image files in public/photos/ and set src to "/photos/<file>". Empty src shows a placeholder.
  // date + caption show on hover; clicking opens `full` (the uncropped photo). Catalog: Desktop/Photos of Me/_captions.csv
  photos: [
    { src: "/photos/porto.jpg", full: "/photos/full/porto.jpg", alt: "Me by the Douro river in Porto during reading week on my DTU exchange", date: "Oct 2024", caption: "Me by the Douro in Porto, on reading week during my DTU exchange" },
    { src: "/photos/grad-friends.jpg", full: "/photos/full/grad-friends.jpg", alt: "Me at my Waterloo convocation with my friends", date: "Jun 2026", caption: "My convocation day, with my friends and my diploma" },
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
