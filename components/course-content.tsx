import {
  Play,
  FileText,
  Headphones,
  Target,
  Check,
  ChevronDown,
  ChevronRight,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import CourseStructure from "./CourseStructure";
import CourseLearningOutcomes from "./CourseLearningOutcomes";
import PreviewContent from "./PreviewContent";
import DetailedCourse from "./DetailedCourse";
import InstructorCourse from "./InstructorCourse";
import ExclusiveFeatures from "./ExclusiveFeatures";
import Testimonials from "./Testimonials";
import ClassRequirements from "./ClassRequirements";
import PaymentMethod from "./PaymentMethod";
import FAQ from "./FAQ";

export default function CourseContent() {
  return (
    <div className="space-y-6">
      {/* Instructor Section */}
      <InstructorCourse />

      {/* Course Structure Section */}

      <CourseStructure />

      {/* What You Will Learn Section */}
      <CourseLearningOutcomes />

      {/* Content Preview Section */}
      <div className="mt-10">
        <PreviewContent />
      </div>

      {/* Course Details Section */}
      <DetailedCourse />

      {/* Course Exclusive Features Section */}

      <ExclusiveFeatures />

      {/* Student Testimonials Section */}
      <Testimonials />

      {/* Class Requirements Section */}
      <ClassRequirements />

      {/* Payment Method Section */}

      <PaymentMethod />
      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">আরও কোন জিজ্ঞাসা আছে?</h2>

        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center text-green-600">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-medium">কল করুন 16910 নম্বরে</span>
          </div>
        </div>
      </div>
    </div>
  );
}
