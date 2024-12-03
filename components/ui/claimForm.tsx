import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"


import {
  Box,
  Briefcase,
  ShoppingCart,
  FileText,
  Heart,
  HelpCircle,
  Binary,
  CreditCard,
  Globe,
  Wallet,
  ArrowLeft,
} from 'lucide-react';

interface FormData {
  isOver10k: string;
  amountLost: number;
  scamType: string;
  ukBankInvolved: string;
  paymentMethod: string;
  bankName: string;
  story: string;
  scamDate: Date;
  referralSource: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const initialFormData: FormData = {
  isOver10k: '',
  amountLost: 0,
  scamType: '',
  ukBankInvolved: '',
  paymentMethod: '',
  bankName: '',
  story: '',
  scamDate: new Date(),
  referralSource: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const scamTypes = [
  { value: 'Box', label: 'Cryptocurrency Scam', icon: Box },
  { value: 'investment', label: 'Investment Fraud', icon: Briefcase },
  { value: 'shopping', label: 'Shopping Fraud', icon: ShoppingCart },
  { value: 'invoice', label: 'Invoice Fraud', icon: FileText },
  { value: 'romance', label: 'Romance Scam', icon: Heart },
  { value: 'other', label: 'Other', icon: HelpCircle },
];

const paymentMethods = [
  { value: 'bank_transfer', label: 'Bank Transfer', icon: Binary },
  { value: 'credit_card', label: 'Credit Card', icon: CreditCard },
  { value: 'crypto', label: 'Cryptocurrency', icon: Box },
  { value: 'wire_transfer', label: 'International Wire Transfer', icon: Globe },
  { value: 'other', label: 'Other', icon: Wallet },
];

const referralSources = [
  { value: 'google', label: 'Google Search' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'friend', label: 'Friend or Family' },
  { value: 'news', label: 'News Article' },
  { value: 'other', label: 'Other' },
];

export function ClaimForm() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(true)
  
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://submit-form.com/B6Jpi2yEi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          scamDate: formData.scamDate.toISOString(), // Convert Date to string
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      console.log('Form submitted successfully');
      setStep(step + 1);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally handle the error in the UI
      alert('Failed to submit form. Please try again.');
    }
  };
  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  };

  const renderHeader = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center"  onClick={() => window.location.reload()}>
          <span className="text-2xl font-bold">Refundee</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900">How it works</Link>
          <Link href="/why-refundee" className="text-gray-700 hover:text-gray-900">Why Refundee</Link>
          <Link href="/articles" className="text-gray-700 hover:text-gray-900">Articles</Link>
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
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6"
              onClick={() => {
                setStep(1);
                setFormData(initialFormData);
              }}
            >
              Restart
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
            <Link href="/articles" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Articles</Link>
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
  );

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-8 pb-4 border-b-2 border-gray-200">
              <h1 className="text-4xl font-bold text-gray-900">Start Your Claim</h1>
            </div>
            {step > 1 && step !== 999 && step !== 11 && (
              <button
                onClick={handleBack}
                className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>
            )}

            {renderHeader()}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Did you lose over £10,000 as a result of a scam?</h2>
                <RadioGroup
                  value={formData.isOver10k}
                  onValueChange={(value: string) => {
                    setFormData({ ...formData, isOver10k: value });
                    if (value === "no") {
                      setStep(999);
                    }
                  }}
                >
                  {yesNoOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <label 
                        htmlFor={option.value} 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                <Button 
                  onClick={handleNext}
                  disabled={!formData.isOver10k}
                  className="mt-4"
                >
                  Next
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">How much money did you lose in GBP (£)?</h2>
                <Input
                  type="number"
                  value={formData.amountLost || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, amountLost: parseFloat(e.target.value) })}
                  placeholder="Enter amount in GBP"
                  className="text-lg"
                />
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.amountLost}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">What type of scam were you a victim of?</h2>
                <RadioGroup
                  value={formData.scamType}
                  onValueChange={(value: string) => setFormData({ ...formData, scamType: value })}
                  className="grid grid-cols-2 gap-4"
                >
                  {scamTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <div key={type.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <label 
                          htmlFor={type.value} 
                          className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <Icon className="h-4 w-4" />
                          <span>{type.label}</span>
                        </label>
                      </div>
                    );
                  })}
                </RadioGroup>
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.scamType}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Was a UK bank involved?</h2>
                <RadioGroup
                  value={formData.ukBankInvolved}
                  onValueChange={(value: string) => setFormData({ ...formData, ukBankInvolved: value })}
                >
                  {yesNoOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`ukBank_${option.value}`} />
                      <label 
                        htmlFor={`ukBank_${option.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.ukBankInvolved}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">How did you pay the scammer?</h2>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value: string) => setFormData({ ...formData, paymentMethod: value })}
                  className="grid grid-cols-2 gap-4"
                >
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={method.value} id={method.value} />
                        <label 
                          htmlFor={method.value}
                          className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <Icon className="h-4 w-4" />
                          <span>{method.label}</span>
                        </label>
                      </div>
                    );
                  })}
                </RadioGroup>
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.paymentMethod}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Which bank did you use?</h2>
                <Input
                  type="text"
                  value={formData.bankName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, bankName: e.target.value })}
                  placeholder="Enter bank name"
                  className="text-lg"
                />
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.bankName}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Tell us what happened</h2>
                <textarea
                  value={formData.story}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, story: e.target.value })}
                  placeholder="Please provide details about the scam..."
                  className="w-full h-32 p-2 border rounded"
                />
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.story}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 8 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">When did this happen?</h2>
                <Calendar
                  selectedDate={date}
                  onDateChange={setDate}
                  minDate={new Date()} // Disable past dates
                  disabledDates={[new Date('2024-03-25')]} // Disable specific dates
                />
                <div className="flex justify-end">
                  <Button onClick={handleNext}>Next</Button>
                </div>
              </div>
            )}

            {step === 9 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">How did you hear about us?</h2>
                <RadioGroup
                  value={formData.referralSource}
                  onValueChange={(value: string) => setFormData({ ...formData, referralSource: value })}
                >
                  {referralSources.map((source) => (
                    <div key={source.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={source.value} id={source.value} />
                      <label 
                        htmlFor={source.value}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {source.label}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    disabled={!formData.referralSource}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 10 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Your Details</h2>
                <div className="space-y-4">
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First Name"
                  />
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last Name"
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                  />
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={handleSubmit}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            )}

            {step === 999 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-red-600">Not Eligible</h2>
                <p className="text-lg">
                  Unfortunately, we can only help with claims over £10,000. 
                  We recommend contacting Action Fraud or your bank directly for assistance.
                </p>
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline"
                >
                  Start Over
                </Button>
              </div>
            )}

            {step === 11 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-green-600">Thank You</h2>
                <p className="text-lg">
                  Your claim has been submitted successfully. We will review your case and contact you soon.
                </p>
                <Button 
                  onClick={() => {
                    setStep(1);
                    setFormData(initialFormData);
                  }}
                  variant="outline"
                >
                  Submit Another Claim
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}