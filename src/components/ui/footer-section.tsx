"use client"

import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Switch } from "./switch"
import { Textarea } from "./textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

function Footerdemo() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterLoading, setNewsletterLoading] = React.useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = React.useState(false);
  const [newsletterError, setNewsletterError] = React.useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterError('');
    setNewsletterSuccess(false);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterError(err instanceof Error ? err.message : 'Failed to subscribe');
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <footer className="relative border-t bg-white text-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
        {/* Newsletter Section - visually striking card, full width */}
        <div className="flex flex-col items-center w-full mb-8">
          <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center gap-3 md:gap-4 w-full max-w-4xl mx-auto border border-blue-100">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md p-2 flex items-center justify-center">
              <Send className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-3xl font-extrabold text-primary text-center mt-4">Join Our Newsletter</h3>
            <p className="text-gray-600 text-sm md:text-lg text-center max-w-md">Stay ahead with the latest updates, insights, and exclusive offers. No spam, ever.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row w-full max-w-lg lg:max-w-xl gap-2 mt-2 items-center justify-center">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:border-primary px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-3 text-base lg:text-lg font-medium bg-white shadow-sm transition-all"
                aria-label="Email address"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
                disabled={newsletterLoading}
              />
              <Button
                type="submit"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 md:py-3 font-semibold text-base shadow-md transition-all w-full sm:w-auto"
                disabled={newsletterLoading}
              >
                {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            {newsletterSuccess && <div className="text-green-600 text-center font-medium pt-2">Thank you for subscribing!</div>}
            {newsletterError && <div className="text-red-600 text-center font-medium pt-2">{newsletterError}</div>}
          </div>
        </div>
        {/* Animated Divider */}
        <div className="w-full flex justify-center mb-8">
          <div className="h-1 w-32 md:w-64 bg-gradient-to-r from-blue-400 via-primary to-blue-400 rounded-full blur-[2px] animate-pulse-glow" />
        </div>
        {/* Unified Footer Panel - Top Notch Alignment, Simple Animations */}
        <div className="relative w-full bg-white rounded-3xl px-4 md:px-16 py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
          {/* Follow Us - Socials, now first */}
          <div className="flex flex-col justify-start items-start h-full gap-2">
            <h3 className="mb-2 text-lg font-bold text-primary">Follow Us</h3>
            <div className="flex gap-3 mt-1">
              <a 
                href="https://web.facebook.com/people/Richverseecotech/61559568145443/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:scale-105 transition-transform bg-white shadow-sm">
                  <Facebook className="h-7 w-7 text-blue-500" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </a>
              <a 
                href="https://twitter.com/richve_ecotech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:scale-105 transition-transform bg-white shadow-sm">
                  <Twitter className="h-7 w-7 text-blue-400" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a 
                href="https://www.instagram.com/richverse.ecotech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:scale-105 transition-transform bg-white shadow-sm">
                  <Instagram className="h-7 w-7 text-pink-500" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a 
                href="https://linkedin.com/company/richverseecotech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:scale-105 transition-transform bg-white shadow-sm">
                  <Linkedin className="h-7 w-7 text-blue-700" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
          {/* Quick Links - No underline, just color change */}
          <div className="flex flex-col justify-start items-start h-full gap-2">
            <h3 className="mb-2 text-lg font-bold text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-1 w-full">
              <a href="/" className="text-gray-700 font-medium py-1 px-0 hover:text-primary transition-colors">Home</a>
              <a href="/about" className="text-gray-700 font-medium py-1 px-0 hover:text-primary transition-colors">About Us</a>
              <a href="/services" className="text-gray-700 font-medium py-1 px-0 hover:text-primary transition-colors">Services</a>
              <a href="/blog" className="text-gray-700 font-medium py-1 px-0 hover:text-primary transition-colors">Blog</a>
              <a href="/contact" className="text-gray-700 font-medium py-1 px-0 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          {/* Contact Info - Rearranged for clarity */}
          <div className="flex flex-col justify-start items-start h-full gap-3">
            <h3 className="mb-2 text-lg font-bold text-primary">Contact</h3>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col md:flex-row items-start gap-6 w-full">
                {/* Austin, US */}
                <div className="flex flex-col gap-1 flex-1 min-w-[120px]">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Austin, US</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">+1 512 650 9818</span>
                  </div>
                </div>
                {/* Divider: horizontal on mobile, vertical on md+ */}
                <div className="w-full h-px bg-gray-200 my-2 md:my-0 md:w-px md:h-10 md:mx-2 md:self-center" />
                {/* Accra, Ghana */}
                <div className="flex flex-col gap-1 flex-1 min-w-[120px]">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Accra, Ghana</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">+233 2017 68623</span>
                  </div>
                </div>
              </div>
              <hr className="my-2 w-full border-gray-200" />
              <div className="flex items-center gap-2 text-gray-700 mt-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-sm truncate">richverseecotech@gmail.com</span>
              </div>
              <hr className="my-2 w-full border-gray-200" />
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Mon-Fri, 8AM-5PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RichverseEcoTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 