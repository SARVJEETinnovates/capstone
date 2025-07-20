'use client';
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Service" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/contactUs", label: "Contact Us" },
  ];

  useEffect(() => {
    function syncUser() {
      setUser(localStorage.getItem("user"));
    }
    window.addEventListener("userchange", syncUser);
    window.addEventListener("storage", syncUser);
    syncUser();
    return () => {
      window.removeEventListener("userchange", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-extrabold text-2xl md:text-3xl text-blue-600 tracking-tight">Health <span className="text-yellow-400">Icon</span></span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-700 font-medium px-2 py-1 rounded transition hover:text-yellow-500 hover:bg-blue-50"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 ml-4 items-center">
            {user ? (
              <>
                <span className="text-blue-600 font-semibold text-sm px-2">{user}</span>
                <Button variant="outline" className="rounded-full border-red-400 text-red-500 hover:bg-red-50 hover:text-white font-semibold px-5 py-2 transition" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Link href="/register"><Button variant="outline" className="rounded-full border-blue-400 text-blue-600 hover:bg-blue-50 hover:text-yellow-500 font-semibold px-5 py-2 transition">Register</Button></Link>
                <Link href="/login"><Button variant="outline" className="rounded-full border-yellow-400 text-yellow-500 hover:bg-yellow-50 hover:text-blue-600 font-semibold px-5 py-2 transition">Login</Button></Link>
              </>
            )}
          </div>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-sm animate-fade-in-down">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-700 font-medium px-2 py-2 rounded transition hover:text-yellow-500 hover:bg-blue-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2 items-center">
              {user ? (
                <>
                  <span className="text-blue-600 font-semibold text-sm px-2">{user}</span>
                  <Button variant="outline" className="rounded-full border-red-400 text-red-500 hover:bg-red-50 hover:text-white font-semibold px-5 py-2 transition w-full" onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Link href="/register"><Button variant="outline" className="rounded-full border-blue-400 text-blue-600 hover:bg-blue-50 hover:text-yellow-500 font-semibold px-5 py-2 transition w-full">Register</Button></Link>
                  <Link href="/login"><Button variant="outline" className="rounded-full border-yellow-400 text-yellow-500 hover:bg-yellow-50 hover:text-blue-600 font-semibold px-5 py-2 transition w-full">Login</Button></Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* Footer (unchanged) */}
        <footer className="bg-[#414770] text-white pt-10 pb-6 mt-10">
          <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="font-bold text-2xl mb-4 text-yellow-500">Health Icon</h2>
              <p className="text-sm">
                Your trusted partner for better health and wellness. We care for you and your loved ones with top medical services.
              </p>
            </div>
            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/service" className="hover:underline">Services</Link></li>
                <li><Link href="/aboutUs" className="hover:underline">About Us</Link></li>
                <li><Link href="/contactUs" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>
            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Our Services</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/service/sleep-tracking" className="hover:underline">Sleep Tracking</Link></li>
                <li><Link href="/service/sleep-analytics" className="hover:underline">Sleep Analytics & Reports</Link></li>
                <li><Link href="/service/personalized-tips" className="hover:underline">Personalized Sleep Tips</Link></li>
                <li><Link href="/service/smart-reminders" className="hover:underline">Smart Reminders</Link></li>
                <li><Link href="/service/relaxation-meditation" className="hover:underline">Relaxation & Meditation</Link></li>
                <li><Link href="/service/lifestyle-tracker" className="hover:underline">Lifestyle Tracker</Link></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
              <p className="text-sm mb-2">123 Wellness Street, Healthy City</p>
              <p className="text-sm mb-2">Phone: +1 234 567 890</p>
              <p className="text-sm">Email: support@healthplus.com</p>
              {/* Social Media */}
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-gray-300">Instagram</Link>
                <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
                <Link href="#" className="hover:text-gray-300">Twitter</Link>
              </div>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
            © {new Date().getFullYear()} Health Icon. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
