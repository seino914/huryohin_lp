"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "サービス" },
    { href: "#pricing", label: "料金" },
    { href: "#testimonials", label: "お客様の声" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95" 
          : "bg-white/90 backdrop-blur-sm shadow-sm dark:bg-gray-900/90"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-green-600">
                廃品回収
              </span>
              <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white ml-1">
                エコクリーン
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <PhoneCall className="w-4 h-4 mr-2 text-green-600" />
              <span className="font-semibold text-lg">0120-123-456</span>
            </div>
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="#contact">今すぐ相談する</Link>
            </Button>
          </div>
          
          {/* Mobile Phone (md screens) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <PhoneCall className="w-4 h-4 mr-1 text-green-600" />
              <span className="font-semibold text-sm">0120-123-456</span>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
              <div className="flex items-center justify-center md:hidden">
                <PhoneCall className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">0120-123-456</span>
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 shadow-lg" 
                asChild
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  今すぐ相談する
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}