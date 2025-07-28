import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CourseHero() {
  return (
    <div className="  bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="col-span-8">
            <h1 className="text-4xl font-bold mb-4">IELTS Course by Munzereen Shahid</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm">(৮১.৮% শিক্ষার্থী কোর্স রেটিং ৪ এবং তার বেশি দিয়েছেন)</span>
            </div>

            <p className="text-lg leading-relaxed">
              Academic IELTS এবং General Training IELTS- এর কার্যকর প্রস্তুতির জন্য একটি কোর্সেই পেয়ে যান
              <br />
              IELTS Instructor এর গাইডলাইনসহ আপনার প্রাক্টিসের জন্য বিশেষ অভিজ্ঞ কোর্স আপনার জন্য অপেক্ষা করছে আমাদের
              <br />
              IELTS Course-এ!
            </p>
          </div>

          {/* Right Video Preview */}
          <div className="col-span-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="relative mb-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Course Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((thumb) => (
                  <div key={thumb} className="w-12 h-8 bg-white/20 rounded overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=32&width=48&query=thumbnail ${thumb}`}
                      alt={`Thumbnail ${thumb}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
