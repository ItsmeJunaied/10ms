"use client";

import { useState, useEffect, useRef } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CourseSidebar() {
  const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { data: mediadata, isLoading, error } = useGetCourseMediaQuery({ lang: lang })
  const { data: checklistdata, isLoading: checklistLoading, error: checklistError } = useGetCourseChecklistQuery({ lang: lang })
  // console.log(checklistdata)
  const videoThumbnails = mediadata?.filter(item => item.resource_type === 'video') || [];
  const imageThumbnails = mediadata?.filter(item => item.resource_type === 'image') || [];

  // Show first video initially
  useEffect(() => {
    if (videoThumbnails.length > 0 && currentVideoIdx >= videoThumbnails.length) {
      setCurrentVideoIdx(0);
    }
  }, [videoThumbnails, currentVideoIdx]);

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  // Intersection Observer to detect if the whole sidebar is visible
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setSidebarVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    if (sidebarRef.current) {
      observer.observe(sidebarRef.current);
    }
    return () => {
      if (sidebarRef.current) observer.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <>
      {/* Main Sidebar (with video) */}
      <div ref={sidebarRef} className="w-full max-w-md mx-auto bg-white space-y-1 border-[1px] border-[#DBE1EB] px-[4px] py-[1.5px] ">
        {/* Hero Video Section */}
        <div className="relative w-full aspect-video bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                videoThumbnails.length > 0 && videoThumbnails[currentVideoIdx]?.thumbnail_url
                  ? `url('${videoThumbnails[currentVideoIdx].thumbnail_url}')`
                  : 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><defs><linearGradient id=\"grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:#1f2937;stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:#111827;stop-opacity:1\" /></linearGradient></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23grad)\"/></svg>\')',
            }}
          >
            {/* Play Button (first video by default) */}
            {!isVideoPlaying && videoThumbnails.length > 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Play className="h-8 w-8 text-green-600 ml-1" />
                </button>
              </div>
            )}
            {isVideoPlaying && videoThumbnails[currentVideoIdx] && (
              <div className="absolute inset-0 bg-black">
                <div className="relative w-full h-full">
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ×
                  </button>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoThumbnails[currentVideoIdx].resource_value}?autoplay=1`}
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

        {/* Thumbnail Swiper */}
        <Swiper
          spaceBetween={8}
          slidesPerView={4}
          onSlideChange={(swiper) => setCurrentVideoIdx(swiper.activeIndex)}
          className="py-2"
        >
          {videoThumbnails.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`flex-shrink-0 w-20 h-12 rounded-lg border-2 cursor-pointer transition-all border-gray-200 bg-gray-100 relative ${idx === currentVideoIdx ? 'border-[#1CAB55]' : ''}`}
                onClick={() => { setCurrentVideoIdx(idx); setIsVideoPlaying(false); }}
              >
                {item.thumbnail_url ? (
                  <img
                    src={item.thumbnail_url}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                    <Play className="h-4 w-4 text-gray-600" />
                  </div>
                )}
                {/* Overlay Play icon for video */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Play className="h-4 w-4 text-white drop-shadow" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pricing Section */}
        <div className="flex items-center justify-start gap-2 items-center bg-white p-1 rounded-lg ">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-black">৳3850</span>
            <span className="text-lg text-black line-through">৳5000</span>
          </div>
          <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
            1150 ৳ ছাড়
          </div>
        </div>
        <div className=" flex justify-center px-4 my-2">
          <Button className="w-full bg-[#1CAB55] hover:bg-[#15803D] text-white py-5  text-base font-bold rounded-b-md border-b-4 border-b-[#15803D] ">
            কোর্সটি কিনুন
          </Button>
        </div>
        <div className="bg-white p-2 rounded-lg ">
          <h3 className="text-xl font-bold text-black mb-2">
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
      </div>
      {/* Contact section below the border */}
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <div className="flex items-center text-green-600">
          <Phone className="h-4 w-4 mr-1" />
          <span className="font-semibold">ফোন করুন (16910)</span>
        </div>
      </div>

      {!sidebarVisible && (
        <>
          <div className="fixed top-8 w-[370px] z-50 border-[1px] border-[#DBE1EB] bg-white  space-y-4 py-3 px-2"
            style={{ right: 'max(calc(50vw - 600px), 16px)' }}>
            {/* Pricing Section */}
            <div className="flex items-center justify-start gap-2 items-center bg-white p-1 rounded-lg ">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-black">৳3850</span>
                <span className="text-lg text-black line-through">৳5000</span>
              </div>
              <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
                1150 ৳ ছাড়
              </div>
            </div>
            <div className=" flex justify-center px-5">
              <Button className="w-full bg-[#1CAB55] hover:bg-[#15803D] text-white py-5  text-base font-bold rounded-b-md border-b-4 border-b-[#15803D] ">
                কোর্সটি কিনুন
              </Button>
            </div>
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
          </div>
          <div className="fixed top-[calc(8px+100%+12px)] w-[370px] z-50 text-sm flex items-center justify-between"
               style={{ right: 'max(calc(50vw - 600px), 16px)' }}>
            <span className="text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
            <div className="flex items-center text-green-600">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-semibold">ফোন করুন (16910)</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
