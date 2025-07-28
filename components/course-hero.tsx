'use client';
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useGetCourseDataQuery } from "@/lib/ieltsApi";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/Translation";

export default function CourseHero() {
  const lang = useSelector((state: RootState) => state.language.lang);
  const { data, isLoading, error } = useGetCourseDataQuery({ lang: lang as 'en' | 'bn' });

  if (isLoading) return <div>Loading instructors...</div>;
  if (error) return <div>Error loading instructors</div>;

  const title = data?.title || '';
  const description = data?.description || '';
  const ratingText = translations.ratingText[lang as keyof typeof translations.ratingText];
  return (
    <div className="   text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-row gap-8 items-start">
          {/* Left Content */}
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-xs">{ratingText}</span>
            </div>
            <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </div>
  )
}
