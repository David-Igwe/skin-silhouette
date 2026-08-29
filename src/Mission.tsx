import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "../components/ui/accordion";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { Minus, Plus } from "lucide-react";

const accordionItems = [
  {
    value: "item-1",
    title: "Our Vision",
    content:
      "To become Africa's most trusted experiential marketing and brand activation agency, recognised for delivering innovative campaigns that inspire audiences and accelarate business growth.",
  },
  {
    value: "item-2",
    title: "Our Mission",
    content:
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
  },
];

export default function Mission() {
  return (
    <section className="px-10 md:px-20 py-10 bg-primary">
    <Accordion className="space-y-2">
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-t-2 border-t-chart-3 border-b-primary mb-4"
        >
          <BaseAccordion.Header className="flex items-center">
            <BaseAccordion.Trigger
              data-slot="accordion-trigger"
              className="group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-3 px-5 text-left text-xl text-primary-foreground font-serif font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-panel-open]>svg]:rotate-180"
            >
              {item.title}
              <Plus className="group-data-[panel-open]:hidden text-primary-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              <Minus className="group-data-[panel-open]:block hidden text-primary-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </BaseAccordion.Trigger>
          </BaseAccordion.Header>
          <AccordionContent className="flex flex-col gap-4 px-5">
            <div className="grid grid-cols-1 md:grid-cols-[40%_55%] gap-5">
              <p className="text-primary-foreground">{item.content}</p>
              <img src="https://res.cloudinary.com/dmgrue5xh/image/upload/v1787902703/skin-silhouette-about-1_r5ijdh.jpg" className="w-full h-70 object-cover object-center rounded-lg" />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </section>
  );
}
