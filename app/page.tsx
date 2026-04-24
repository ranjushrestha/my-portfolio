"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Click to open
          </AccordionTrigger>

          <AccordionContent>
            This content should animate smoothly 👇
            <div className="mt-2 bg-blue-500 text-white p-3 rounded">
              Animation Test Content
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}