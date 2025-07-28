import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const DetailedCourse = () => {
  return (
    <div>
      <div className="bg-white rounded-lg ">
        <h2 className="text-lg font-bold mb-6">কোর্স সম্পর্কে বিস্তারিত</h2>

        <div className=" border px-6 py=2">
          <Accordion type="single" collapsible defaultValue="target-audience">
            <AccordionItem value="target-audience" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                IELTS Course-টি যাদের জন্য
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      যারা উন্নতশীল, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      যারা উন্নতশীল লেখে বা দেশে বসরাসরত অভ্যাস নিতে চান অথবা
                      বসবাসের জন্য আবেদন করতে চান।
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      IELTS পরীক্ষা ঘাতের জন্য উৎকৃষ্ট, কিন্তু নানা IELTS
                      প্রস্তুতি কোর্স থেকে গুছ করবেন না জানেন না।
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score
                      বাড়াতে চান।
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      যারা চাকরি বা বৃত্তির কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের
                      reading, writing, listening এবং speaking দক্ষতা বাড়াতে
                      চান।
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      স্টুডেন্ট কিংবা চাকরিজীবীদের মতো যারা বাজেতার কারণে ঘরে
                      অনেক IELTS এর জন্য তৈরি প্রস্তুতি নিতে চান।
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about-course" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                IELTS Course-টি কোর্স সম্পর্কে
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Course details will be shown here.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-it-helps">
              <AccordionTrigger className="text-left font-medium py-4">
                এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  How it helps content will be shown here.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default DetailedCourse;
