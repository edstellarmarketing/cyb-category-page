// Page-wide Google Helpful Content + keyword gate for /ai-training.
// Shift-left Phase 3: run after every section swap. Usage: node scripts/validate-ai-page.mjs
const URL = process.env.AI_URL || "http://localhost:3001/ai-training";

const res = await fetch(URL);
if (!res.ok) {
  console.error(`FETCH FAILED: HTTP ${res.status} for ${URL}`);
  process.exit(2);
}
const rawHtml = await res.text();

// Visible <body> text only: drop scripts/styles, strip tags, collapse whitespace.
const body = (rawHtml.split(/<body[^>]*>/i)[1] ?? rawHtml).split(/<\/body>/i)[0];
const text = body
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/&[a-z]+;/gi, " ")
  .replace(/\s+/g, " ")
  .trim();
const lc = text.toLowerCase();
const count = (needle) => lc.split(needle.toLowerCase()).length - 1;

const checks = [];
const add = (ok, label, detail) => checks.push({ ok, label, detail });

// ── Guardrails / floors ──
const il = count("instructor-led");
add(il >= 10, `G5 instructor-led >= 10`, `found ${il}`);
const gt = count("group training");
add(gt >= 8, `G6 group training >= 8`, `found ${gt}`);
const ilgt = count("instructor-led group training");
add(ilgt >= 3, `Cluster C instructor-led group training >= 3`, `found ${ilgt}`);

// ── Commercial-intent ceilings (K7: each <= 2) ──
// Count standalone "training company" not preceded by "corporate".
const corpCompany = count("corporate training company");
const trainingCompanyAll = count("training company");
const trainingCompanyBare = trainingCompanyAll - corpCompany;
const trainingProvider = count("training provider");
add(trainingCompanyBare <= 2, `K7 "training company" (bare) <= 2`, `found ${trainingCompanyBare}`);
add(corpCompany <= 2, `K7 "corporate training company" <= 2`, `found ${corpCompany}`);
add(trainingProvider <= 2, `K7 "training provider" <= 2`, `found ${trainingProvider}`);

// ── USP / structural ──
add(count("customized instructor-led training") >= 1, `S2 "customized instructor-led training" present`, `found ${count("customized instructor-led training")}`);

// ── Hard guardrails ──
const emdash = (text.match(/—/g) || []).length;
add(emdash === 0, `G1 no em-dashes`, `found ${emdash}`);
add(count("vendor-certified") === 0, `G3 no "vendor-certified"`, `found ${count("vendor-certified")}`);
// "course"/"courses" as visible word (allowed only inside FAQ answers per rules; flag for review)
const courseHits = (lc.match(/\bcourses?\b/g) || []).length;
add(true, `G2 review "course(s)" visible mentions`, `found ${courseHits} (allowed only in FAQ answers)`);

// ── Launch Ready: forbidden phrases (hard fail) ──
add(count("enquire now") === 0, `cta1 no "Enquire Now"`, `found ${count("enquire now")}`);
for (const bad of ["learn more", "click here", "get started"]) {
  add(count(bad) === 0, `cta2 no "${bad}"`, `found ${count(bad)}`);
}
// Note: "self-paced" is intentionally NOT banned — the FAQ rules REQUIRE ruling it out
// ("no self-paced modules"). Only positive retail framing is forbidden here.
for (const retail of ["enroll now", "lifetime access", "learn at your own pace", "unlimited access"]) {
  add(count(retail) === 0, `tone4 no retail "${retail}"`, `found ${count(retail)}`);
}
for (const sup of ["world-class", "best-in-class", "cutting-edge", "industry-leading"]) {
  add(count(sup) === 0, `brd7 no superlative "${sup}"`, `found ${count(sup)}`);
}
add(count("most popular") === 0, `brd10 no "Most Popular" pricing cue`, `found ${count("most popular")}`);

// ── Launch Ready: intent-specific CTAs present (informational until that section is built) ──
for (const cta of ["Get a Training Proposal", "Browse the Full Program Catalog", "Get a Quote", "Talk to a Learning Advisor", "Ask Our Learning Services Team", "Send My Training Requirements"]) {
  const present = count(cta) >= 1;
  add(true, `CTA present (final-gate) "${cta}"`, present ? "yes" : "NOT YET (build its section)");
}

// ── Meta (from raw head) ──
const title = (rawHtml.match(/<title>([^<]*)<\/title>/i) || [])[1] || "";
add(title.length <= 56 && /Corporate Training Company \| Edstellar/.test(title), `K1 meta title pattern + <=56`, `"${title}" (${title.length})`);
const desc = (rawHtml.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "";
add(desc.length <= 156 && /^Edstellar is a global .* corporate training provider/i.test(desc), `K2 meta desc pattern + <=156`, `(${desc.length}) "${desc.slice(0,70)}..."`);

// ── Report ──
let fails = 0;
for (const c of checks) {
  if (!c.ok) fails++;
  console.log(`${c.ok ? "PASS" : "FAIL"}  ${c.label}  —  ${c.detail}`);
}
console.log(`\n${checks.length - fails}/${checks.length} passed${fails ? `  (${fails} FAIL)` : ""}`);
console.log("Note: page-wide floors (instructor-led>=10, group training>=8) only reach target once all 14 sections are built.");
process.exit(fails ? 1 : 0);
