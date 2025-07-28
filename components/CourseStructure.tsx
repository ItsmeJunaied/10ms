'use client'
import { FileText, Headphones, Play, Target, Wifi } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const CourseStructure = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const {data: features, isLoading, error} = useGetSectionByTypeQuery({lang: lang as 'en' | 'bn', sectionType: 'features'})
  const {data: groupJoinEngagement, isLoading: groupJoinEngagementLoading, error: groupJoinEngagementError} = useGetSectionByTypeQuery({lang: lang as 'en' | 'bn', sectionType: 'group_join_engagement'})


  if (isLoading) return <div>Loading course structure...</div>;
  if (error) return <div>Error loading course structure.</div>;
  if (!features || !Array.isArray(features.values)) return <div>No course structure data found.</div>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-black">
        {features.name}
      </h2>
      <div className="bg-[#10192D] rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.values.map((item) => (
            <div className="flex items-start gap-4" key={item.id}>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center ">
                  <img src={item.icon} alt={item.title} width={35} height={35} />
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* groupengagement section */}
        {groupJoinEngagement && Array.isArray(groupJoinEngagement.values) && groupJoinEngagement.values.length > 0 && (
          groupJoinEngagement.values.map((item) => (
            <div
              key={item.id}
              className="bg-no-repeat bg-cover rounded-lg px-4 mt-10"
              style={{
                backgroundImage: item.background?.image ? `url('${item.background.image}')` : undefined,
                backgroundColor: item.background?.primary_color || undefined,
              }}
            >
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-row gap-8 items-center">
                  {/* Left content */}
                  <div className="text-white w-1/2 flex flex-col gap-3">
                    {/* Top left icon */}
                    {item.top_left_icon_img && (
                      <div className="flex items-center gap-3 mb-8">
                        <img
                          src={item.top_left_icon_img}
                          alt="icon"
                          width={48}
                          height={48}
                          className="w-38  rounded-full"
                        />
                      </div>
                    )}
                    <h1
                      className="text-lg font-bold leading-tight"
                      style={{ color: item.title_color || undefined }}
                    >
                      {item.title}
                    </h1>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: item.description_color || undefined }}
                    >
                      {item.description}
                    </p>
                    {item.cta && (
                      <a
                        href={item.cta.clicked_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit bg-[#1CAB55] hover:bg-[#15803D] text-white py-2 px-[30px] text-base font-bold rounded-md border-b-4 border-b-[#15803D] inline-block"
                        style={{ backgroundColor: item.cta.color || undefined }}
                      >
                        {item.cta.text}
                      </a>
                    )}
                  </div>
                  {/* Right content - Thumbnail */}
                  <div className="rounded-2xl p-6 w-1/2">
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt="Student testimonials showing IELTS scores"
                        width={500}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
    </div>
  );
};

export default CourseStructure;
