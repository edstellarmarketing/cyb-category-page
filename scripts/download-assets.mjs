#!/usr/bin/env node
// Download all mediatek.com assets (images, fonts, logo SVG) to public/.
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";

const PUBLIC = new URL("../public/", import.meta.url);
const TARGETS = {
  images: [
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/Quarterly%20Investor.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/Home%20Page%20Hero%20Banner_Desktop_1920X850.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/D9500S_Home%20Page%20Hero%20Banner_Desktop_1920X850.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Banners/Candice_Desktop.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Banners/Desktop_Kompanio-Ultra-910-2.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/D8500_Home%20Page%20Hero%20Banner_Desktop_1920X850.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Banners/Home%20Page%20Hero%20Banner_Desktop_1920X850.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Slider%20images/Desktop_AI.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Slider%20images/Product_homepage.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Slider%20images/Smartphone_homepage.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/smart-home.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/connectivity.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Slider%20images/IoT_homepage.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/hromebook.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/Auto.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/ASIC.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/Technology_5Ghome_card.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/Display-card.jpg",
    "https://www.mediatek.com/hubfs/MediaTek_Mar_2024/images/Wifi.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/Camera-card.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/AI-1.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/hyperengine-card.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/White-Paper_card.png",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Static%20Images/One%20MediaTek%20Evolving%20Our%20Brand%20for%20the%20AI%20Edge%20to%20Cloud%20Future04_Blog.png?width=600&height=600&name=One%20MediaTek%20Evolving%20Our%20Brand%20for%20the%20AI%20Edge%20to%20Cloud%20Future04_Blog.png",
    "https://www.mediatek.com/hs-fs/hubfs/LexisNexis0326_EN.jpg?width=600&height=600&name=LexisNexis0326_EN.jpg",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Blog/MediaTek%20receives%20ISSCC%20Anantha%20P.%20Chandrakasan%20Distinguished%20Technical%20Paper%20Award_.jpg?width=600&height=600&name=MediaTek%20receives%20ISSCC%20Anantha%20P.%20Chandrakasan%20Distinguished%20Technical%20Paper%20Award_.jpg",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Blog/Interbrand2025_Blog.png?width=600&height=600&name=Interbrand2025_Blog.png",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Home%20Page/Best%20company%20work%20for_Corporate%20news_section.jpg?width=600&height=600&name=Best%20company%20work%20for_Corporate%20news_section.jpg",
    "https://www.mediatek.com/hs-fs/hubfs/NVIDIA_AI_Factory.jpg?width=600&height=600&name=NVIDIA_AI_Factory.jpg",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Home%20Page/ESA_NTN_blog.jpg?width=600&height=600&name=ESA_NTN_blog.jpg",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Blog/MediaTek%20successfully%20develops%20first%20chip%20using%20TSMC%203nm%20process.jpg?width=600&height=600&name=MediaTek%20successfully%20develops%20first%20chip%20using%20TSMC%203nm%20process.jpg",
    "https://www.mediatek.com/hs-fs/hubfs/MediaTek%20Assets/Images/Home%20Page/NVFusion_Blog%200525.png?width=600&height=600&name=NVFusion_Blog%200525.png",
    "https://www.mediatek.com/hubfs/2.%20Centre%20Aligned%20text-%20What%20it%20takes%20to%20design%20an%20AI%20superchip.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Blog/MTK_%20LiteRT.png",
    "https://www.mediatek.com/hubfs/Transforming%20the%20food%20%26%20beverage%20industry%20with%20MediaTek%20Genio.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Blog/Expect%20Incredible%20Awards%202025.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Blog/What%20are%20Multimodal%20Gen-AI%20Automotive%20Cockpit%20Platforms.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/genio%20card.jpg",
    "https://www.mediatek.com/hubfs/pd-rajput.png",
    "https://www.mediatek.com/hubfs/All-Day%20Power%20MediaTek%E2%80%99s%20Battery%20Life%20Advantage%20Across%20Every%20Segment.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Blog/9500s%20and%20Dimensity%208500%20launch_.png",
    "https://www.mediatek.com/hubfs/wi-fi-8%20filogic%20chip%20card.jpg",
    "https://www.mediatek.com/hubfs/Ask%20not%20what%20AI%20can%20do%20for%20Wi-Fi%2c%20but%20what%20Wi-Fi%20can%20do%20for%20AI-1.jpg",
    "https://www.mediatek.com/hubfs/Kompanio%20540%20-%20launch%20blog.webp",
    "https://www.mediatek.com/hubfs/IAA%20Mobility%202025%20MediaTek%20Accelerates%20Automotive%20Experiences.jpg",
    "https://www.mediatek.com/hubfs/15k-mini-RGB-LED.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Blog/Case%20Study_%20MediaTek%20MT9630%20Powers%20the%20Lumio%20Arc%205%20%26%20Arc%207%20Projectors.png",
    "https://www.mediatek.com/hubfs/speedport-7-grey.png",
    "https://www.mediatek.com/hubfs/11th%20NOV-%20Grinn%20GenioBoard%20Edge%20AI%20SBC%20Powered%20by%20MediaTek%20Genio%20700.jpg",
    "https://www.mediatek.com/hubfs/%23221%20-%20MediaTek%20and%20DENSO%20Collaborate%20on%20Auto%20SoCs.png",
    "https://www.mediatek.com/hubfs/%23222%20-%20MediaTek%20and%20NTE%20Advance%20Mobile%20Gaming%20Performance.png",
    "https://www.mediatek.com/hubfs/%23223%20-%20OPPO%20Find%20X9%20powered%20by%20MediaTek%20Dimensity%209500.png",
    "https://www.mediatek.com/hubfs/%23224%20-%20vivo%20x300%20series%20powered%20by%20MediaTek%20Dimensity%209500.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/PoweredByHomepage_Mediatek.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/InsideTekHero_Card.png",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Static%20Images/Connection%20page%20card%20image%20for%20home%20page2%20(2).jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/11-3.jpg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/Home%20Page/22.jpg",
    "https://www.mediatek.com/hubfs/raw_assets/public/MediaTek_Mar_2024/images/mediatek-logo.svg",
    "https://www.mediatek.com/hubfs/MediaTek%20Assets/Images/MediaTek-Logo.png",
  ],
  fonts: [
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/MediaTek_Mar_2024/fonts/RionaSans-Light.woff",
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/MediaTek_Mar_2024/fonts/RionaSans-ExtraLight.woff",
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/Summit%202023/fonts/RionaSans-Regular.woff",
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/MediaTek_Mar_2024/fonts/RionaSans-RegularItalic.woff",
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/Summit%202023/fonts/RionaSans-Medium.woff",
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/Summit%202023/fonts/RionaSans-Bold.woff",
    "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/Summit%202023/fonts/RionaSans-Black.woff",
  ],
  seo: ["https://www.mediatek.com/hubfs/favicon.ico"],
};

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "");

const filenameFromUrl = (url, kind) => {
  const u = new URL(url);
  const last = decodeURIComponent(u.pathname.split("/").pop()).replace(/\?.*$/, "").trim();
  const base = last.replace(/^[#@]/, "").replace(/[%]/g, "-");
  if (kind === "fonts") return base.replace(/\s+/g, "");
  // For images, just keep last segment with simple slug
  return base.replace(/\s+/g, "-");
};

async function dl(url, dir, kind) {
  const filename = filenameFromUrl(url, kind);
  const dest = new URL(`${dir}/${filename}`, PUBLIC);
  if (existsSync(dest)) return { url, status: "skipped" };
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { url, status: `http ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest.pathname.replace(/^\//, "")), { recursive: true });
    await writeFile(dest, buf);
    return { url, status: "ok", bytes: buf.length, path: dest.pathname };
  } catch (e) {
    return { url, status: "error", error: e.message };
  }
}

async function batch(urls, dir, kind, concurrency = 6) {
  const results = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    const slice = urls.slice(i, i + concurrency);
    const r = await Promise.all(slice.map((u) => dl(u, dir, kind)));
    results.push(...r);
    process.stdout.write(`[${kind}] ${Math.min(i + concurrency, urls.length)}/${urls.length}\n`);
  }
  return results;
}

const all = [];
all.push(...(await batch(TARGETS.images, "images", "images")));
all.push(...(await batch(TARGETS.fonts, "fonts", "fonts")));
all.push(...(await batch(TARGETS.seo, "seo", "seo")));

const ok = all.filter((r) => r.status === "ok").length;
const skipped = all.filter((r) => r.status === "skipped").length;
const failed = all.filter((r) => r.status !== "ok" && r.status !== "skipped");
console.log(`\nDone — ok: ${ok}, skipped: ${skipped}, failed: ${failed.length}`);
if (failed.length) failed.forEach((f) => console.log("  FAIL:", f.url, f.status, f.error || ""));
