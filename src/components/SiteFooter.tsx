import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Privacy", to: "/#privacy" },
  { label: "Terms", to: "/#terms" },
  { label: "About us", to: "/#about" },
  { label: "Site map", to: "/#sitemap" },
  { label: "Contact", to: "/#contact" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-secondary/20">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-foreground">Golden Fortune</p>
          <p className="text-sm text-muted-foreground">Modern Chinese takeaway for polished Friday-night feasts.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};