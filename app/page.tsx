'use client';

import CourseContent from "@/components/course-content";
import CourseHero from "@/components/course-hero";
import CourseNavigation from "@/components/course-navigation";
import CourseSidebar from "@/components/course-sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import RelatedCourses from "@/components/related-courses";
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { useGetCourseSeoQuery } from '@/lib/ieltsApi';
import { useEffect } from 'react';

export default function Home() {
  const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';
  const { data: seoData, isLoading, error } = useGetCourseSeoQuery({ lang });

  // Set SEO meta tags when data is available
  useEffect(() => {
    if (!seoData) return;

    // Set title
    document.title = seoData.title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);

    // Set keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords.join(', '));

    // Set Open Graph and other meta tags
    seoData.defaultMeta.forEach((meta: any) => {
      let metaTag = document.querySelector(`meta[${meta.type}="${meta.value}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(meta.type, meta.value);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', meta.content);
    });

    // Set JSON-LD schema
    seoData.schema.forEach((schema: any) => {
      if (schema.type === 'ld-json' && schema.meta_value) {
        let script = document.querySelector(`script[type="application/ld+json"]`);
        if (!script) {
          script = document.createElement('script');
          script.setAttribute('type', 'application/ld+json');
          document.head.appendChild(script);
        }
        script.textContent = schema.meta_value;
      }
    });
  }, [seoData, lang]);

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-[300px] z-0 bg-[url('/hero_bg.jpeg')] bg-no-repeat bg-cover bg-center"
      />

      <div className="relative z-10 ">
        <div className="max-w-6xl mx-auto ">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-row gap-8">
              <div className="w-2/3">
                <CourseHero />
                <CourseNavigation />
                <div className=" p-6">
                  <CourseContent />
                </div>
              </div>
              <div className="w-1/3">
                <CourseSidebar />
              </div>
            </div>
          </div>
          {/* <RelatedCourses /> */}
        </div>
      </div>
    </div>
  );
}
