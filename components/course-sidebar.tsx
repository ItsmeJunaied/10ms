"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  Video,
  FileText,
  Download,
  Users,
  Award,
  Phone,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetCourseChecklistQuery, useGetCourseMediaQuery } from "@/lib/ieltsApi";

export default function CourseSidebar() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const {data: mediadata, isLoading, error} = useGetCourseMediaQuery({lang: 'en'})
  const {data: checklistdata, isLoading: checklistLoading, error: checklistError} = useGetCourseChecklistQuery({lang: 'en'})
  // console.log(checklistdata)
  const handlePlayVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    setCurrentVideoId("");
  };



  // Filter out only video and image items from mediadata
  const videoThumbnails = mediadata?.filter(item => item.resource_type === 'video') || [];
  const imageThumbnails = mediadata?.filter(item => item.resource_type === 'image') || [];

  // Show first video and thumbnail initially
  useEffect(() => {
    if (videoThumbnails.length > 0 && !currentVideoId) {
      setCurrentVideoId(videoThumbnails[0].resource_value);
      setIsVideoPlaying(true);
    }
  }, [videoThumbnails, currentVideoId]);

  return (
    <div className="w-full max-w-md mx-auto space-y-6 border-[1px] border-[#DBE1EB] p-[5px] ">
      {/* Hero Video Section */}
      <div className="relative w-full aspect-video bg-gradient-to-r from-gray-900 to-gray-800  overflow-hidden">
        {/* Background Image with Big Ben and Cityscape */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              videoThumbnails.length > 0 && videoThumbnails[0].thumbnail_url
                ? `url('${videoThumbnails[0].thumbnail_url}')`
                : 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" /><stop offset="100%" style="stop-color:#111827;stop-opacity:1" /></linearGradient></defs><rect width="100%" height="100%" fill="url(%23grad)"/></svg>\')',
          }}
        >
          {/* Play Button (first video by default) */}
          {!isVideoPlaying && videoThumbnails.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => handlePlayVideo(videoThumbnails[0].resource_value)}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Play className="h-8 w-8 text-green-600 ml-1" />
              </button>
            </div>
          )}
          {/* Navigation Arrows (optional, not implemented for dynamic data) */}
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
          {/* YouTube Video Player */}
          {isVideoPlaying && (
            <div className="absolute inset-0 bg-black">
              <div className="relative w-full h-full">
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Carousel - dynamic from mediadata */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {mediadata && mediadata.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 h-12 rounded-lg border-2 cursor-pointer transition-all border-gray-200 bg-gray-100 relative`}
            onClick={() => {
              if (item.resource_type === 'video') handlePlayVideo(item.resource_value);
            }}
          >
            {/* Video thumbnail */}
            {item.resource_type === 'video' && (
              item.thumbnail_url ? (
                <img
                  src={item.thumbnail_url}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                  <Play className="h-4 w-4 text-gray-600" />
                </div>
              )
            )}
            {/* Image thumbnail */}
            {item.resource_type === 'image' && (
              <img
                src={item.resource_value}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            {/* Overlay Play icon for video */}
            {item.resource_type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play className="h-4 w-4 text-white drop-shadow" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg ">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-black">৳3850</span>
          <span className="text-lg text-black line-through">৳5000</span>
        </div>
        <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
          1150 ৳ ছাড়
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className=" flex justify-center">
        <Button className="w-fit bg-[#1CAB55] hover:bg-[#15803D] text-white py-5 px-[120px] text-base font-bold rounded-b-md border-b-4 border-b-[#15803D] ">
          কোর্সটি কিনুন
        </Button>
      </div>

      {/* Course Features */}
      <div className="bg-white p-6 rounded-lg ">
        <h3 className="text-xl font-bold text-black mb-4">
          এই কোর্সে যা থাকছে
        </h3>

        <div className="space-y-3">
          {Array.isArray(checklistdata) && checklistdata.map(item => (
            <div className="flex items-center" key={item.id}>
              <img src={item.icon} alt="icon" className="h-5 w-5 mr-3 flex-shrink-0" />
              <span className="text-sm text-black">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer/Contact Section */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <div className="flex items-center text-green-600">
          <Phone className="h-4 w-4 mr-1" />
          <span className="font-semibold">ফোন করুন (16910)</span>
        </div>
      </div>
    </div>
  );
}
