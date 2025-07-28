import { Play, FileText, Headphones, Target, Check, ChevronDown, ChevronRight, Phone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function CourseContent() {
  return (
    <div className="space-y-6">
      {/* Instructor Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">কোর্স ইন্সট্রাক্টর</h2>

        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/placeholder.svg?height=80&width=80"
              alt="Munzereen Shahid"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Munzereen Shahid</h3>
            <div className="text-gray-600 space-y-1 text-sm">
              <p>MSc (English), University of Oxford (UK);</p>
              <p>BA, MA (English), University of Dhaka;</p>
              <p>IELTS: 8.5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Structure Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">কোর্সটি যেভাবে সাজানো হয়েছে</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2 mr-3">
                <Play className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">৬০+ ভিডিও লেকচার</h3>
            </div>
            <p className="text-sm leading-relaxed">
              IELTS Academic ও General Training এর Overview, Format ও প্রতিটি বিষয়ে বিস্তারিত in-depth আলোচনা
            </p>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2 mr-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">৩৮টি লেকচার শিট</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং ৬০০+ Vocabulary
            </p>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2 mr-3">
                <Target className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold">রিডিং এবং লিসেনিং মক টেস্ট</h3>
            </div>
            <p className="text-sm leading-relaxed">10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি নিয়ে নাও</p>
          </div>

          <div className="bg-red-500 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2 mr-3">
                <Headphones className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">অডিও সহিত স্পিকিং কোর্স</h3>
            </div>
            <p className="text-sm leading-relaxed">স্পিকিং এর জন্য কোর্স একজন নেটিভ স্পিকারের কাছ থেকে শিখবে সঠিক এবং সুন্দর</p>
          </div>
        </div>
      </div>

      {/* Content Preview Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">কনটেন্ট প্রিভিউ</h2>

        <Accordion type="single" collapsible defaultValue="introduction">
          <AccordionItem value="introduction" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">Introduction</AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Video: IELTS: Introduction</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">ফ্রি দেখুন</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Video: IELTS: Overview</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">ফ্রি দেখুন</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Video: How to Prepare for IELTS?</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">ফ্রি দেখুন</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Play className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Video: Making a Daily Routine</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">ফ্রি দেখুন</span>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <Play className="h-3 w-3 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">Video: Different Sentence Structures to Improve Writing</span>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <Play className="h-3 w-3 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">IELTS General Facts</span>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <Play className="h-3 w-3 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">IELTS Vocabulary</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support-group" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">
              IELTS Course by Munzereen Shahid | Exclusive Support Group
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Support group content will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="academic-reading" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">Academic Reading</AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Academic reading content will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mock-test" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">Academic Reading Mock Test</AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Mock test content will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="listening">
            <AccordionTrigger className="text-left font-medium py-4">Listening</AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Listening content will be shown here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 text-center">
          <Button variant="outline" className="text-gray-600 bg-transparent">
            সকল কনটেন্ট <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* What You Will Learn Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">কোর্সটি করে যা শিখবেন</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                IELTS পরীক্ষার প্রতিটি সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি
              </span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেভাবে টপিক নিয়ে কথা বলার পদ্ধতি
              </span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">IELTS পরীক্ষা চলাকালীন নির্দিষ্ট সময়ের মধ্যে ব্যাকরণ যাচাই ভালো কোর্স অনুসরণ করুন</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                IELTS Writing Task 1 ও IELTS Writing Task 2 এর কেস ভালো কোর্স পেতে সহায়ক Structure ও Essay type
              </span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                সেরা IELTS প্রস্তুতি নিতে প্রতিটি স্কিলভিত্তিক নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা
              </span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার বিভিন্ন এক্সপার্টিজেশন ও Band Score সহকারে
                পরিপূর্ণ ধারণা
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">কোর্স সম্পর্কে বিস্তারিত</h2>

        <Accordion type="single" collapsible defaultValue="target-audience">
          <AccordionItem value="target-audience" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">IELTS Course-টি যাদের জন্য</AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">যারা উন্নতশীল, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">
                    যারা উন্নতশীল লেখে বা দেশে বসরাসরত অভ্যাস নিতে চান অথবা বসবাসের জন্য আবেদন করতে চান।
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">
                    IELTS পরীক্ষা ঘাতের জন্য উৎকৃষ্ট, কিন্তু নানা IELTS প্রস্তুতি কোর্স থেকে গুছ করবেন না জানেন না।
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">
                    যারা চাকরি বা বৃত্তির কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading, writing, listening এবং speaking দক্ষতা বাড়াতে
                    চান।
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">
                    স্টুডেন্ট কিংবা চাকরিজীবীদের মতো যারা বাজেতার কারণে ঘরে অনেক IELTS এর জন্য তৈরি প্রস্তুতি নিতে চান।
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="about-course" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">IELTS Course-টি কোর্স সম্পর্কে</AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Course details will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-it-helps">
            <AccordionTrigger className="text-left font-medium py-4">
              এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">How it helps content will be shown here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Course Exclusive Features Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">কোর্স এক্সক্লুসিভ ফিচার</h2>

        <div className="space-y-6">
          {/* Video Lectures Feature */}
          <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg">
            <div className="col-span-8">
              <h3 className="font-semibold mb-2">ভিডিও লেকচার</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>IELTS Academic ও General Training নিয়ে আলোচনা</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Reading, Writing, Listening ও Speaking এর Overview & Format</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>ভিডিওর সাথে প্রাক্টিসের সুযোগ</span>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-red-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm font-medium">VIDEO LECTURES</div>
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Instructor"
                  className="w-16 h-16 rounded-full mx-auto mt-2"
                />
              </div>
            </div>
          </div>

          {/* Mock Tests Feature */}
          <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg">
            <div className="col-span-8">
              <h3 className="font-semibold mb-2">Reading ও Listening Mock Tests</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>10 Reading & 10 Listening Mock Tests</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</span>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-pink-100 p-4 rounded-lg text-center">
                <div className="text-red-600 text-3xl font-bold">IELTS</div>
                <div className="text-red-600 text-sm font-medium">READING & LISTENING</div>
                <div className="text-red-600 text-sm font-bold">MOCK TESTS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Promotion */}
        <div className="mt-6 bg-gradient-to-r from-red-800 to-red-600 text-white p-6 rounded-lg">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-8">
              <h3 className="text-xl font-bold mb-4">এই কোর্সের সাথে ফ্রি পাচ্ছেন-</h3>
              <h4 className="text-lg font-semibold mb-3">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>৩৬০ পৃষ্ঠা</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>প্রিমিয়াম হার্ডকপি</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>ফ্রি ডেলিভারি</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>৪ স্কিলসহ মধ্যে সারাদেশে ডেলিভারি</span>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <img src="/placeholder.svg?height=120&width=80" alt="IELTS Book" className="w-20 h-32 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Student Testimonials Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">শিক্ষার্থীরা যা বলছে</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute top-4 left-4 text-red-500 text-2xl">"</div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Student testimonial"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/90 hover:bg-white text-red-500">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">
                8.5
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">Band Score</div>
              <div className="absolute bottom-4 right-4 text-white text-xs">SUCCESS!</div>
            </div>
            <div className="flex items-center mt-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Junaed Bin Samad"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-sm">Junaed Bin Samad</div>
                <div className="text-gray-500 text-xs">IELTS Score: 8.5</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-4 left-4 text-red-500 text-2xl">"</div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Student testimonial"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/90 hover:bg-white text-red-500">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                SUCCESS JOURNEY
              </div>
            </div>
            <div className="flex items-center mt-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Shah Mohammad Rafi"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-sm">Shah Mohammad Rafi</div>
                <div className="text-gray-500 text-xs">IELTS Score: 8</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Class Requirements Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">ক্লাস করার জন্য প্রয়োজন হবে</h2>

        <div className="space-y-3">
          <div className="flex items-start">
            <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-sm">ইন্টারনেট সংযোগ (ওয়াইফাইং বা মোবাইল ইন্টারনেট)</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-sm">স্মার্টফোন অথবা পিসি</span>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">যেভাবে পেমেন্ট করবেন</h2>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
            <a href="#" className="text-green-600 underline">
              এই ভিডিওটি দেখুন
            </a>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6">সচরাচর জিজ্ঞাসা</h2>

        <Accordion type="single" collapsible defaultValue="how-to-buy">
          <AccordionItem value="how-to-buy" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">কোর্সটি কিভাবে কিনবো এবং করবো?</AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-4 text-sm">
                <div>
                  <strong>১) 'কোর্সটি কিনুন' বাটনে ক্লিক করুন</strong>
                </div>
                <div>
                  <strong>২) 'এক করুন' বাটনে ক্লিক করুন</strong>
                  <br />
                  ৩) আপনার কোন নম্বর দিয়ে ইউজার নিয়ে লগ-ইন করুন
                  <br />
                  ৪) পেমেন্ট করা হয়ে গেলে 'এগিয়ে যান' বাটনে ক্লিক করুন
                  <br />
                  ৫) আপনার পছন্দের পেমেন্ট মাধ্যম বেছে নিন এবং 'পেমেন্ট করুন' বাটনে ক্লিক করুন
                  <br />
                  হিসাবে পেমেন্ট-এর কেস:
                </div>
                <div>
                  - পেমেন্ট সাফল্য হলে 'কিনুন' (বেশে নিন) ভর্তিক ব্যবহারের জন্য আপনি দাখিল হবেন কিন্তু নগদটি পেইড
                  <br />
                  করে রাখতে পারবেন।
                  <br />- 'পেমেন্ট-করুন' বাটনে ক্লিক করুন। আপনাকে বিকাশ পেমেন্ট গেটওয়েতে নিয়ে যাওয়া হবে
                  <br />
                  এবং সেখানে বিকাশ নম্বর এবং পিন নম্বর দিয়ে কনফার্ম করুন, আপনার পেমেন্ট সম্পন্ন
                  <br />- বিকাশ পেমেন্ট সম্পর্কে আরও জানতে ভিডিওটি দেখুন পারেন:
                  <br />
                  https://youtu.be/5wfn60rmWX4
                </div>
                <div>
                  ৬) পেমেন্ট সম্পন্ন করার পর 'কোর্স শুরু করুন' বাটনে ক্লিক করলে সরাসরি আপনি কোর্স শুরু করতে
                  <br />
                  পারবেন
                  <br />
                  ৭) আপনার বেনা কোর্সটি আপনার প্রোফাইলের 'আমার কোর্সসমূহ' সেকশনে দেখতে পাবেন
                  <br />
                  ৮) আপনার একাউন্ট হতে বরাবর কোর্স এক্সেস পেতে যাবেন, সেক্ষেত্রে অবশ্যই আপনাকে লগইন করা থাকতে
                  <br />
                  হবে
                </div>
                <div>আরো জানতে ভিডিওটি দেখুন: https://youtu.be/eDrXWrI-SOU</div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="technical-support" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">
              যেকোনো টেকনিক্যাল সমস্যায় (পাসওয়ার্ড ভুলে যাওয়া, পাসওয়ার্ড রিসেট, কোর্স রিলেটেড ইস্যু) কোথায় যোগাযোগ করবো?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Technical support information will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="course-access" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">
              আপগ্রেডের এই কোর্স কি একাউন্টের নাকি জেনারেল IELTS করার জন্য ইউজার করা?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Course access information will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="offline-access" className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">
              বাইরে অফলাইনের কোথাও ভর্তি না হয়ে আপগ্রেডের এমার অনলাইনের পক্ষত কি সুবিধা পাচ্ছো?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Offline access information will be shown here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mock-test-access">
            <AccordionTrigger className="text-left font-medium py-4">মক টেস্টের সুযোগ আছে?</AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-gray-600">Mock test information will be shown here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 text-center">
          <Button variant="outline" className="text-gray-600 bg-transparent">
            সকল প্রশ্ন-উত্তর <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

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
  )
}
