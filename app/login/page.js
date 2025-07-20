"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.email && form.password) {
      localStorage.setItem("user", form.email);
      window.dispatchEvent(new Event("userchange"));
      router.push("/");
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Login</h2>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl" />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Login</Button>
        <div className="text-center text-sm mt-2">Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a></div>
      </form>
    </div>
  );
} 