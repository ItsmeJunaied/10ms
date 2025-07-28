"use client"
import Image from "next/image"
import { Search, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from '@/lib/languageSlice';
import type { RootState } from '@/lib/store';

export default function Header() {
  const lang = useSelector((state: RootState) => state.language.lang);
  const dispatch = useDispatch();
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/10ms-logo.svg" alt="10 Minute School" width={120} height={40} className="h-8 w-auto" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="কোর্স, বই, ব্লগ কিংবা কোন সাহায্য খুঁজুন..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <select className="text-sm text-gray-700 bg-transparent border-none">
              <option>ক্লাস ৬-১২</option>
            </select>
            <select className="text-sm text-gray-700 bg-transparent border-none">
              <option>স্কিলস</option>
            </select>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              ভর্তি পরীক্ষা
            </a>
            <select className="text-sm text-gray-700 bg-transparent border-none">
              <option>চাকরির প্রস্তুতি</option>
            </select>
            <select className="text-sm text-gray-700 bg-transparent border-none">
              <option>ভর্তি পরীক্ষা</option>
            </select>
            <select className="text-sm text-gray-700 bg-transparent border-none">
              <option>আরও</option>
            </select>
            <div className="flex items-center space-x-2">
              <span className="text-sm cursor-pointer select-none" onClick={() => dispatch(toggleLanguage())}>
                {lang === 'bn' ? 'BN' : 'EN'}
              </span>
              <div className="flex items-center text-green-600">
                <Phone className="h-4 w-4 mr-1" />
                <span className="text-sm">16910</span>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">লগ-ইন</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
