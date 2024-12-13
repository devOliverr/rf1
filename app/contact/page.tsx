'use client'

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@/components/ui/button"
import { ClaimForm } from "@/components/ui/claimForm"

export default function Contact() {
    const [showForm, setShowForm] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    if (showForm) {
      return <ClaimForm />
    }
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
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

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
                  Get in<br />touch
                </h1>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-600 mb-2">Email us</p>
                    <Link href="mailto:enquiries@ReEqualiser.com" className="text-xl font-semibold hover:underline">
                      enquiries@ReEqualiser.com
                    </Link>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Contact us</p>
                    <Link href="tel:+15342284862" className="text-xl font-semibold hover:underline">
                    +1 (534) 228‑4862
                    </Link>
                  </div>
                  
                 

                  <div className="flex space-x-4 pt-4">
                  <Link href="https://wa.me/15342284862" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                  <Link href="https://t.me/Reequaliser" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                  </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                    </Link>
                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/Contact+us.png"
                  alt="Contact illustration"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#15232D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* ReEqualiser Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">ReEqualiser</h3>
              <ul className="space-y-2">
                <li><Link href="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
                <li><Link href="/our-fees" className="text-gray-300 hover:text-white">Our fees</Link></li>
                <li><Link href="/app-scams" className="text-gray-300 hover:text-white">APP Scams</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              </ul>
            </div>

            {/* Banks Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Banks</h3>
              <ul className="space-y-2">
                <li><Link href="/bank-transfers" className="text-gray-300 hover:text-white">Bank transfers</Link></li>
                <li><Link href="/barclays" className="text-gray-300 hover:text-white">Barclays</Link></li>
                <li><Link href="/revolut" className="text-gray-300 hover:text-white">Revolut</Link></li>
                <li><Link href="/hsbc" className="text-gray-300 hover:text-white">HSBC</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
                <li><Link href="/summary" className="text-gray-300 hover:text-white">Summary of Key Information</Link></li>
              </ul>
            </div>

            {/* Talk to us Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Talk to us</h3>
              <ul className="space-y-2">
                <li><Link href="/speak" className="text-gray-300 hover:text-white">Speak to ReEqualiser</Link></li>
                <li><Link href="/complaints" className="text-gray-300 hover:text-white">Complaints procedure</Link></li>
                <li><Link href="mailto:enquiries@ReEqualiser.com" className="text-gray-300 hover:text-white">enquiries@ReEqualiser.com</Link></li>
                <li><Link href="tel:+15342284862" className="text-gray-300 hover:text-white">+1 (534) 228‑4862</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}