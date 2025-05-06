"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          About <span className="text-yellow-500">Health Icon</span>
        </h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Health Icon is your smart companion for better sleep, improved wellness, and a healthier lifestyle.
        </p>

        <img
          src="https://imgs.search.brave.com/JwJ1_xycCR2B1b9AT508QUyvzAZzvOL1L1DIsRuIsjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGTHJa/NktoR3MvMS8wLzEx/MzF3L2NhbnZhLWNy/ZWFtLWhlYXJ0ZWQt/c2xlZXAtdGlwcy1m/bHllci01ZFFSR0pP/Rzh1RS5qcGc"
          alt="Sleep Illustration"
          className="rounded-xl shadow-md w-full mb-8"
        />

        <div className="space-y-6 text-gray-800 leading-relaxed font-serif">
          <p>
            Our mission is simple — to help people understand and improve their sleep. In today’s fast-paced world, quality rest is often overlooked. Health Icon makes it easy to track your sleep, gain insights, and receive personalized guidance.
          </p>

          <p>
            We use modern technology and design to bring you an experience that’s easy to use, backed by research, and tailored to your goals. Whether you’re struggling with insomnia or just want to sleep better, Health Icon is here for you.
          </p>

          <p>
            From detailed sleep analytics to gentle reminders and expert-backed tips, we support you on your journey to better rest and better living.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To build a world where everyone sleeps better, lives healthier, and wakes up energized.
          </p>
        </div>
      </div>
    </div>
  );
}
