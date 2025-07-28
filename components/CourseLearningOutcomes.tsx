'use client'
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
import { Check } from "lucide-react";
import React from "react";

const CourseLearningOutcomes = () => {
  const {data: pointers, isLoading, error} = useGetSectionByTypeQuery({lang: 'en', sectionType: 'pointers'})

  if (isLoading) return <div>Loading learning outcomes...</div>;
  if (error) return <div>Error loading learning outcomes.</div>;
  if (!pointers || !Array.isArray(pointers.values)) return <div>No learning outcomes found.</div>;


  const mid = Math.ceil(pointers.values.length / 2);
  const col1 = pointers.values.slice(0, mid);
  const col2 = pointers.values.slice(mid);

  return (
    <div>
      <div className="bg-white rounded-lg  mt-10 ">
        <h2 className="text-lg font-bold mb-6">{pointers.name || 'কোর্সটি করে যা শিখবেন'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-6 rounded-lg">
          <div className="space-y-3">
            {col1.map(item => (
              <div className="flex items-start" key={item.id}>
                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-base">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {col2.map(item => (
              <div className="flex items-start" key={item.id}>
                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningOutcomes;
