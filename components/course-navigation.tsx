import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CourseNavigation() {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 border">
      <div className="flex items-center px-6 py-4">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 mr-4">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center space-x-8 flex-1">
          <button className="text-gray-900 font-medium border-b-2 border-green-500 pb-2 px-2">কোর্স ইন্সট্রাক্টর</button>
          <button className="text-gray-600 hover:text-gray-900 pb-2 px-2">কোর্সটি যেভাবে সাজানো হয়েছে</button>
          <button className="text-gray-600 hover:text-gray-900 pb-2 px-2">কোর্সটি করে যা শিখবেন</button>
          <button className="text-gray-600 hover:text-gray-900 pb-2 px-2">কোর্স সম্পর্কে বিস্তারিত</button>
        </div>

        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 ml-4">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
