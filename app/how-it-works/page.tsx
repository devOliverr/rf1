"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ClaimForm } from "@/components/ui/claimForm"


export default function HowItWorks() {
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
                How the<br />
                process works
              </h1>
              <p className="text-xl text-gray-600">
                We could help you get your money back in just 3 simple stages.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="bg-blue-50 rounded-lg p-6">
               
                <h2 className="text-xl font-bold mb-4">1. The investigation</h2>
                <p className="text-gray-600">
                  Our fraud investigators will assess your case to see if we can help. We'll let you know whether we can help.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-blue-50 rounded-lg p-6">
                
                <h2 className="text-xl font-bold mb-4">2. The bank</h2>
                <p className="text-gray-600">
                  Refundee will prepare your individual case and submit a bespoke report to the bank in order to receive their formal response.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-blue-50 rounded-lg p-6">
               
                <h2 className="text-xl font-bold mb-4">3. The Financial Ombudsman Service</h2>
                <p className="text-gray-600">
                  If needed, Refundee submits a bespoke report and works with the FOS investigators. If you are unsuccessful, you won't have to pay a penny.
                </p>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center text-gray-600 max-w-3xl mx-auto">
              <p>
                If successful, you receive the money back into your account! We then arrange our invoice. Of course, we keep you updated throughout so that you know what's happening. We handle everything to keep it as easy for you as possible.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}