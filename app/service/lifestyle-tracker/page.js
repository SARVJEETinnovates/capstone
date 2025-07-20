"use client";

import Link from 'next/link';
import { useState } from 'react';

const initialHabits = [
  { date: '2024-06-01', caffeine: '1 cup', screen: '2h', exercise: '30m walk' },
  { date: '2024-06-02', caffeine: '2 cups', screen: '3h', exercise: 'none' },
  { date: '2024-06-03', caffeine: '1 cup', screen: '1.5h', exercise: '20m yoga' },
];

export default function LifestyleTrackerPage() {
  const [habits, setHabits] = useState(initialHabits);
  const [form, setForm] = useState({ date: '', caffeine: '', screen: '', exercise: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = e => {
    e.preventDefault();
    if (form.date && form.caffeine && form.screen && form.exercise) {
      setHabits([...habits, form]);
      setForm({ date: '', caffeine: '', screen: '', exercise: '' });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
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
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Lifestyle Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor how your daily choices impact your sleep quality. Track caffeine, screen time, exercise, 
            and other lifestyle factors to discover patterns and make informed decisions for better sleep.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">Caffeine Tracking</h3>
            <p className="text-gray-600">
              Log your caffeine intake and see how it affects your sleep 
              patterns and quality over time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">Screen Time Monitoring</h3>
            <p className="text-gray-600">
              Track your device usage and understand the impact of 
              blue light exposure on your sleep.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🏃</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">Exercise Tracking</h3>
            <p className="text-gray-600">
              Monitor your physical activity and see how timing and 
              intensity affect your sleep quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">Meal Timing</h3>
            <p className="text-gray-600">
              Track when you eat and discover how meal timing 
              influences your sleep patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">💧</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">Hydration Monitoring</h3>
            <p className="text-gray-600">
              Log your water intake and see how hydration levels 
              correlate with sleep quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">Correlation Analysis</h3>
            <p className="text-gray-600">
              Get insights into how different lifestyle factors 
              interact and affect your sleep quality.
            </p>
          </div>
        </div>

        {/* Tracking Categories */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What You Can Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Nutrition & Hydration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Caffeine consumption (coffee, tea, energy drinks)</li>
                <li>• Alcohol intake and timing</li>
                <li>• Meal timing and portion sizes</li>
                <li>• Water intake throughout the day</li>
                <li>• Snacking habits before bed</li>
                <li>• Supplements and medications</li>
              </ul>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Technology Usage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Screen time before bedtime</li>
                <li>• Social media usage patterns</li>
                <li>• Work-related screen time</li>
                <li>• Gaming or entertainment time</li>
                <li>• Device usage in bed</li>
                <li>• Blue light exposure duration</li>
              </ul>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Physical Activity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Exercise type and duration</li>
                <li>• Workout timing and intensity</li>
                <li>• Daily step count</li>
                <li>• Sedentary time tracking</li>
                <li>• Outdoor activity time</li>
                <li>• Stretching and yoga sessions</li>
              </ul>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Environment & Habits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Room temperature and humidity</li>
                <li>• Noise levels in sleep environment</li>
                <li>• Light exposure during day</li>
                <li>• Stress levels and mood</li>
                <li>• Social activities and timing</li>
                <li>• Travel and schedule changes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tracking Methods */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Easy Tracking Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Logging</h3>
              <p className="text-emerald-100">
                Simple one-tap logging for common activities 
                with customizable quick actions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Detection</h3>
              <p className="text-emerald-100">
                Automatic detection of some activities using 
                your device's sensors and apps.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Integration</h3>
              <p className="text-emerald-100">
                Connect with health apps and devices for 
                seamless data synchronization.
              </p>
            </div>
          </div>
        </div>

        {/* Insights & Analysis */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Insights & Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">Pattern Recognition</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Identify which lifestyle factors most impact your sleep</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Discover optimal timing for exercise, meals, and caffeine</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Track improvements over time as you make lifestyle changes</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">Correlation Analysis</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">See how multiple factors work together to affect sleep</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Get personalized recommendations based on your patterns</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Understand the cumulative effect of daily choices</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">Goal Setting</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Set realistic goals for lifestyle improvements</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Track progress toward your sleep and wellness goals</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Celebrate achievements and milestones</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">Predictive Insights</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Predict sleep quality based on daily activities</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Get early warnings about potential sleep issues</p>
                </div>
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Receive proactive suggestions for better sleep</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Insights */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Example Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-emerald-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Caffeine Impact</h3>
              <p className="text-gray-600 mb-3">
                "You slept 23% better on days when you had your last coffee before 2 PM. 
                Consider cutting off caffeine earlier for improved sleep quality."
              </p>
              <div className="text-sm text-emerald-500">Based on 30 days of data</div>
            </div>
            <div className="border border-emerald-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Exercise Timing</h3>
              <p className="text-gray-600 mb-3">
                "Evening workouts within 3 hours of bedtime reduced your sleep quality by 15%. 
                Try exercising earlier in the day for better rest."
              </p>
              <div className="text-sm text-emerald-500">Based on 45 days of data</div>
            </div>
            <div className="border border-emerald-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Screen Time Effect</h3>
              <p className="text-gray-600 mb-3">
                "On nights when you used screens for more than 2 hours before bed, 
                it took you 40% longer to fall asleep."
              </p>
              <div className="text-sm text-emerald-500">Based on 60 days of data</div>
            </div>
            <div className="border border-emerald-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Hydration Correlation</h3>
              <p className="text-gray-600 mb-3">
                "Your sleep quality improved by 18% on days when you drank 
                more than 8 glasses of water."
              </p>
              <div className="text-sm text-emerald-500">Based on 40 days of data</div>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Privacy & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">🔒</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
                <p className="text-emerald-100">
                  Your lifestyle data is encrypted and stored securely, 
                  with full control over what information is shared.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">👤</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Control</h3>
                <p className="text-emerald-100">
                  Choose what to track and when, with the ability to 
                  pause or delete tracking at any time.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">📊</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Local Processing</h3>
                <p className="text-emerald-100">
                  Most analysis happens on your device, keeping your 
                  personal data private and secure.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">🚫</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">No Data Sharing</h3>
                <p className="text-emerald-100">
                  We never sell or share your personal lifestyle data 
                  with third parties without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Track Your Lifestyle?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start monitoring your daily habits and discover how they impact your sleep quality.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-colors">
            Start Tracking
          </button>
        </div>
      </div>
      {/* Lifestyle Tracker Section */}
      <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">Lifestyle Tracker</h2>
        <form onSubmit={handleAdd} className="flex flex-wrap gap-2 mb-4">
          <input name="date" type="date" value={form.date} onChange={handleChange} className="border p-2 rounded w-[120px]" required />
          <input name="caffeine" placeholder="Caffeine" value={form.caffeine} onChange={handleChange} className="border p-2 rounded w-[100px]" required />
          <input name="screen" placeholder="Screen Time" value={form.screen} onChange={handleChange} className="border p-2 rounded w-[100px]" required />
          <input name="exercise" placeholder="Exercise" value={form.exercise} onChange={handleChange} className="border p-2 rounded w-[120px]" required />
          <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">Add</button>
        </form>
        <table className="w-full text-left">
          <thead>
            <tr className="text-emerald-700">
              <th className="py-2">Date</th>
              <th className="py-2">Caffeine</th>
              <th className="py-2">Screen Time</th>
              <th className="py-2">Exercise</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((h, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="py-2">{h.date}</td>
                <td className="py-2">{h.caffeine}</td>
                <td className="py-2">{h.screen}</td>
                <td className="py-2">{h.exercise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 