"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ClaimForm } from "@/components/ui/claimForm"

export default function AboutUs() {
  const [showForm, setShowForm] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  if (showForm) {
    return <ClaimForm />
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
                About Refundee
              </h1>
              <p className="text-xl text-gray-600">
                Founded with a clear sense of purpose. You will only work with experts<br />
                when you deal with Refundee.
              </p>
            </div>

            {/* Team Photos */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/Stuart+McFadden.jpg"
                  alt="Team member 1"
                  width={533}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/William+Ayles+Headshot.jpg"
                  alt="Team member 2"
                  width={533}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mission Section */}
            <div className="text-center">
              <h2 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-4">
                OUR MISSION
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                Getting people's money<br />
                back for good
              </h3>
              <p className="text-xl text-gray-600">
              Here’s our story:

Co-founder, Stuart McFadden, is an expert in banks regulatory obligations to protect their customers from fraud and scams. He has regularly featured as an expert giving talks at industry events, recently featured as a fraud expert on the Watchdog segment of the BBC’s One Show, BBC’s Rip Off Britain and has given evidence to MP’s at All Parliamentary Party Groups. 

He has previously held numerous senior leadership positions in Financial Services and has worked at the Financial Conduct Authority, the Financial Ombudsman Service, Natwest and at technology companies Monzo and Ophelos. 

Co-founder, William Ayles, has a background in financial services started in multi asset investment analysis before moving to Monzo Bank. His specialism in Operations meant that he’s worked across a number of different areas including Lending, Vulnerable Customer, and Financial Difficulties. He then led the Business Banking Operations at Monzo.

Having seen how many banks were failing to support victims of scams, he set up Refundee in 2021 to help victims when they need it most.

  </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}