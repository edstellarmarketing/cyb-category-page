#!/usr/bin/env node
import { writeFile } from "node:fs/promises";

const PUBLIC = new URL("../public/images/cyber/", import.meta.url);

// Replacement photo IDs for the 5 that 404'd
const RETRIES = [
  ["hero-cissp.jpg",            "photo-1592772874383-d08932d29db7"], // padlock blue
  ["path-soc.jpg",              "photo-1558494949-ef010cbdcc31"],     // server / monitoring
  ["cert-cissp.jpg",            "photo-1614064548237-02f1eb4aaba9"],  // cyber lock (reuse style)
  ["cert-gdpr.jpg",             "photo-1505664194779-8beaceb93744"],  // padlock
  ["industry-government.jpg",   "photo-1486325212027-8081e485255e"],  // capitol/government
];

const BASE = "https://images.unsplash.com/";
const PARAMS = "?w=1600&q=80&auto=format&fit=crop";

for (const [filename, id] of RETRIES) {
  const url = `${BASE}${id}${PARAMS}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) { console.log("FAIL", filename, res.status); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(new URL(filename, PUBLIC), buf);
    console.log("OK", filename, buf.length);
  } catch (e) {
    console.log("ERR", filename, e.message);
  }
}
