"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
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
                
              At ReEqualiser, we’ve streamlined the process of recovering your lost funds into four simple steps. Our transparent approach ensures that you are informed and supported every step of the way.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="bg-blue-50 rounded-lg p-6">
               
                <h2 className="text-xl font-bold mb-4">1.  Submit Your Case</h2>
                <p className="text-gray-600">
                Contact Us: Begin by filling out our secure online form with details of the scam or fraudulent activity. Provide as much information as possible, including transaction records, communication logs, and other relevant evidence.
                </p>
                <p className="text-gray-600">
                Free Consultation: Once submitted, our experts will review your case and arrange a consultation to assess its viability and discuss potential recovery strategies.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-blue-50 rounded-lg p-6">
                
                <h2 className="text-xl font-bold mb-4">2. Investigation and Analysis</h2>
                <p className="text-gray-600">
                Tracing Assets: Our team of specialists uses advanced tools, including blockchain analysis, forensic accounting, and digital tracking, to locate and trace your funds.
                </p>
                <p className="text-gray-600">
                  Fraud Assessment: We analyze the scam structure to understand how the fraud occurred and identify the responsible parties.
  </p>
              </div>

              {/* Step 3 */}
              <div className="bg-blue-50 rounded-lg p-6">
               
                <h2 className="text-xl font-bold mb-4">3.  Recovery strategy</h2>
                <p className="text-gray-600">
                Custom Solutions: Based on our findings, we design a tailored recovery plan that aligns with your unique situation.
                </p>
                <p className="text-gray-600">
                  Collaboration with Authorities: When necessary, we collaborate with legal teams, financial institutions, and law enforcement to strengthen your case.   </p>
              </div>
            </div>

             {/* Step 4 */}
             <div className="bg-blue-50 rounded-lg p-6">
               
               <h2 className="text-xl font-bold mb-4">3.  Fund Recovery</h2>
               <p className="text-gray-600">
               Reclaiming Funds: Once located, we initiate the process to recover your assets using the appropriate legal and technical methods.
               </p>
               <p className="text-gray-600">
                Transparent Updates: Throughout the recovery process, we keep you informed with regular updates on our progress.
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
          <div>
        </div>
      
      </main>
    </div>
  )
}