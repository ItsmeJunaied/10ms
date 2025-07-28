import CourseContent from "@/components/course-content";
import CourseHero from "@/components/course-hero";
import CourseNavigation from "@/components/course-navigation";
import CourseSidebar from "@/components/course-sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import RelatedCourses from "@/components/related-courses";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <CourseHero />
      <div className=" max-w-6xl mx-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <CourseNavigation />
              <CourseContent />
            </div>
            <div className="col-span-4">
              <CourseSidebar />
            </div>
          </div>
        </div>
      </div>

      <RelatedCourses />
      <Footer />
    </div>
  )
}
