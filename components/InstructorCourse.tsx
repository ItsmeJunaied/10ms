'use client'
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const InstructorCourse = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
    const {data: instructor, isLoading, error} = useGetSectionByTypeQuery({lang: lang as 'en' | 'bn', sectionType: 'instructors'})
    

    if (isLoading) return <div>Loading instructor...</div>;
    if (error) return <div>Error loading instructor.</div>;
    if (!instructor) return <div>No instructor data found.</div>;


    return (
      <div>
        <div className="bg-white  ">
          <h2 className="text-lg font-bold mb-6">{instructor.name || "কোর্স ইন্সট্রাক্টর"}</h2>

          {Array.isArray(instructor.values) && instructor.values.length > 0 ? (
            instructor.values.map((inst, idx) => (
              <div className="flex items-start space-x-4 border rounded-lg p-4 !pb-6 mb-4" key={inst.id || idx}>
                <div className="w-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={inst.image || "/placeholder.svg?height=80&width=80"}
                    alt={inst.name || "Instructor"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-0">{inst.name || "Instructor"}</h3>
                  <div className="text-gray-600 space-y-1 text-sm">
                    {inst.description ? (
                      <div dangerouslySetInnerHTML={{ __html: inst.description }} />
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No instructor details available.</div>
          )}
        </div>
      </div>
    );
}

export default InstructorCourse;
