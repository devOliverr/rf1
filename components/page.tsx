"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@/components/ui/button"
import { ClaimForm } from "@/components/ui/claimForm"

export function BlockPage() {
  const [showForm, setShowForm] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (showForm) {
    return <ClaimForm />
  }
  
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">ReEqualiser</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900">How it works</Link>
              <Link href="/why-ReEqualiser" className="text-gray-700 hover:text-gray-900">Why ReEqualiser</Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>

            <div className="flex items-center space-x-6">
              {/* Desktop Social Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <Link href="https://wa.me/15342284862" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="https://t.me/Reequaliser" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
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
                <Link href="/why-ReEqualiser" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Why ReEqualiser</Link>
                    <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
              </div>
              <div className="px-5 pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <Link href="https://wa.me/15342284862" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                  <Link href="https://t.me/Reequaliser" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
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

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Lost money<br />
                to a scam?
              </h1>
              <p className="text-xl mb-6">
                We've recovered over <span className="text-emerald-500 font-bold">$50 million</span><br />
                for fraud victims in the US
              </p>
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6"
                onClick={() => setShowForm(true)}
              >
                Start your claim
              </Button>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">FCA Regulated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">★</span>
                  </div>
                  <span className="text-sm text-gray-600">US best-rated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">$</span>
                  </div>
                  <span className="text-sm text-gray-600">$50m recovered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">👥</span>
                  </div>
                  <span className="text-sm text-gray-600">4,000+ customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero.png"
                alt="Fraud Recovery Illustration"
                width={600}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="bg-[#15232D] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Rated <span className="text-emerald-500">Excellent</span><br />
              on Trustpilot.
            </h2>
            <p className="text-lg text-gray-300">
              We've helped over 4,000+ fraud victims already!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-gray-900">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Verified</span>
                </div>
                <p className="font-semibold mb-2">
                  "I had a great experience working with ReEqualiser..."
                </p>
                <p className="text-sm text-gray-600">
                  ReEqualiser helped me recover funds I thought were lost forever. Their team was professional and efficient throughout the entire process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}