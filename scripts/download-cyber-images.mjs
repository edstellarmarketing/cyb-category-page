#!/usr/bin/env node
// Download cybersecurity-themed images from Unsplash (free CDN, no API key needed)
// to public/images/cyber/.
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const PUBLIC_DIR = new URL("../public/images/cyber/", import.meta.url);
await mkdir(PUBLIC_DIR, { recursive: true });

// Curated cybersecurity-themed Unsplash photo IDs.
// Each entry: [filename, photoId, focus topic]
const TARGETS = [
  // Hero slides
  ["hero-cyber-ops.jpg",         "photo-1550751827-4bd374c3f58b", "cyber operations / hooded hacker"],
  ["hero-cissp.jpg",             "photo-1614064548237-02f1eb4aaba9", "cyber lock"],
  ["hero-ceh.jpg",               "photo-1526374965328-7f61d4dc18c5", "matrix code"],
  ["hero-team-training.jpg",     "photo-1517245386807-bb43f82c33c4", "training session"],
  ["hero-cloud.jpg",             "photo-1518770660439-4636190af475", "circuit board cloud"],
  ["hero-governance.jpg",        "photo-1556761175-5973dc0f32e7", "boardroom"],
  ["hero-inside.jpg",            "photo-1521737604893-d14cc237f11d", "professional team"],
  ["hero-ai.jpg",                "photo-1639762681485-074b7f938ba0", "AI generative"],
  // Tabber courses
  ["course-ethical-hacking.jpg", "photo-1563013544-824ae1b704d3", "hooded hacker"],
  ["course-cloud.jpg",           "photo-1553877522-43269d4ea984", "cloud network"],
  ["course-iam.jpg",             "photo-1633265486064-086b219458ec", "fingerprint biometric"],
  ["course-grc.jpg",             "photo-1454165804606-c3d57bc86b40", "audit checklist"],
  ["course-network.jpg",         "photo-1544197150-b99a580bb7a8", "network cables"],
  ["course-appsec.jpg",          "photo-1542831371-29b0f74f9713", "code on screen"],
  ["course-ai-data.jpg",         "photo-1633419461186-7d40a38105ec", "AI chip"],
  // Tabber learning paths
  ["path-soc.jpg",               "photo-1551808525-051ae4a37a51", "monitoring screens"],
  ["path-pentest.jpg",           "photo-1555949963-aa79dcee981c", "server room"],
  ["path-cloud-eng.jpg",         "photo-1597733336794-12d05021d510", "cloud lock"],
  ["path-grc-mgr.jpg",           "photo-1573497019418-b400bb3ab074", "business handshake"],
  ["path-architect.jpg",         "photo-1559136555-9303baea8ebd", "abstract network"],
  ["path-devsecops.jpg",         "photo-1607799279861-4dd421887fb3", "developers collaborating"],
  ["path-ciso.jpg",              "photo-1573164574572-cb89e39749b4", "padlock"],
  // Featured courses (corporate news slider)
  ["cert-cissp.jpg",             "photo-1614064642303-72a7c1c8e1ff", "digital lock"],
  ["cert-ceh.jpg",               "photo-1531297484001-80022131f5a1", "programmer"],
  ["cert-cism.jpg",              "photo-1556761175-5973dc0f32e7", "boardroom"],
  ["cert-ccsp.jpg",              "photo-1593642634524-b40b5baae6bb", "cloud server"],
  ["cert-oscp.jpg",              "photo-1517694712202-14dd9538aa97", "code dev"],
  ["cert-secplus.jpg",           "photo-1555949963-aa79dcee981c", "racks"],
  ["cert-iso27001.jpg",          "photo-1450101499163-c8848c66ca85", "certification audit"],
  ["cert-aws-sec.jpg",           "photo-1639322537228-f710d846310a", "cloud blue"],
  ["cert-gdpr.jpg",              "photo-1614064642303-72a7c1c8e1ff", "privacy"],
  // Industry use cases
  ["industry-bfsi.jpg",          "photo-1556742502-ec7c0e9f34b1", "bank tower"],
  ["industry-healthcare.jpg",    "photo-1576091160550-2173dba999ef", "healthcare"],
  ["industry-government.jpg",    "photo-1605008436144-f57c41540eb6", "government building"],
  ["industry-saas.jpg",          "photo-1581091226825-a6a2a5aee158", "developer with laptop"],
  // Customers & accreditation tiles
  ["customers-enterprise.jpg",   "photo-1497366216548-37526070297c", "modern office"],
  ["customers-partners.jpg",     "photo-1521791136064-7986c2920216", "professional partners"],
  // More on Edstellar
  ["more-skills-matrix.jpg",     "photo-1551288049-bebda4e38f71", "data dashboard"],
  ["more-virtual-class.jpg",     "photo-1588196749597-9ff075ee6b5b", "online learning laptop"],
  ["more-curriculum.jpg",        "photo-1454165804606-c3d57bc86b40", "planning blueprint"],
  ["more-resources.jpg",         "photo-1532012197267-da84d127e765", "library books"],
];

const BASE = "https://images.unsplash.com/";
const PARAMS = "?w=1600&q=80&auto=format&fit=crop";

async function dl([filename, photoId]) {
  const dest = new URL(filename, PUBLIC_DIR);
  if (existsSync(dest)) return { filename, status: "skipped" };
  const url = `${BASE}${photoId}${PARAMS}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { filename, status: `http ${res.status}`, url };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) return { filename, status: "too-small", bytes: buf.length };
    await writeFile(dest, buf);
    return { filename, status: "ok", bytes: buf.length };
  } catch (e) {
    return { filename, status: "error", error: e.message };
  }
}

const results = [];
for (let i = 0; i < TARGETS.length; i += 5) {
  const slice = TARGETS.slice(i, i + 5);
  const r = await Promise.all(slice.map(dl));
  results.push(...r);
  process.stdout.write(`${Math.min(i + 5, TARGETS.length)}/${TARGETS.length}\n`);
}

const ok = results.filter((r) => r.status === "ok").length;
const skipped = results.filter((r) => r.status === "skipped").length;
const failed = results.filter((r) => r.status !== "ok" && r.status !== "skipped");
console.log(`\nDone — ok: ${ok}, skipped: ${skipped}, failed: ${failed.length}`);
if (failed.length) failed.forEach((f) => console.log("  FAIL:", f.filename, f.status));
