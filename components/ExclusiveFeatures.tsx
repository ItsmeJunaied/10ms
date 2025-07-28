'use client'
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
import { Check } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const ExclusiveFeatures = () => {
  const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';

    const {data: exclusive_features, isLoading, error} = useGetSectionByTypeQuery({lang: lang, sectionType: 'feature_explanations'})

    if (isLoading) return <div>Loading exclusive features...</div>;
    if (error) return <div>Error loading exclusive features.</div>;
    if (!exclusive_features || !Array.isArray(exclusive_features.values)) return <div>No exclusive features found.</div>;

    return (
      <div>
        <div className="bg-white rounded-lg ">
          <h2 className="text-2xl font-bold mb-6">{exclusive_features.name || 'কোর্স এক্সক্লুসিভ ফিচার'}</h2>

          <div className="space-y-6 border p-6 rounded-lg">
            {exclusive_features.values.map((feature, idx) => (
              <React.Fragment key={feature.id}>
                <div className="grid grid-cols-12 gap-4 p-4 ">
                  <div className="col-span-8">
                    <h3 className=" mb-2">{feature.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      {Array.isArray(feature.checklist) && feature.checklist.map((item: string, idx: number) => (
                        <div className="flex items-center" key={idx}>
                          <Check className="h-4 w-4 text-blue-500 mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    {feature.file_type === 'image' && feature.file_url && (
                      <img
                        src={feature.file_url}
                        alt={feature.title}
                        className=" object-cover"
                      />
                    )}
                  </div>
                </div>
                {idx !== exclusive_features.values.length - 1 && <Separator className="my-4" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ExclusiveFeatures;
