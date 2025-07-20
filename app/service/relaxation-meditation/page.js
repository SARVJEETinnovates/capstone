"use client";

import Link from 'next/link';
import { useState } from 'react';

const meditations = [
  { id: 1, title: 'Calm Breathing', duration: '5 min', type: 'Breathing' },
  { id: 2, title: 'Deep Sleep Journey', duration: '15 min', type: 'Guided' },
  { id: 3, title: 'Nature Sounds', duration: '20 min', type: 'Ambient' },
  { id: 4, title: 'Body Scan', duration: '10 min', type: 'Guided' },
];

export default function RelaxationMeditationPage() {
  const [playing, setPlaying] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
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
          <div className="text-6xl mb-4">🧘</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Relaxation & Meditation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a collection of guided meditations, breathing exercises, and calming sleep music 
            designed to help you unwind, reduce stress, and prepare your mind and body for restful sleep.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎧</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Guided Meditations</h3>
            <p className="text-gray-600">
              Access hundreds of guided meditation sessions led by certified 
              instructors for different sleep needs and preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🫁</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Breathing Exercises</h3>
            <p className="text-gray-600">
              Learn proven breathing techniques like 4-7-8, box breathing, 
              and progressive relaxation to calm your nervous system.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Sleep Music</h3>
            <p className="text-gray-600">
              Enjoy curated playlists of ambient sounds, nature sounds, 
              and sleep-inducing music to create a peaceful environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Personalized Sessions</h3>
            <p className="text-gray-600">
              Get recommendations based on your sleep patterns, stress levels, 
              and meditation experience for optimal results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Offline Access</h3>
            <p className="text-gray-600">
              Download your favorite sessions for offline use, perfect for 
              travel or when you don't have internet access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Progress Tracking</h3>
            <p className="text-gray-600">
              Track your meditation practice and see how it correlates 
              with improvements in your sleep quality.
            </p>
          </div>
        </div>

        {/* Content Categories */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Sleep-Focused Meditations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Falling asleep meditations</li>
                <li>• Deep sleep inductions</li>
                <li>• Sleep anxiety relief</li>
                <li>• Insomnia management</li>
                <li>• Sleep cycle optimization</li>
                <li>• Nighttime relaxation</li>
              </ul>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Stress Relief Sessions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Anxiety reduction techniques</li>
                <li>• Stress management practices</li>
                <li>• Mindful breathing exercises</li>
                <li>• Progressive muscle relaxation</li>
                <li>• Body scan meditations</li>
                <li>• Emotional regulation tools</li>
              </ul>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Wellness Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Morning mindfulness routines</li>
                <li>• Evening wind-down practices</li>
                <li>• Gratitude meditations</li>
                <li>• Self-compassion sessions</li>
                <li>• Energy clearing practices</li>
                <li>• Mindful movement guides</li>
              </ul>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Audio Experiences</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Nature soundscapes</li>
                <li>• Ambient music collections</li>
                <li>• White noise variations</li>
                <li>• Binaural beats</li>
                <li>• ASMR sleep sounds</li>
                <li>• Custom sleep playlists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Session Types */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Session Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Sessions (5-10 min)</h3>
              <p className="text-indigo-100">
                Perfect for busy schedules or when you need a quick 
                relaxation boost during the day.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bedtime Sessions (15-30 min)</h3>
              <p className="text-indigo-100">
                Longer sessions designed specifically to help you 
                unwind and prepare for sleep.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Extended Practice (30-60 min)</h3>
              <p className="text-indigo-100">
                Deep meditation sessions for experienced practitioners 
                or when you have more time to dedicate.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Sessions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Sleep Induction Series</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Gentle Sleep"</span>
                  <span className="text-indigo-500 font-semibold">10 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Deep Sleep Journey"</span>
                  <span className="text-indigo-500 font-semibold">20 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Sleep Anxiety Relief"</span>
                  <span className="text-indigo-500 font-semibold">15 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Insomnia Recovery"</span>
                  <span className="text-indigo-500 font-semibold">25 min</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Breathing Techniques</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"4-7-8 Breathing"</span>
                  <span className="text-indigo-500 font-semibold">5 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Box Breathing"</span>
                  <span className="text-indigo-500 font-semibold">8 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Progressive Relaxation"</span>
                  <span className="text-indigo-500 font-semibold">12 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Alternate Nostril"</span>
                  <span className="text-indigo-500 font-semibold">7 min</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Nature Soundscapes</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Ocean Waves"</span>
                  <span className="text-indigo-500 font-semibold">60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Forest Night"</span>
                  <span className="text-indigo-500 font-semibold">45 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Rain on Window"</span>
                  <span className="text-indigo-500 font-semibold">90 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Creek Water"</span>
                  <span className="text-indigo-500 font-semibold">75 min</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Mindfulness Practices</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Body Scan"</span>
                  <span className="text-indigo-500 font-semibold">15 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Loving Kindness"</span>
                  <span className="text-indigo-500 font-semibold">20 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Mindful Walking"</span>
                  <span className="text-indigo-500 font-semibold">10 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">"Gratitude Practice"</span>
                  <span className="text-indigo-500 font-semibold">12 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Benefits of Regular Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-indigo-500 text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Improved Sleep Quality</h3>
                <p className="text-gray-600">
                  Regular meditation and relaxation practices can significantly 
                  improve sleep onset and overall sleep quality.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-indigo-500 text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Reduced Stress & Anxiety</h3>
                <p className="text-gray-600">
                  Mindfulness practices help lower cortisol levels and 
                  reduce symptoms of stress and anxiety.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-indigo-500 text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Better Mental Clarity</h3>
                <p className="text-gray-600">
                  Regular practice improves focus, concentration, and 
                  overall cognitive function throughout the day.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-indigo-500 text-2xl mr-4">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Emotional Well-being</h3>
                <p className="text-gray-600">
                  Meditation helps develop emotional resilience and 
                  better emotional regulation skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Your Relaxation Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Begin with our guided sessions and discover the power of meditation for better sleep.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start Free Session
          </button>
        </div>
      </div>
      {/* Meditation Tracks Section */}
      <div className="max-w-xl mx-auto mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Meditation Tracks</h2>
        <ul className="space-y-3">
          {meditations.map(m => (
            <li key={m.id} className="flex items-center justify-between p-3 rounded-lg border border-indigo-100 bg-indigo-50">
              <div>
                <div className="font-semibold text-indigo-700">{m.title}</div>
                <div className="text-xs text-gray-500">{m.duration} • {m.type}</div>
              </div>
              <button onClick={() => setPlaying(m.id)} className={`ml-4 px-3 py-1 rounded ${playing === m.id ? 'bg-green-500 text-white' : 'bg-indigo-500 text-white hover:bg-indigo-600'} transition`}>
                {playing === m.id ? 'Playing...' : 'Play'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 