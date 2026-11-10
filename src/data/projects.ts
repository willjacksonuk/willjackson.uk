import type { ImageMetadata } from "astro";

import wwWebsite from "../assets/images/woven-and-woods.png";
import wwFlooringOutlet from "../assets/images/ww-flooring-outlet.png";
import theGallimaufry from "../assets/images/the-gallimaufry.png";

export type Project = {
  title: string;
  meta: string;
  description: string;
  link: string;
  linkText: string;
  image: ImageMetadata;
  imageAlt: string;
  status?: "live" | "internal" | "in-development";
  caseStudyLink?: string;
};

export const projects: Project[] = [
  {
    title: "Woven & Woods",
    meta: "WordPress / Block theme / ACF / Custom plugins",
    description:
      "Product catalogue and showroom site for an independent flooring retailer, rebuilt on a custom WordPress block theme with around 40 bespoke blocks, content structured in ACF, and search and AI visibility protected through the move. The previous version grew organic search traffic by 95% over three years.",
    link: "https://wovenandwoods.com",
    linkText: "Visit site",
    image: wwWebsite,
    imageAlt: "Screenshot of the Woven & Woods website",
    status: "live",
    caseStudyLink: "/work/woven-and-woods/",
  },
  {
    title: "The Gallimaufry",
    meta: "Astro / TypeScript / Buzzsprout API",
    description:
      "Website for The Gallimaufry, a history podcast I co-host (2020–2024, currently on a break). Built in Astro and TypeScript, it generates a page for every episode from the Buzzsprout API, screens contact-form spam and is self-hosted with Dokploy.",
    link: "https://thegallimaufry.show",
    linkText: "Visit site",
    image: theGallimaufry,
    imageAlt: "Screenshot of The Gallimaufry website",
    status: "live",
    caseStudyLink: "/work/the-gallimaufry/",
  },
  {
    title: "W&W Flooring Outlet",
    meta: "WordPress / Block theme / WooCommerce / Square",
    description:
      "Click-and-collect store for Woven & Woods' one-off rugs, remnants and end-of-line flooring. Built on a from-scratch block theme that became the testbed for the new main site, with Square checkout and a listing process showroom staff run themselves.",
    link: "https://outlet.wovenandwoods.com",
    linkText: "Visit site",
    image: wwFlooringOutlet,
    imageAlt: "Screenshot of the W&W Flooring Outlet website",
    status: "live",
    caseStudyLink: "/work/ww-flooring-outlet/",
  },
];
