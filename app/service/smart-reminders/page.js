"use client";

import Link from 'next/link';
import { useState } from 'react';

const initialReminders = [
  { id: 1, text: 'Go to bed at 10:30pm', done: false },
  { id: 2, text: 'Log your caffeine intake', done: false },
  { id: 3, text: 'Do a 5-min meditation', done: false },
  { id: 4, text: 'Turn off screens by 10pm', done: false },
];

export default function SmartRemindersPage() {
  const [reminders, setReminders] = useState(initialReminders);
  const markDone = id => setReminders(reminders.map(r => r.id === id ? { ...r, done: !r.done } : r));
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
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
          <div className="text-6xl mb-4">📱</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Smart Reminders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss your sleep routine again with intelligent reminders that adapt to your schedule. 
            Get timely notifications for bedtime, habit logging, and wellness activities to build consistent sleep habits.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Bedtime Reminders</h3>
            <p className="text-gray-600">
              Get gentle notifications when it's time to start your bedtime routine, 
              helping you maintain a consistent sleep schedule.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Habit Logging</h3>
            <p className="text-gray-600">
              Receive reminders to log your daily habits like caffeine intake, 
              exercise, and screen time to track their impact on sleep.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🧘</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Wellness Activities</h3>
            <p className="text-gray-600">
              Get prompted for relaxation exercises, meditation sessions, 
              and other wellness activities to improve sleep quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Smart Timing</h3>
            <p className="text-gray-600">
              Reminders adapt to your schedule and sleep patterns, 
              ensuring they appear at the most effective times for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Customizable Alerts</h3>
            <p className="text-gray-600">
              Choose your preferred notification style, timing, and frequency 
              to match your lifestyle and preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-600">Progress Tracking</h3>
            <p className="text-gray-600">
              Track your adherence to reminders and see how consistent 
              routines improve your sleep quality over time.
            </p>
          </div>
        </div>

        {/* Reminder Types */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Types of Reminders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">Sleep Schedule Reminders</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bedtime preparation alerts</li>
                <li>• Wake-up time notifications</li>
                <li>• Sleep window optimization</li>
                <li>• Weekend schedule adjustments</li>
                <li>• Travel schedule adaptations</li>
                <li>• Daylight saving time alerts</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">Habit Tracking Reminders</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Caffeine intake logging</li>
                <li>• Exercise activity tracking</li>
                <li>• Screen time monitoring</li>
                <li>• Meal timing reminders</li>
                <li>• Medication reminders</li>
                <li>• Water intake tracking</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">Wellness Activity Reminders</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Meditation session prompts</li>
                <li>• Breathing exercise reminders</li>
                <li>• Stretching routine alerts</li>
                <li>• Journaling prompts</li>
                <li>• Relaxation technique reminders</li>
                <li>• Gratitude practice alerts</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">Smart Notifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Context-aware timing</li>
                <li>• Location-based reminders</li>
                <li>• Weather-dependent alerts</li>
                <li>• Activity-based notifications</li>
                <li>• Priority-based scheduling</li>
                <li>• Snooze and reschedule options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Smart Features */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">🤖</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Timing</h3>
                <p className="text-orange-100">
                  Our AI learns your patterns and sends reminders at the optimal 
                  times for maximum effectiveness.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">📱</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform Sync</h3>
                <p className="text-orange-100">
                  Receive reminders across all your devices - phone, tablet, 
                  smartwatch, and desktop.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">🎨</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Customizable Design</h3>
                <p className="text-orange-100">
                  Choose from different notification styles, sounds, and 
                  visual themes to match your preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">🔒</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Do Not Disturb Integration</h3>
                <p className="text-orange-100">
                  Smart integration with your device's do not disturb settings 
                  to respect your quiet hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reminder Examples */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Example Reminders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Evening Routine</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">⏰</div>
                  <p className="text-gray-700">"Time to start winding down - 2 hours until bedtime"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">📱</div>
                  <p className="text-gray-700">"Switch to night mode and reduce screen brightness"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">🧘</div>
                  <p className="text-gray-700">"Time for your 10-minute meditation session"</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Morning Routine</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">🌅</div>
                  <p className="text-gray-700">"Good morning! Time to start your day"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">💧</div>
                  <p className="text-gray-700">"Don't forget to log your water intake"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">📊</div>
                  <p className="text-gray-700">"Check your sleep report from last night"</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Habit Tracking</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">☕</div>
                  <p className="text-gray-700">"Log your caffeine consumption for today"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">🏃</div>
                  <p className="text-gray-700">"Time for your evening walk or exercise"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">📱</div>
                  <p className="text-gray-700">"Track your screen time before bed"</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Wellness Activities</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">🧘</div>
                  <p className="text-gray-700">"Practice deep breathing exercises"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">📝</div>
                  <p className="text-gray-700">"Write in your gratitude journal"</p>
                </div>
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">🛁</div>
                  <p className="text-gray-700">"Take a relaxing warm bath"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Customization Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold mb-2">Timing Preferences</h3>
                <p className="text-gray-600">
                  Set your preferred reminder times, frequency, and 
                  advance notice periods for different activities.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-xl font-semibold mb-2">Notification Style</h3>
                <p className="text-gray-600">
                  Choose from gentle nudges, persistent alerts, or 
                  silent reminders based on your preferences.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Visual Themes</h3>
                <p className="text-gray-600">
                  Personalize the look and feel of your reminders 
                  with different colors, fonts, and themes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready for Smart Reminders?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start building better sleep habits with intelligent reminders that work around your schedule.
          </p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-700 transition-colors">
            Set Up Reminders
          </button>
        </div>
      </div>
      {/* Reminders Section */}
      <div className="max-w-xl mx-auto mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Today's Reminders</h2>
        <ul className="space-y-3">
          {reminders.map(r => (
            <li key={r.id} className="flex items-center justify-between p-3 rounded-lg border border-orange-100 bg-orange-50">
              <span className={r.done ? 'line-through text-gray-400' : ''}>{r.text}</span>
              <button onClick={() => markDone(r.id)} className={`ml-4 px-3 py-1 rounded ${r.done ? 'bg-green-400 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'} transition`}>
                {r.done ? 'Done' : 'Mark as Done'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 