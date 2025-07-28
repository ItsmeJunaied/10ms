"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
const FAQ = () => {
  const {
    data: faq,
    isLoading,
    error,
  } = useGetSectionByTypeQuery({ lang: "en", sectionType: "faq" });

  if (isLoading) return <div>Loading FAQs...</div>;
  if (error) return <div>Error loading FAQs.</div>;
  if (!faq || !Array.isArray(faq.values)) return <div>No FAQs found.</div>;

  return (
    <div>
      <div className="bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-6">
          {faq.name || "সচরাচর জিজ্ঞাসা"}
        </h2>

        <div className="border p-6">
          <Accordion type="single" collapsible>
            {faq.values.map((item) => (
              <AccordionItem value={item.id} className="border-b" key={item.id}>
                <AccordionTrigger className="text-left font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div
                    className="space-y-4 text-sm"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="-mt-6 text-center flex justify-center">
          <Button variant="outline" className="text-gray-600 bg-white rounded-3xl shadow-2xl">
            সকল প্রশ্ন-উত্তর <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
