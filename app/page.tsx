import CourseContent from "@/components/course-content";
import CourseHero from "@/components/course-hero";
import CourseNavigation from "@/components/course-navigation";
import CourseSidebar from "@/components/course-sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import RelatedCourses from "@/components/related-courses";

export default function Home() {
  return (
    <div className="relative">
      {/* Background image behind top 300px */}
      <div className="absolute top-0 left-0 w-full h-[300px] z-0 background-image-section"></div>

      {/* Main content on top of image */}
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
