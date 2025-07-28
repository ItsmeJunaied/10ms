import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and App Downloads */}
          <div className="space-y-6">
            <div>
              <Image src="/10ms-logo.svg" alt="10 Minute School" width={120} height={40} className="h-8 w-auto mb-4" />
              <p className="text-gray-600 text-sm">দেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=40&width=135" alt="Google Play" className="h-10" />
              </div>
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=40&width=135" alt="App Store" className="h-10" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">কোম্পানি</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  শিক্ষক হিসেবে যোগ দিন
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  অ্যাফিলিয়েট হিসেবে যোগ দিন
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  প্রাইভেসি পলিসি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  রিফান্ড পলিসি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  ব্যবহারকারীর শর্তাবলী
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">অন্যান্য</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  ব্লগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  বুক স্টোর
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  ফ্রি নোটস ও গাইড
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  চাকরির প্রস্তুতি কোর্সসমূহ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  স্যাটেলাইট স্কুলসমূহ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  ফ্রি ভর্তিকোচিং
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">আমাদের যোগাযোগের মাধ্যম</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium">কল করুন: 16910 (24x7)</p>
              </div>
              <div>
                <p className="font-medium">হোয়াটসঅ্যাপ: +8801896016252(24x7)</p>
              </div>
              <div>
                <p className="font-medium">ফেসবুক মেসেজ লিংক: +880 9610916910</p>
              </div>
              <div>
                <p className="font-medium">ইমেইল: support@10minuteschool.com</p>
              </div>

              <div className="flex space-x-3 pt-4">
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v2.44a4.83 4.83 0 01-3.77 4.25 4.83 4.83 0 013.77 4.25V15h2.08v-2.06a4.83 4.83 0 013.77-4.25z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">স্বত্ব © ২০১৫ - ২০২৪ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  )
}
