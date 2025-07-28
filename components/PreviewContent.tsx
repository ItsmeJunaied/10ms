import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "./ui/button";
const PreviewContent = () => {
  return (
    <div>
      <div className="bg-white rounded-lg ">
        <h2 className="text-lg font-bold mb-6">কনটেন্ট প্রিভিউ</h2>

        <div className=" border p-6 rounded-lg">
          <Accordion type="single" collapsible defaultValue="introduction">
            <AccordionItem value="introduction" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                Introduction
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        Video: IELTS: Introduction
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      ফ্রি দেখুন
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">Video: IELTS: Overview</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      ফ্রি দেখুন
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        Video: How to Prepare for IELTS?
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      ফ্রি দেখুন
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        Video: Making a Daily Routine
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      ফ্রি দেখুন
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      Video: Different Sentence Structures to Improve Writing
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      IELTS General Facts
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      IELTS Vocabulary
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support-group" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                IELTS Course by Munzereen Shahid | Exclusive Support Group
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Support group content will be shown here.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="academic-reading" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                Academic Reading
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Academic reading content will be shown here.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mock-test" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                Academic Reading Mock Test
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Mock test content will be shown here.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="listening">
              <AccordionTrigger className="text-left font-medium py-4">
                Listening
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Listening content will be shown here.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="-mt-6 w-full justify-center flex ">
          <Button variant="outline" className="text-gray-600  text-center bg-white rounded-3xl shadow-2xl w-fit">
            সকল কনটেন্ট <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
