// ======================
// GLOBAL CONFIG
// ======================

export const SITE = {
  name: "Airoboragma",

  domain: "https://airoboragma.pages.dev",

  description:
    "AI workflow automation, autonomous agents, and scalable automation systems.",

  defaultImage: "/og/default.png",

  language: "en",

  author: "Airoboragma",

  twitter: "@airoboragma"
};

// ======================
// API CONFIG
// ======================

export const API_BASE =
  "https://airoboragma.apiworkers.workers.dev";

// ======================
// URL HELPERS
// ======================

export const url = (path = "") => {
  path = String(path);

  if (!path.startsWith("/")) {
    path = "/" + path;
  }

  return SITE.domain + path;
};

// canonical
export const canonical = (path = "") => {
  return url(path);
};

// ======================
// OG IMAGE HELPERS
// ======================

export const ogImage = (slug = "") => {
  slug = sanitizeSlug(slug);

  if (!slug) {
    return url(SITE.defaultImage);
  }

  return url(`/og/${slug}.png`);
};

export const defaultOG = () => {
  return url(SITE.defaultImage);
};

// ======================
// SLUG SANITIZER
// ======================

export function sanitizeSlug(slug = "") {
  return encodeURIComponent(
    String(slug)
      .replace(/<[^>]*>?/gm, "")
      .replace(/["']/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()
      .trim()
  );
}

// ======================
// HTML STRIPPER
// ======================

export function stripHTML(html = "") {
  return String(html)
    .replace(/<[^>]*>?/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ======================
// READING TIME
// ======================

export function readingTime(text = "") {
  const clean = stripHTML(text);

  const words = clean
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}
