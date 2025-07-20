"use client";

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

const services = [
  {
    title: "Sleep Tracking",
    slug: "sleep-tracking",
    description:
      "Monitor your sleep duration, quality, and stages. View detailed logs and insights to optimize your sleep.",
    icon: "🛏️",
  },
  {
    title: "Sleep Analytics & Reports",
    slug: "sleep-analytics",
    description:
      "Get daily, weekly, and monthly reports with easy-to-understand graphs. Discover trends and track improvements.",
    icon: "📊",
  },
  {
    title: "Personalized Sleep Tips",
    slug: "personalized-tips",
    description:
      "Receive tailored suggestions based on your sleep habits, lifestyle, and goals to help you rest better.",
    icon: "💡",
  },
  {
    title: "Smart Reminders",
    slug: "smart-reminders",
    description:
      "Get timely reminders to sleep, log your habits, and follow your night routine consistently.",
    icon: "📱",
  },
  {
    title: "Relaxation & Meditation",
    slug: "relaxation-meditation",
    description:
      "Explore guided meditations, breathing exercises, and calming sleep music to help you wind down.",
    icon: "🧘",
  },
  {
    title: "Lifestyle Tracker",
    slug: "lifestyle-tracker",
    description:
      "Track caffeine, screen time, and activity levels to see how daily choices impact your sleep.",
    icon: "🍽️",
  },
];

export default function Home() {
  const carouselRef = useRef(null);

  // Daily Tip State
  const [tip, setTip] = useState(null);
  const [loadingTip, setLoadingTip] = useState(true);

  useEffect(() => {
    async function fetchTip() {
      try {
        const res = await fetch('https://health.gov/myhealthfinder/api/v3/itemlist.json?Type=topic');
        const data = await res.json();
        if (data && data.Result && data.Result.Items && data.Result.Items.Item) {
          const items = data.Result.Items.Item;
          // Pick a random tip
          const random = items[Math.floor(Math.random() * items.length)];
          setTip(random.Title);
        } else {
          setTip("Drink plenty of water and get enough sleep for a healthy mind and body.");
        }
      } catch (e) {
        setTip("Drink plenty of water and get enough sleep for a healthy mind and body.");
      } finally {
        setLoadingTip(false);
      }
    }
    fetchTip();
  }, []);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = 320; // px
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        <div className="text-center text-white bg-black/50 p-6 rounded-xl">
          <h1 className="text-5xl font-bold mb-4 text-">Welcome to <span className="text-yellow-500">Health Icon</span></h1>
          <p className="text-xl max-w-md mx-auto">
            Your personalized sleep & wellness tracker
          </p>
        </div>
      </section>

      {/* Daily Tip Section */}
      <section className="py-6 px-4 bg-blue-50 flex justify-center">
        <div className="max-w-2xl w-full flex items-center gap-4 bg-white rounded-2xl shadow p-5 border border-blue-100">
          <span className="text-3xl md:text-4xl text-blue-400">💡</span>
          <div>
            <div className="text-blue-700 font-semibold text-lg mb-1">Daily Wellness Tip</div>
            <div className="text-gray-700 text-base">
              {loadingTip ? <span className="text-gray-400">Loading...</span> : tip}
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-10 px-4 bg-white relative">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Our Services</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Left Button */}
          <button
            aria-label="Scroll left"
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-blue-100 border border-blue-200 shadow rounded-full p-2 transition hidden md:block"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Right Button */}
          <button
            aria-label="Scroll right"
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-blue-100 border border-blue-200 shadow rounded-full p-2 transition hidden md:block"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="overflow-x-auto scrollbar-hide" ref={carouselRef}>
            <div className="flex gap-6 md:gap-8 lg:gap-10 px-2 md:px-8" style={{scrollSnapType: 'x mandatory'}}>
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] max-w-xs bg-blue-50 p-6 rounded-2xl shadow-md flex-shrink-0 flex flex-col items-center justify-between hover:shadow-xl transition-shadow" style={{scrollSnapAlign: 'start'}}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-4 text-sm">{service.description}</p>
                  <Link href={`/service/${service.slug}`}>
                    <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">What Our Users Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100 object-cover" />
            <p className="text-gray-700 italic mb-4">“Health Icon has completely changed my sleep routine. I wake up feeling refreshed and energetic every day!”</p>
            <div className="font-semibold text-blue-500">Priya Sharma</div>
            <div className="text-xs text-gray-400">Marketing Manager</div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100 object-cover" />
            <p className="text-gray-700 italic mb-4">“The personalized tips and smart reminders keep me on track. My sleep quality has improved so much!”</p>
            <div className="font-semibold text-blue-500">Amit Verma</div>
            <div className="text-xs text-gray-400">Software Engineer</div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User 3" className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100 object-cover" />
            <p className="text-gray-700 italic mb-4">“I love the analytics and meditation features. Health Icon is my go-to app for wellness!”</p>
            <div className="font-semibold text-blue-500">Sneha Patel</div>
            <div className="text-xs text-gray-400">Student</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-500">
          Why Choose Health Icon?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2203/2203171.png"
              alt="Sleep Tracking"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Sleep Tracking</h3>
            <p className="text-gray-600 font-mono">
              Automatically log your sleep patterns and get real-time analysis.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3658/3658752.png"
              alt="Smart Insights"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Smart Insights</h3>
            <p className="text-gray-600 font-mono">
              Understand your sleep quality with easy-to-read reports.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4369/4369754.png"
              alt="Tips and Coaching"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Tips & Coaching</h3>
            <p className="text-gray-600 font-mono">
              Receive personalized tips to improve your sleep cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Sleep Journey Today</h2>
        <p className="mb-6">Join 10,000+ users improving their wellness every night.</p>
        <Link href="/register">
          <button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-xl hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}
