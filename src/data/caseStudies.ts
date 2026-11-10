import type { ImageMetadata } from "astro";

import wwDataConverter from "../assets/images/projects/ww-data-converter-card.png";
import wwKnowledgeBase from "../assets/images/projects/ww-knowledge-base-card.png";
import wwShowroomTicket from "../assets/images/projects/ww-showroom-ticket.jpg";

export type CaseStudy = {
  title: string;
  meta: string;
  description: string;
  image?: ImageMetadata;
  imageAlt?: string;
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Product data pipeline",
    meta: "Python / TypeScript / Claude Code",
    description:
      "Updating a brand's product data used to take most of a working day of copying between spreadsheets and systems. I wrote a Python script to automate it, then rebuilt it as a browser-based tool the whole team can use. One spreadsheet now feeds the CRM, the website and the showroom tickets, and an update takes an hour or two.",
    image: wwDataConverter,
    imageAlt: "Screenshot of the Product Data Converter tool",
    link: "/work/product-data-pipeline/",
  },
  {
    title: "Automated showroom tickets",
    meta: "CSV / P-touch Editor / Process design",
    description:
      "Showroom price tickets used to be typed up by hand, printed on A4 and cut out. I built label templates that fill themselves in from the product data pipeline, rolled out label printers and trained the team. Re-ticketing a brand now takes minutes rather than hours.",
    image: wwShowroomTicket,
    imageAlt: "A printed showroom price ticket for an oak herringbone floor",
    link: "/work/showroom-tickets/",
  },
  {
    title: "Self-hosted knowledge base",
    meta: "Outline / Docker / Dokploy / Hetzner",
    description:
      "I moved the company's know-how from scattered documents into a self-hosted Outline knowledge base, organised around how the business works. Staff sign in with their existing Google accounts, and it runs alongside other internal tools on a single Hetzner VPS.",
    image: wwKnowledgeBase,
    imageAlt: "Screenshot of the brand colours guide in the internal knowledge base, built on Outline",
    link: "/work/knowledge-base/",
  },
];
