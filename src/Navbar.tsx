import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Our Works", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <section className="w-full bg-background text-foreground">
      <header className="relative flex h-16 w-full items-center px-6">
        <a href="#" className="flex shrink-0 items-center gap-2.5 font-serif font-medium text-lg">
          Skin Silhouette
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              render={<a href={link.href} />}
              nativeButton={false}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Button
            render={<a href="#" />}
            nativeButton={false}
            className="hidden sm:inline-flex font-normal p-3"
          >
            Book Appointment
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
              aria-label="Open menu"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5">
                  Skin Silhouette
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-2">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    render={<a href={link.href} />}
                    nativeButton={false}
                    className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter>
                <Button
                  render={<a href="#" />}
                  nativeButton={false}
                  className="w-full"
                >
                  Book Appointment
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </section>
  );
}
