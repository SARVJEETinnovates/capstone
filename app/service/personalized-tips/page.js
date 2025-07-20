"use client";

import Link from 'next/link';
import { useState } from 'react';

const mockTips = [
  "Go to bed at the same time every night.",
  "Avoid caffeine after 2pm.",
  "Keep your bedroom cool and dark.",
  "Limit screen time before bed.",
  "Try a short meditation before sleep.",
  "Get sunlight exposure in the morning.",
  "Avoid heavy meals late at night."
];

export default function PersonalizedTipsPage() {
  const [tip, setTip] = useState(mockTips[0]);
  const getNewTip = () => {
    const idx = Math.floor(Math.random() * mockTips.length);
    setTip(mockTips[idx]);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
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
          <div className="text-6xl mb-4">💡</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Personalized Sleep Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get tailored sleep recommendations based on your unique patterns, lifestyle, and goals. 
            Our AI-powered system learns from your data to provide actionable tips that actually work for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Our advanced AI analyzes your sleep patterns, lifestyle factors, 
              and preferences to generate personalized recommendations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Goal-Based Tips</h3>
            <p className="text-gray-600">
              Receive tips aligned with your specific sleep goals, whether it's 
              falling asleep faster or improving sleep quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Daily Recommendations</h3>
            <p className="text-gray-600">
              Get fresh, actionable tips every day based on your recent sleep 
              performance and current patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Adaptive Learning</h3>
            <p className="text-gray-600">
              The system learns from your feedback and adjusts recommendations 
              to better suit your preferences and lifestyle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Progress Tracking</h3>
            <p className="text-gray-600">
              Track how well each tip works for you and see which recommendations 
              lead to the best improvements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Expert Backed</h3>
            <p className="text-gray-600">
              All recommendations are based on sleep science and reviewed by 
              certified sleep specialists and wellness experts.
            </p>
          </div>
        </div>

        {/* Tip Categories */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tip Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Sleep Environment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Optimal room temperature settings</li>
                <li>• Lighting recommendations</li>
                <li>• Noise reduction strategies</li>
                <li>• Mattress and pillow advice</li>
                <li>• Bedroom organization tips</li>
                <li>• Air quality improvements</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Bedtime Routine</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Relaxation techniques</li>
                <li>• Screen time management</li>
                <li>• Pre-sleep activities</li>
                <li>• Stress reduction methods</li>
                <li>• Evening meal timing</li>
                <li>• Caffeine and alcohol guidance</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Lifestyle Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Exercise timing recommendations</li>
                <li>• Diet and nutrition advice</li>
                <li>• Stress management techniques</li>
                <li>• Work schedule optimization</li>
                <li>• Social activities impact</li>
                <li>• Travel sleep strategies</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Sleep Disorders</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Insomnia management</li>
                <li>• Sleep apnea awareness</li>
                <li>• Restless leg syndrome tips</li>
                <li>• Circadian rhythm disorders</li>
                <li>• When to seek professional help</li>
                <li>• Treatment options guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personalization Process */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">How Personalization Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Collection</h3>
              <p className="text-green-100">
                We gather your sleep patterns, lifestyle habits, and preferences 
                to understand your unique situation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Analysis</h3>
              <p className="text-green-100">
                Our AI analyzes your data to identify patterns, correlations, 
                and areas for improvement.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tip Generation</h3>
              <p className="text-green-100">
                Personalized recommendations are generated based on your specific 
                needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
              <p className="text-green-100">
                The system learns from your feedback and adjusts recommendations 
                to become more effective over time.
              </p>
            </div>
          </div>
        </div>

        {/* Example Tips */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Example Personalized Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-600">For Night Owls</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Try gradually shifting your bedtime 15 minutes earlier each week</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Expose yourself to bright light in the morning to reset your circadian rhythm</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Avoid screens 2 hours before your target bedtime</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-600">For Light Sleepers</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Use white noise or nature sounds to mask disruptive sounds</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Invest in blackout curtains to eliminate light disturbances</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Practice progressive muscle relaxation before bed</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-600">For Stressful Days</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Try 10 minutes of deep breathing exercises before bed</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Write down your worries in a journal to clear your mind</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Take a warm bath with lavender essential oil</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-600">For Shift Workers</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Use blue light blocking glasses after night shifts</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Create a consistent sleep schedule even on days off</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">•</div>
                  <p className="text-gray-700">Optimize your sleep environment for daytime sleeping</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready for Personalized Sleep Tips?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start receiving customized recommendations that work for your unique sleep patterns and lifestyle.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors">
            Get Personalized Tips
          </button>
        </div>
      </div>
      {/* Personalized Tip Section */}
      <div className="max-w-xl mx-auto mt-12 bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Your Personalized Tip</h2>
        <div className="text-lg text-gray-700 mb-4">{tip}</div>
        <button onClick={getNewTip} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Get New Tip</button>
      </div>
    </div>
  );
} 