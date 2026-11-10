export type Contact = {
  label: string;
  text: string;
  href: string;
  ariaLabel?: string;
};

export const contact: Contact[] = [
  {
    label: "Email",
    text: "will@willjackson.uk",
    href: "mailto:will@willjackson.uk",
    ariaLabel: "Email Will"
  },
  {
    label: "GitHub",
    text: "github.com/willjacksonuk",
    href: "https://github.com/willjacksonuk",
    ariaLabel: "View Will\'s GitHub profile",
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/wejackson",
    href: "https://linkedin.com/in/wejackson",
    ariaLabel: "View Will\'s LinkedIn profile",
  },
  {
    label: "CV",
    text: "Download PDF",
    href: "/willjackson-cv-public.pdf",
    ariaLabel: "Download Will Jackson\'s CV (PDF)"
  },
];
