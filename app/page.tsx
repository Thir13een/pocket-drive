"use client";

import Link from "next/link";
import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
      {/* Aurora Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <Aurora
          colorStops={["#3B82F6", "#8B5CF6", "#EC4899"]}
          blend={0.6}
          amplitude={1.5}
          speed={0.5}
        />
      </div>
      {/* Navigation */}
      <nav className="relative flex rounded-full bg-white/5 backdrop-blur-xl border border-white/10 justify-start px-10 py-4 m-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold">PocketDrive</h2>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Your files, everywhere
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          A fast, modern cloud drive to upload, organize, and share files
          securely. Access your data from anywhere, on any device.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/signup"
            className="px-8 py-3 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Start for Free
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why PocketDrive?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Secure Storage</h3>
            <p className="text-slate-400">
              Your files are encrypted and stored securely. Only you have access
              to your data.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Lightning Fast</h3>
            <p className="text-slate-400">
              Upload and download files at blazing speeds. No waiting, no
              interruptions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Easy Sharing</h3>
            <p className="text-slate-400">
              Share files and folders with anyone. Set permissions and control
              access.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
