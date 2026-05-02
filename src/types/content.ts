// Strongly-typed content shapes used by the page sections.

export type Slide = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Big edge-to-edge desktop hero image */
  imageDesktop: string;
  imageAlt: string;
};

export type SliderNavItem = {
  category: string;
  title: string;
};

export type TabberCategory = {
  /** Strip label, e.g. "SMARTPHONES" */
  label: string;
  /** Card title, e.g. "PRODUCTS" */
  cardTitle: string;
  /** Card paragraph */
  cardDescription: string;
  /** Right-side product image */
  image: string;
  imageAlt: string;
  href: string;
};

export type TabberTab = {
  id: "products" | "technology";
  label: string;
  categories: TabberCategory[];
};

export type NewsCard = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type CorporateNewsCard = {
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type CustomerCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type MoreCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};
