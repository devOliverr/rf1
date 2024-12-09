'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Youtube, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ClaimForm } from "@/components/ui/claimForm"

export default function WhyRefundee() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showForm, setShowForm] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    if (showForm) {
      return <ClaimForm />
    }
  const slides = [
    {
      title: "We are fraud experts",
      content: "Our team is made up of fraud experts who have worked at the Financial Conduct Authority, the Prudential Regulation Authority, the Financial Ombudsman Service, in banking and in tech. Leaving you in the best hands in the industry."
    },
    {
      title: "No hassle or stress",
      content: "We manage your case, writing all key arguments and fighting your case at the bank and the Financial Ombudsman service. Keeping you informed at every stage of the process to ensure you are empowered with the latest developments regarding your case."
    },
    {
      title: "No win no fee",
      content: "You only pay our fee if you recover money. We charge a simple, fair fee of between 15% to 25% + VAT. If we recover more than £66,666, we cap our fee at £10,000 + VAT. Ensuring your happiness throughout the process."
    },
    {
      title: "Top-rated fraud recovery",
      content: "We are the best rated fraud recovery company. Our client's appreciate what we do because we are transparent, supportive and we fight our hardest to get people's money back."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">Refundee</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900">How it works</Link>
              <Link href="/why-refundee" className="text-gray-700 hover:text-gray-900">Why Refundee</Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>

            <div className="flex items-center space-x-6">
              {/* Desktop Social Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
              </div>
              
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                onClick={() => setShowForm(true)}
              >
                Start Your Claim
              </Button>

              {/* Add Hamburger Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</Link>
                <Link href="/how-it-works" className="block px-3 py-2 text-gray-700 hover:text-gray-900">How it works</Link>
                <Link href="/why-refundee" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Why Refundee</Link>
                    <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
              </div>
              <div className="px-5 pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                  <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Wondering<br />
                why to use<br />
                Refundee?
              </h1>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  At Refundee, we understand the huge impact that losing money to fraud can have on victims.
                </p>
                <p>
                  It's important that you are supported by an ethical company that charges fair fees, operates transparently, and supports you throughout the process.
                </p>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" 
                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="bg-blue-50 border-none">
                        <CardContent className="p-8">
                          <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                          <p className="text-gray-600">{slide.content}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}