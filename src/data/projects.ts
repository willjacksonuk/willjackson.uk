import type { ImageMetadata } from "astro";

import wwWebsite from "../assets/images/woven-and-woods.png";
import wwFlooringOutlet from "../assets/images/ww-flooring-outlet.png";
import theGallimaufry from "../assets/images/the-gallimaufry.png";
import wwDataConverter from "../assets/images/projects/ww-data-converter-card.png";
import wwKnowledgeBase from "../assets/images/projects/ww-knowledge-base-card.png";
import wwShowroomTicket from "../assets/images/projects/ww-showroom-ticket.jpg";

// Every piece of work on the site is a project (see CONTEXT.md).
// The order here is the order on the home page, and the order that the
// "Next project" link at the end of each case study follows.
export type Project = {
  title: string;
  kind: "website" | "tool";
  // Shown large at the top of the Work section. Use for one project only.
  featured?: boolean;
  meta: string;
  // One or two sentences for the card.
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  // Path of the case study, e.g. "/work/woven-and-woods/".
  caseStudy: string;
  // Live site, shown as a secondary "Visit site" link.
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Woven & Woods",
    kind: "website",
    featured: true,
    meta: "WordPress / Block theme / ACF / Custom plugins",
    summary:
      "Product catalogue and showroom site for an independent flooring retailer, rebuilt on a custom WordPress block theme with structured content, SEO and search The previous version, which I also built, grew organic search traffic by 95% over three years.",
    image: wwWebsite,
    imageAlt: "Screenshot of the Woven & Woods website",
    caseStudy: "/work/woven-and-woods/",
    link: "https://wovenandwoods.com",
  },
  {
    title: "Product data converter",
    kind: "tool",
    meta: "Python / TypeScript / Claude Code",
    summary:
      "A browser-based tool that turns a product spreadsheet into data for the CRM, the website and the showroom tickets - saving hours of time previously spent manually entering data.",
    image: wwDataConverter,
    imageAlt: "Screenshot of the Product Data Converter tool",
    caseStudy: "/work/product-data-converter/",
  },
  {
    title: "Automated showroom tickets",
    kind: "tool",
    meta: "CSV / P-touch Editor / Process design",
    summary:
      "Label templates that fill themselves in from the product data, with new printers and training for the team, so re-ticketing a brand is quick and consistent.",
    image: wwShowroomTicket,
    imageAlt: "A printed showroom price ticket for an oak herringbone floor",
    caseStudy: "/work/showroom-tickets/",
  },
  {
    title: "Self-hosted knowledge base",
    kind: "tool",
    meta: "Outline / Docker / Dokploy / Hetzner",
    summary:
      "The company's know-how moved from scattered documents into a self-hosted Outline knowledge base, with sign-in through staff's existing Google accounts.",
    image: wwKnowledgeBase,
    imageAlt: "Screenshot of the brand colours guide in the internal knowledge base, built on Outline",
    caseStudy: "/work/knowledge-base/",
  },
  {
    title: "W&W Flooring Outlet",
    kind: "website",
    meta: "WordPress / Block theme / WooCommerce / Square",
    summary:
      "A click-and-collect store for one-off rugs, remnants and end-of-line flooring, with Square checkout and a listing process showroom staff run themselves.",
    image: wwFlooringOutlet,
    imageAlt: "Screenshot of the W&W Flooring Outlet website",
    caseStudy: "/work/ww-flooring-outlet/",
    link: "https://outlet.wovenandwoods.com",
  },
  {
    title: "The Gallimaufry",
    kind: "website",
    meta: "Astro / TypeScript / Buzzsprout API",
    summary:
      "Website for the history podcast I co-host, generating a page for every episode from the Buzzsprout API and self-hosted with Dokploy.",
    image: theGallimaufry,
    imageAlt: "Screenshot of The Gallimaufry website",
    caseStudy: "/work/the-gallimaufry/",
    link: "https://thegallimaufry.show",
  },
];

// The project after the one whose case study is at `path`, wrapping round
// to the first.
export function nextProject(path: string): Project | undefined {
  const index = projects.findIndex((project) => project.caseStudy === path);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
