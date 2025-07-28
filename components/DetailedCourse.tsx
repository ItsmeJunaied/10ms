'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { t } from "@/lib/Translation";
const DetailedCourse = () => {
  const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';
  return (
    <div>
      <div className="bg-white rounded-lg ">
        <h2 className="text-lg font-bold mb-6">{t('detailedCourse.title', lang)}</h2>

        <div className=" border px-6 py=2">
          <Accordion type="single" collapsible defaultValue="target-audience">
            <AccordionItem value="target-audience" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('detailedCourse.accordion.targetAudience.title', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      {t('detailedCourse.accordion.targetAudience.points.migration', lang)}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      {t('detailedCourse.accordion.targetAudience.points.residency', lang)}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      {t('detailedCourse.accordion.targetAudience.points.preparation', lang)}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      {t('detailedCourse.accordion.targetAudience.points.retake', lang)}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      {t('detailedCourse.accordion.targetAudience.points.skills', lang)}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">
                      {t('detailedCourse.accordion.targetAudience.points.budget', lang)}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about-course" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('detailedCourse.accordion.aboutCourse.title', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  {t('detailedCourse.accordion.aboutCourse.content', lang)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-it-helps">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('detailedCourse.accordion.howItHelps.title', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  {t('detailedCourse.accordion.howItHelps.content', lang)}
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