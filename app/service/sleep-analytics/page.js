"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SleepAnalyticsPage() {
  const [sleepStats] = useState([
    { date: '2024-06-01', hours: 7.5 },
    { date: '2024-06-02', hours: 6.2 },
    { date: '2024-06-03', hours: 8.1 },
    { date: '2024-06-04', hours: 5.9 },
    { date: '2024-06-05', hours: 7.0 },
    { date: '2024-06-06', hours: 6.8 },
    { date: '2024-06-07', hours: 7.9 },
  ]);
  const avg = (sleepStats.reduce((a, b) => a + b.hours, 0) / sleepStats.length).toFixed(1);
  const best = Math.max(...sleepStats.map(e => e.hours));
  const worst = Math.min(...sleepStats.map(e => e.hours));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
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
          <div className="text-6xl mb-4">📊</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Sleep Analytics & Reports</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your sleep data into actionable insights with comprehensive analytics, 
            beautiful visualizations, and detailed reports that help you understand and improve your sleep patterns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Daily Reports</h3>
            <p className="text-gray-600">
              Get detailed daily sleep summaries with sleep score, duration, 
              and quality metrics at a glance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Weekly Insights</h3>
            <p className="text-gray-600">
              View weekly trends and patterns to identify what's working 
              and what needs improvement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Monthly Analysis</h3>
            <p className="text-gray-600">
              Comprehensive monthly reports with long-term trends, 
              achievements, and goal tracking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Goal Tracking</h3>
            <p className="text-gray-600">
              Set personalized sleep goals and track your progress 
              with visual progress indicators.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Deep Analytics</h3>
            <p className="text-gray-600">
              Advanced analytics including sleep efficiency, sleep debt, 
              and circadian rhythm analysis.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Export & Share</h3>
            <p className="text-gray-600">
              Export your reports as PDF or share insights with your 
              healthcare provider or coach.
            </p>
          </div>
        </div>

        {/* Report Types */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Report Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Daily Sleep Report</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sleep duration and efficiency</li>
                <li>• Sleep stage breakdown</li>
                <li>• Sleep score and quality rating</li>
                <li>• Bedtime and wake time</li>
                <li>• Sleep debt calculation</li>
                <li>• Personalized insights</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Weekly Trend Report</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 7-day sleep average</li>
                <li>• Sleep consistency score</li>
                <li>• Best and worst sleep days</li>
                <li>• Sleep debt accumulation</li>
                <li>• Pattern recognition</li>
                <li>• Improvement recommendations</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Monthly Summary</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monthly sleep statistics</li>
                <li>• Goal achievement tracking</li>
                <li>• Long-term trend analysis</li>
                <li>• Sleep quality improvements</li>
                <li>• Personalized achievements</li>
                <li>• Next month recommendations</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Custom Reports</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Date range selection</li>
                <li>• Specific metric focus</li>
                <li>• Comparison reports</li>
                <li>• Lifestyle correlation</li>
                <li>• Export capabilities</li>
                <li>• Professional sharing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analytics Features */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Advanced Analytics Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">📊</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Sleep Efficiency</h3>
                <p className="text-purple-100">
                  Calculate the percentage of time spent actually sleeping 
                  versus time spent in bed.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">⏰</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Sleep Debt Tracking</h3>
                <p className="text-purple-100">
                  Monitor accumulated sleep debt and track recovery 
                  over time.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">🌙</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Circadian Rhythm</h3>
                <p className="text-purple-100">
                  Analyze your natural sleep-wake cycle and identify 
                  optimal sleep windows.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Trend Analysis</h3>
                <p className="text-purple-100">
                  Identify patterns and correlations between lifestyle 
                  factors and sleep quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visualization Examples */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Beautiful Visualizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Sleep Stage Charts</h3>
                <p className="text-gray-600">
                  Visual breakdown of light, deep, and REM sleep stages 
                  with easy-to-understand graphs.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-2">Trend Lines</h3>
                <p className="text-gray-600">
                  Track your sleep quality over time with interactive 
                  trend charts and progress indicators.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Goal Progress</h3>
                <p className="text-gray-600">
                  Visual progress bars and achievement badges to keep 
                  you motivated and on track.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl mb-4">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Mobile Dashboard</h3>
                <p className="text-gray-600">
                  Responsive design that looks great on all devices 
                  with touch-friendly interactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready for Better Sleep Insights?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start tracking your sleep patterns and get detailed analytics to improve your rest.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors">
            View Sample Reports
          </button>
        </div>
      </div>
      {/* Sleep Analytics Section */}
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Weekly Sleep Analytics</h2>
        {/* Simple Line Chart */}
        <svg viewBox="0 0 300 100" className="w-full h-28 mb-4">
          <polyline
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3"
            points={sleepStats.map((e, i) => `${i * 50},${100 - (e.hours - 5) * 20}`).join(' ')}
          />
          {sleepStats.map((e, i) => (
            <circle key={i} cx={i * 50} cy={100 - (e.hours - 5) * 20} r="4" fill="#f472b6" />
          ))}
        </svg>
        <div className="flex gap-8 text-center mb-2">
          <div>
            <div className="text-lg font-bold text-purple-700">{avg} hrs</div>
            <div className="text-xs text-gray-500">Avg Sleep</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">{best} hrs</div>
            <div className="text-xs text-gray-500">Best Night</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-500">{worst} hrs</div>
            <div className="text-xs text-gray-500">Worst Night</div>
          </div>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          {sleepStats.map((e, i) => (
            <div key={i} className="text-xs text-gray-400">{e.date.slice(5)}</div>
          ))}
        </div>
      </div>
    </div>
  );
} 