'use client'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  "সিটি করে যা শিখবেন",
  "কোর্স সম্পর্কে বিস্তারিত",
  "কোর্স এক্সক্লুসিভ ফিচার",
  "এই কোর্সের সাথে ফ্রি পাচ্ছেন-",
  "শিক্ষার্থী রিভিউ"
];

export default function CourseNavigation() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 200;

  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Enable mouse drag to scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };
  const onMouseLeave = () => {
    isDragging.current = false;
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full bg-transparent mt-10 mb-4">
      <div className="flex items-center justify-center relative gap-2">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll("left")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#BDBDBD] hover:bg-[#9e9e9e] transition-colors text-white text-xl shadow"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Tabs Carousel strictly between arrows */}
        <div
          ref={scrollRef}
          className="flex-1 max-w-[900px] flex items-center justify-center space-x-8 overflow-x-auto px-2 border-b border-gray-200 min-h-[48px] scrollbar-hide select-none"
          style={{ scrollBehavior: "smooth" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`text-base px-1 whitespace-nowrap pb-2 font-medium transition-colors ${
                idx === 0
                  ? "text-gray-900 border-b-2 border-[#1CAB55] font-semibold"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll("right")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#BDBDBD] hover:bg-[#9e9e9e] transition-colors text-white text-xl shadow"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      {/* Hide scrollbar cross-browser */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
