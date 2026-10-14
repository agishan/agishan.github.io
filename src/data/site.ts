// Site text lives in the JSON files next to this one, so it can be edited at /admin
// (Sveltia CMS) without touching code. This file only reads them and drops anything
// marked `hidden`.
import home from "./home.json";
import clubs from "./clubs.json";
import misc from "./misc.json";

export const site = {
  ...home,
  photos: home.photos.filter((p) => !p.hidden),
  socials: home.socials.filter((s) => !s.hidden),
};

// Extracurriculars & volunteering page (/clubs). Groups show in this order.
export const involvement = clubs.groups
  .filter((g) => !g.hidden)
  .map((g) => ({ ...g, items: g.items.filter((i) => !i.hidden) }))
  .filter((g) => g.items.length > 0);

// Misc page (currently hidden: src/pages/_misc.astro)
export const reading = misc.reading;
export const cooking = misc.cooking as { src: string; name: string }[];
