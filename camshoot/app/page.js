import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 py-24 text-center lg:text-left">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Think It. Create It. Share It - In Seconds <br />
              With <span className="text-yellow-300">CamShoot AI</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8">
              Where Ideas Turn into Visual Masterpieces in Seconds.😀
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link href="/dashboard">
                  <button className="bg-yellow-300 text-indigo-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                    Get Started for Free
                  </button>
                </Link>
                <Link href="/dashboard">
                  <button className="bg-transparent border border-yellow-300 px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-yellow-300 hover:text-indigo-900 transition">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <Image
                src="/hero3.png"
                alt="AI Productivity"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gray rounded-t-full"></div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
          From Concept to Creation in Moments
          </h2>
          <p className="text-lg mb-16 text-gray-600">
          AI-driven features in CamShoot help you effortlessly capture, enhance, and share your vision.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="absolute top-[-20px] left-4 w-[80px] h-[80px] rounded-full bg-indigo-100 flex items-center justify-center shadow-lg">
                <Image
                  src="/feature1.png"
                  alt="Smart Summaries"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold mt-16">Theme-Based Video Creation</h3>
              <p className="mt-4 text-gray-600">
              Select a theme and let the AI generate a short video with footage, text, and effects tailored to your choice.</p>
            </div>
            {/* Feature 2 */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="absolute top-[-20px] left-4 w-[80px] h-[80px] rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                <Image
                  src="/feature11.png"
                  alt="Seamless Integration"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold mt-16">AI-Driven Content Personalization</h3>
              <p className="mt-4 text-gray-600">
              The AI analyzes your input, such as keywords or images, and creates a custom video aligned with your theme, making it impactful.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="absolute top-[-20px] left-4 w-[80px] h-[80px] rounded-full bg-pink-100 flex items-center justify-center shadow-lg">
                <Image
                  src="/feature111.png"
                  alt="AI-Powered Organization"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold mt-16">
              Smart Text and Visual Alignment
              </h3>
              <p className="mt-4 text-gray-600">
              The AI analyzes the theme and adds fitting text, quotes, or captions that align with the video's tone, ensuring perfect visual and emotional impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            See It in Action (Demo)
          </h2>
          <p className="text-lg mb-7">
          Watch how CamShoot transforms your moments into visual masterpieces.
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <iframe
              // src=""
              className="w-full aspect-video rounded-lg shadow-lg"
              width="720"
              height="405"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Rapid Noter AI Demo"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">
          Choose Your Plan
          </h2>
          <p className="text-lg mb-12 text-gray-600">
            Start for free or unlock premium features to take your productivity
            to the next level with Rapid Noter AI!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Freemium Plan */}
            <div className="bg-white shadow-lg rounded-lg p-8 border hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600">Freemium</h3>
              <p className="mt-2 text-lg font-medium">$0 / 3 PDF</p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>3 PDF Uploads</li>
                <li>Unlimited Notes</li>
                <li>Email Support</li>
                <li>Help Center Access</li>
              </ul>
              <Link href="/sign-up">
              <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
                Get Started For Free
              </button>
              </Link>
            </div>
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg rounded-lg p-8 transform scale-105">
              <h3 className="text-2xl font-bold">Starter (Beta)</h3>
              <p className="mt-2 text-lg font-medium">$19/ 30 PDF</p>
              <ul className="mt-6 space-y-4">
                <li>30 PDF Uploads</li>
                <li>Unlimited Notes</li>
                <li>Priority Email Support</li>
                <li>Help Center Access</li>
              </ul>
              <Link href="/sign-up">
              <button className="mt-6 w-full bg-white text-indigo-600 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                Upgrade Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-24 text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            TRY TODAY FOR FREE!
          </h2>
          <p className="text-xl mb-8">
            Try Rapid Noter today and discover how it can revolutionize your
            note-taking and research workflow!
          </p>
          <p className="text-lg mb-6">No credit card required.</p>
          <Link href="/sign-up">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Get Started For Free
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            © 2024 CamShoot. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            <Link
              href="/sign-up"
              className="hover:text-yellow-500 transition-colors mx-2"
            >
              Sign Up
            </Link>
            <span>|</span>
            <Link
              href="/sign-in"
              className="hover:text-yellow-500 transition-colors mx-2"
            >
              Sign In
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
