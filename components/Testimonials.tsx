'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";

const CARDS_PER_SLIDE = 2;

const Testimonials = () => {
  const {data: testimonials, isLoading, error} = useGetSectionByTypeQuery({lang: 'en', sectionType: 'testimonials'})
  const [slide, setSlide] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (isLoading) return <div>Loading testimonials...</div>;
  if (error) return <div>Error loading testimonials.</div>;
  if (!testimonials || !Array.isArray(testimonials.values)) return <div>No testimonials found.</div>;

  const totalSlides = Math.ceil(testimonials.values.length / CARDS_PER_SLIDE);
  const visible = testimonials.values.slice(slide * CARDS_PER_SLIDE, (slide + 1) * CARDS_PER_SLIDE);

  return (
    <div>
      <div className="bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-6">{testimonials.name || 'শিক্ষার্থীরা যা বলছে'}</h2>
        <div className="relative">
          {/* Carousel Arrows */}
          <button
            className="absolute left-[-40px] top-1/2 z-10 bg-white border rounded-full shadow p-2 disabled:opacity-30"
            onClick={() => setSlide(s => Math.max(0, s - 1))}
            disabled={slide === 0}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-[-40px] top-1/2 z-10 bg-white border rounded-full shadow p-2 disabled:opacity-30"
            onClick={() => setSlide(s => Math.min(totalSlides - 1, s + 1))}
            disabled={slide === totalSlides - 1}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visible.map((item) => (
              <div className="relative border rounded-xl p-4" key={item.id}>
                <div className="absolute top-4 left-4 bg-[#FFE6E6] rounded-full p-1">
                  <span className="text-red-400 text-2xl">“</span>
                </div>
                <div className="relative">
                  {playingId === item.id && item.video_url ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-80 rounded-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.video_url}`}
                        className="w-full h-48 rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <button
                        onClick={() => setPlayingId(null)}
                        className="absolute top-2 right-2 z-20 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.thumb || "/placeholder.svg?height=200&width=300"}
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      {item.video_url && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            size="lg"
                            className="rounded-full bg-white/90 hover:bg-white text-red-500"
                            onClick={() => setPlayingId(item.id)}
                          >
                            <Play className="h-12 w-12" />
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="flex items-center mt-3">
                  <img
                    src={item.profile_image || "/placeholder.svg?height=40&width=40"}
                    alt={item.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-gray-500 text-xs">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
