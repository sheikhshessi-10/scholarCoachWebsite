"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Instagram, Mail, Phone, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScholarshipCoach() {
  // Use the images from our public folder
  const images = [ // Here Add any images for the slideshow of the hero section 
    "/assets/slide 2.jpg",
    "/assets/slide 3.jpg",
    "/assets/slide 4.jpg",
    "/assets/slide 5.jpg",
    "/assets/world.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  const previousSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />  {/* you can update logo here*/}
                <span className="text-2xl font-bold text-gray-900 ml-2">The</span>
                <span className="text-2xl font-bold text-blue-500 ml-2">ScholarshipCoach</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Your Journey to</span>
                  <span className="block text-blue-500">America</span>
                  <span className="block">Starts Here</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Expert guidance for USA scholarships to make your US dream Reality.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow flex flex-row gap-4">
                    <a href="https://calendly.com/saqibmahmood194" target="_blank" rel="noopener noreferrer">  {/* link to 1 on 1 consultation */}
                      <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        Book 1 on 1 Call
                      </Button>
                    </a>
                    <a href="wa.me/12675069530" target="_blank" rel="noopener noreferrer">  {/* update this link as needed for whatsapp/ full process */}
                      <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                        Whatsapp Now! 
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative">
          {/* Image carousel with proper error handling */}
          <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Scholarship opportunity ${index + 1}`}
                  width={1080}
                  height={720}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={previousSlide}
              className="p-2 bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Your Ticket to United States of America
          </h2>
          <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/assets/world.jpg"
              alt="World map showing university destinations"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support to help you achieve your academic dreams in the United States.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description:
                  "Our team of experienced advisors will guide you through every step of the scholarship application process.",
                icon: <GraduationCap className="h-10 w-10 text-blue-500 mb-4" />,
              },
              {
                title: "University Matching",
                description:
                  "We match you with universities that align with your academic goals, preferences, and financial situation.",
                icon: <Globe className="h-10 w-10 text-blue-500 mb-4" />,
              },
              {
                title: "Visa Support",
                description:
                  "Get comprehensive assistance with your student visa application and preparation for visa interviews.",
                icon: <Mail className="h-10 w-10 text-blue-500 mb-4" />,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/*
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                university: "Harvard University",
                quote:
                  "The ScholarshipCoach helped me secure a full scholarship to my dream university. Their guidance was invaluable throughout the entire process.",
              },
              {
                name: "Michael Chen",
                university: "Stanford University",
                quote:
                  "I couldn't have navigated the complex scholarship application process without The ScholarshipCoach. They made my dream of studying in America a reality.",
              },
              {
                name: "Priya Patel",
                university: "MIT",
                quote:
                  "From test preparation to scholarship applications, The ScholarshipCoach provided expert guidance every step of the way. I'm now studying at MIT with a full scholarship!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex flex-col h-full">
                  <blockquote className="flex-grow">
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-blue-500">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
*/}

      {/* Contact Us Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Instagram className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700 font-medium">Usascholarshipcoach</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700 font-medium">Contact@usascholarshipcoach.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700 font-medium">+12675069530</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Main Office</h3>
              <p className="text-gray-700">
                P-152 1st Floor Javed Munzil Opposit AG Office<br />
                Circular Road Faisalabad
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 px-8">
              Apply NOW!
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold ml-2">TheScholarshipCoach</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} The Scholarship Coach. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
