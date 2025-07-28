'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { t } from "@/lib/Translation";

const PreviewContent = () => {
  const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';

  return (
    <div>
      <div className="bg-white rounded-lg">
        <h2 className="text-lg font-bold mb-6">
          {t('previewContent.title', lang)}
        </h2>

        <div className="border p-6 rounded-lg">
          <Accordion type="single" collapsible defaultValue="introduction">
            <AccordionItem value="introduction" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('previewContent.sections.introduction', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        {t('previewContent.videos.introduction', lang)}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      {t('previewContent.freeWatch', lang)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        {t('previewContent.videos.overview', lang)}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      {t('previewContent.freeWatch', lang)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        {t('previewContent.videos.preparation', lang)}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      {t('previewContent.freeWatch', lang)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">
                        {t('previewContent.videos.routine', lang)}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      {t('previewContent.freeWatch', lang)}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {t('previewContent.videos.writing', lang)}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {t('previewContent.videos.facts', lang)}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {t('previewContent.videos.vocabulary', lang)}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support-group" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('previewContent.sections.supportGroup', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  {t('previewContent.supportGroupContent', lang)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="academic-reading" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('previewContent.sections.academicReading', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  {t('previewContent.academicReadingContent', lang)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mock-test" className="border-b">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('previewContent.sections.mockTest', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  {t('previewContent.mockTestContent', lang)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="listening">
              <AccordionTrigger className="text-left font-medium py-4">
                {t('previewContent.sections.listening', lang)}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-gray-600">
                  {t('previewContent.listeningContent', lang)}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="-mt-6 w-full justify-center flex">
          <Button 
            variant="outline" 
            className="text-gray-600 text-center bg-white rounded-3xl shadow-2xl w-fit"
          >
            {t('previewContent.viewAll', lang)} <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;