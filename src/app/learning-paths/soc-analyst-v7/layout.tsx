import type { Metadata } from "next";

const SITE_URL = "https://edstellar.com";
const PAGE_PATH = "/learning-paths/soc-analyst-v7";
const OG_IMAGE = `${SITE_URL}/images/cyber/v7/hero-img.png`;

// 56 chars
const TITLE = "SOC Analyst Learning Path | Edstellar Enterprise Cohorts";
// 156 chars
const DESCRIPTION =
  "Enterprise SOC Analyst Learning Path by Edstellar. Instructor-led cohorts in MITRE ATT&CK, SIEM, EDR/XDR, threat hunting & IR. 8–50 analysts. MSA/DPA ready.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Edstellar",
  keywords: [
    "SOC analyst learning path",
    "SOC analyst learning path for teams",
    "SOC analyst learning path for L1 L2",
    "enterprise SOC analyst learning path",
    "corporate SOC training cohort",
    "MITRE ATT&CK training cohort",
    "SIEM training for SOC team",
    "EDR XDR training cohort",
    "threat hunting cohort training",
    "incident response training corporate",
    "instructor-led SOC training",
    "blue team training enterprise",
  ],
  authors: [{ name: "Edstellar" }],
  creator: "Edstellar",
  publisher: "Edstellar",
  category: "Corporate Training",
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Edstellar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Edstellar SOC Analyst Learning Path — enterprise cohort training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@edstellar",
    creator: "@edstellar",
    images: [OG_IMAGE],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function SocAnalystV7Layout({ children }: { children: React.ReactNode }) {
  return children;
}
