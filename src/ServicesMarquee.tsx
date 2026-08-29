import MarqueeModule from "react-fast-marquee";
import { Sparkle } from "lucide-react";

export default function ServicesMarquee() {
  const services = [
    "TRICOLOGY",
    "HAIR THINNING",
    "LASER TREATMENT",
    "ALOPECIA TREATMENT",
    "EXOSOMES",
    "BBL",
    "HIFU",
    "FACIALS",
    "HAIR FIX",
    "INJECTIBLES",
  ];

  const Marquee = MarqueeModule.default;


  return (
    <div className="w-full border-y bg-foreground text-background dark:border-border">
      <Marquee speed={50} gradient={false} pauseOnHover={true} className="h-10">
        {services.map((text, index) => (
          <div key={index} className="flex items-center gap-6 pr-6">
            <span className="text-sm font-medium tracking-wide">{text}</span>

            <Sparkle fill="yellow" className="size-5 rotate-45 text-muted-foreground/60" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
