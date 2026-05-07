export type Maturity = "none" | "new" | "operating" | "mature";
export type Role =
  | "l1"
  | "l2"
  | "l3"
  | "ir"
  | "manager"
  | "detection-eng"
  | "cloud-soc"
  | "other";
export type Stack = "splunk" | "sentinel" | "chronicle" | "qradar" | "elk" | "other";
export type Sector =
  | "bfsi"
  | "healthcare"
  | "mfg"
  | "saas"
  | "gov"
  | "energy"
  | "retail"
  | "telecom"
  | "other";
export type Gap =
  | "tooling"
  | "hunting"
  | "ir-coord"
  | "leadership-reporting"
  | "comms"
  | "docs"
  | "burnout"
  | "other";
export type Duration = 4 | 8 | 12 | 16 | 26 | null;
export type Delivery = "vilt" | "on-site" | "blended" | "other";
export type TeamSize = "1-5" | "6-15" | "16-50" | "50+" | "other";

export type ModuleKind = "core" | "adjacent" | "soft";

export type SurveyAnswers = {
  maturity: Maturity;
  roles: Role[];
  stack: Stack;
  sector: Sector;
  gaps: Gap[];
  duration: Duration;
  delivery: Delivery;
  teamSize?: TeamSize;
  // Free-text capture when the user picks "other" on any MCQ
  rolesOther?: string;
  stackOther?: string;
  sectorOther?: string;
  gapsOther?: string;
  deliveryOther?: string;
  teamSizeOther?: string;
  leadName?: string;
  leadEmail?: string;
  leadCompany?: string;
};

export type CatalogModule = {
  id: string;
  title: string;
  kind: ModuleKind;
  description: string;
  hoursRange: [number, number];
  signals: {
    maturity?: Maturity[];
    roles?: Role[];
    stacks?: Stack[];
    sectors?: Sector[];
    gaps?: Gap[];
  };
};

export type GeneratedTrackStage = {
  label: string;
  weeks: number;
  modules: Array<{
    id: string;
    title: string;
    kind: ModuleKind;
    hours: number;
    rationale: string;
  }>;
};

export type GeneratedTrack = {
  trackId: string;
  headline: string;
  summary: string;
  totals: {
    weeks: number;
    moduleCount: number;
    hours: number;
    deliveryNote: string;
  };
  stages: GeneratedTrackStage[];
  caveats: string[];
  servedFromFallback: boolean;
};
