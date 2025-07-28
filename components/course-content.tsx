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
import Contact_Section from "./Contact_Section";

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
      <Contact_Section />
    </div>
  );
}
