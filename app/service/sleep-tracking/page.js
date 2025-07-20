"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SleepTrackingPage() {
  const [sleepData] = useState([
    { date: '2024-06-01', hours: 7.5, quality: 'Good' },
    { date: '2024-06-02', hours: 6.2, quality: 'Fair' },
    { date: '2024-06-03', hours: 8.1, quality: 'Excellent' },
    { date: '2024-06-04', hours: 5.9, quality: 'Poor' },
    { date: '2024-06-05', hours: 7.0, quality: 'Good' },
    { date: '2024-06-06', hours: 6.8, quality: 'Fair' },
    { date: '2024-06-07', hours: 7.9, quality: 'Good' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/service" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🛏️</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Sleep Tracking</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced sleep monitoring technology that automatically tracks your sleep patterns, 
            providing detailed insights to help you achieve better rest and overall wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Automatic Detection</h3>
            <p className="text-gray-600">
              Our smart algorithm automatically detects when you fall asleep and wake up, 
              requiring no manual input from you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Sleep Stages</h3>
            <p className="text-gray-600">
              Track light sleep, deep sleep, and REM cycles to understand your complete 
              sleep architecture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Sleep Duration</h3>
            <p className="text-gray-600">
              Monitor total sleep time, time in bed, and sleep efficiency with 
              precise measurements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🌙</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Sleep Quality</h3>
            <p className="text-gray-600">
              Get a comprehensive sleep score based on duration, efficiency, 
              and sleep stage distribution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Trend Analysis</h3>
            <p className="text-gray-600">
              View long-term patterns and trends to identify what affects 
              your sleep quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Smart Alerts</h3>
            <p className="text-gray-600">
              Receive notifications about irregular sleep patterns and 
              suggestions for improvement.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Place Your Device</h3>
              <p className="text-gray-600">
                Simply place your phone near your bed or wear your smart device 
                before going to sleep.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automatic Tracking</h3>
              <p className="text-gray-600">
                Our advanced sensors and algorithms automatically detect your 
                sleep patterns throughout the night.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-gray-600">
                Wake up to detailed sleep reports and personalized insights 
                to improve your sleep quality.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Better Sleep Quality</h3>
                <p className="text-blue-100">
                  Understanding your sleep patterns helps you make informed decisions 
                  to improve your rest.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Health Monitoring</h3>
                <p className="text-blue-100">
                  Track how sleep affects your daily energy, mood, and overall health.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personalized Insights</h3>
                <p className="text-blue-100">
                  Receive tailored recommendations based on your unique sleep patterns.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Progress Tracking</h3>
                <p className="text-blue-100">
                  Monitor your sleep improvements over time and celebrate your progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Tracking?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who have improved their sleep with Health Icon.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Sleep Log Section */}
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Your Sleep Log (Past 7 Days)</h2>
        <table className="w-full text-left mb-6">
          <thead>
            <tr className="text-blue-700">
              <th className="py-2">Date</th>
              <th className="py-2">Hours Slept</th>
              <th className="py-2">Quality</th>
            </tr>
          </thead>
          <tbody>
            {sleepData.map((entry, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="py-2">{entry.date}</td>
                <td className="py-2">{entry.hours}</td>
                <td className="py-2">{entry.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Simple Bar Chart */}
        <div className="flex items-end gap-2 h-32">
          {sleepData.map((entry, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="bg-blue-400 rounded-t w-6"
                style={{ height: `${entry.hours * 12}px` }}
                title={`${entry.hours} hrs`}
              ></div>
              <span className="text-xs mt-1 text-gray-500">{entry.date.slice(5)}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-400 mt-2">Bar height = hours slept</div>
      </div>
    </div>
  );
} 