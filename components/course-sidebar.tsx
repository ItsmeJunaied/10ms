import { Clock, Video, FileText, Download, Users, Award, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CourseSidebar() {
  return (
    <div className="space-y-4">
      {/* Pricing Card */}
      <Card className="border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">৳৩৮৫০</span>
              <span className="text-gray-500 line-through ml-2 text-lg">৳৫০০০</span>
            </div>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-medium">১১৫০ টাকা ছাড়</span>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium rounded-lg">
            কোর্সটি বিনামূল্যে
          </Button>
        </CardContent>
      </Card>

      {/* Course Features */}
      <Card className="border">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">এই কোর্স যা থাকছে</h3>

          <div className="space-y-4">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">কোর্সটি করেছেন ৩০০১৮ জন</span>
            </div>

            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">সময় লাগবে ৫০ ঘন্টা</span>
            </div>

            <div className="flex items-center">
              <Video className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">৬২টি ভিডিও</span>
            </div>

            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</span>
            </div>

            <div className="flex items-center">
              <Download className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">৩৮টি লেকচার শিট</span>
            </div>

            <div className="flex items-center">
              <Video className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">২০টি ভিডিও লেকচার</span>
            </div>

            <div className="flex items-center">
              <Award className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">১টি ডিজিটাল সার্টিফিকেট</span>
            </div>

            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">ফেসবুক সাপোর্ট গ্রুপ</span>
            </div>

            <div className="flex items-center">
              <Award className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm">লাইফ টাইম এক্সেস</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card className="border">
        <CardContent className="p-6">
          <p className="text-sm text-gray-600 mb-3">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>

          <div className="flex items-center text-green-600">
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-semibold">কল করুন (16910)</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
