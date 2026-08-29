import {type ElementType} from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Mail, Smartphone, MapPin } from "lucide-react";

type columnType = {
    title : string,
    links : {
        label : string,
        href : string,
        icon ?: ElementType
    }[]
}

const columns: columnType[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#" },
      { label: "Our works", href: "#" },
      { label: "About", href: "#" },
    ],
  },
  {
    title: "More Links",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "About", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        label: "info@skinsilhouette.com",
        href: "mailto:info@skinsilhouette.com",
        icon: Mail,
      },
      {
        label: "+234 812 582 1771",
        href: "tel:+2348125821771",
        icon: Smartphone,
      },
      { label: "London, United Kingdom", href: "#", icon: MapPin },
    ],
  },
];

export default function Footer() {
  return (
    <section className="relative md:mt-40 lg:mt-30">
      <div className="md:absolute md:-top-30 lg:-top-20 w-full px-10 md:px-20 my-10 md:my-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-between md:items-center rounded-[10px] bg-border px-5 py-10">
          <div>
            <h2 className="text-primary font-serif font-semibold text-2xl mb-2">
              Planning Your Next Brand Activation?
            </h2>
            <p className="text-sm">
              Tell us and we'll help you turn the idea into a memorable brand
              experience.
            </p>
          </div>
          <Button
            render={<a href="#" />}
            nativeButton={false}
            variant="default"
            className="w-fit rounded-full p-5"
          >
            Book Appointment
          </Button>
        </div>
      </div>

      <footer className="w-full px-6 pt-10 md:pt-25 pb-10 sm:px-6 bg-primary text-muted-foreground">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-1">
              <span className="text-2xl font-semibold font-serif text-primary-foreground">
                Skin Silhouette
              </span>
            </a>
            <p className="mt-3 text-sm font-light text-primary-foreground">
              Your trusted partner for designing, branding, and printing
              solutions that bring your vision to life.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-serif text-primary-foreground font-bold">
                  {col.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {col.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href ?? "#"}
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-background"
                        >
                          {Icon ? <Icon className="size-4 text-secondary shrink-0" /> : null}
                          <span>{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="mt-10 bg-muted-foreground" />
        <p className="text-sm mt-4 text-center text-primary-foreground">
          &copy; 2026 Acme. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
