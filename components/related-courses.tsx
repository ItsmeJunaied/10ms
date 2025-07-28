"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const courses = [
  {
    id: 1,
    title: "IELTS LIVE Batch",
    instructor: "Zawad Hasan Adib, Saraf Samant...",
    image: "/placeholder.svg?height=120&width=200",
    price: "৳8500",
    originalPrice: "৳10000",
    badge: "LIVE BATCH",
  },
  {
    id: 2,
    title: "ঘরে বসে Spoken English",
    instructor: "Munzereen Shahid",
    image: "/placeholder.svg?height=120&width=200",
    price: "৳1950",
    originalPrice: null,
    badge: null,
  },
  {
    id: 3,
    title: "Email Marketing করে Freelancing",
    instructor: "Tisal Fatema Tia",
    image: "/placeholder.svg?height=120&width=200",
    price: "৳1950",
    originalPrice: null,
    badge: "FREELANCING",
  },
  {
    id: 4,
    title: "Complete English Grammar Course",
    instructor: "Munzereen Shahid",
    image: "/placeholder.svg?height=120&width=200",
    price: "৳1950",
    originalPrice: null,
    badge: "COMPLETE",
  },
  {
    id: 5,
    title: "Advanced IELTS Preparation",
    instructor: "Munzereen Shahid",
    image: "/placeholder.svg?height=120&width=200",
    price: "৳2500",
    originalPrice: null,
    badge: "ADVANCED",
  },
]

export default function RelatedCourses() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, courses.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, courses.length - 3)) % Math.max(1, courses.length - 3))
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">আপনার জন্য আরও কিছু কোর্স</h2>

        <div className="relative">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {courses.map((course) => (
                  <div key={course.id} className="w-1/4 flex-shrink-0 px-2">
                    <Card className="border hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-32 object-cover rounded-t-lg"
                          />
                          {course.badge && (
                            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                              {course.badge}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-sm mb-1 line-clamp-2">{course.title}</h3>
                          <p className="text-gray-600 text-xs mb-3">{course.instructor}</p>
                          <div className="flex items-center">
                            <span className="text-green-600 font-bold text-lg">{course.price}</span>
                            {course.originalPrice && (
                              <span className="text-gray-500 line-through ml-2 text-sm">{course.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
