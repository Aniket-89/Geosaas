import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  CheckCircle2,
  Search,
  BarChart3,
  TrendingUp,
  Eye,
  Brain,
  Target,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import {DashboardImage} from "./assets/assets";
import Logo from "./components/Logo";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-200/40 via-pink-200/30 to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <Logo />
        <Button className="bg-[rgb(252,86,21)] hover:bg-orange-700 text-white px-6 py-2 rounded-full">
          Join waitlist
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-[48px] font-bold">
            <span className="text-black">SEO was for Google. </span>
            <span className="text-[rgb(252,86,21)]">GEO is for AI.</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
            Measure your brand's visibility across AI models like ChatGPT. Find
            out if you're being mentioned, how accurately, and how to improve
            your AI presence.
          </p>

          {/* Email Input and CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-6 text-lg rounded-full border-gray-300"
            />
            <Button className="bg-[rgb(252,86,21)] hover:bg-orange-700 text-white px-10 py-6 rounded-full text-lg whitespace-nowrap">
              Join waitlist
            </Button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src={DashboardImage}
              alt="Citaforge Dashboard"
              className="w-full h-auto rounded-[10px]"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-gray-900 text-[32px] font-bold">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Track and optimize your brand's visibility across AI platforms in
              three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-[rgb(252,86,21)]" size={32} />
              </div>
              <h3 className="mb-4 text-gray-900">1. Monitor AI Models</h3>
              <p className="text-gray-600">
                Connect your brand and start tracking mentions across ChatGPT,
                Claude, Gemini, and other leading AI models.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="text-[rgb(252,86,21)]" size={32} />
              </div>
              <h3 className="mb-4 text-gray-900">2. Analyze Your Score</h3>
              <p className="text-gray-600">
                Get detailed insights on your AI visibility score, accuracy of
                mentions, and sentiment analysis.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-[rgb(252,86,21)]" size={32} />
              </div>
              <h3 className="mb-4 text-gray-900">3. Improve & Grow</h3>
              <p className="text-gray-600">
                Receive actionable recommendations to increase your brand's
                presence and improve accuracy in AI responses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-gray-900 font-bold text-[24px]">
              Why Choose Citaforge
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The complete platform for monitoring and optimizing your brand's
              AI presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-[rgb(252,86,21)]" size={24} />
              </div>
              <h3 className="mb-3 text-gray-900">Real-Time Monitoring</h3>
              <p className="text-gray-600">
                Track your brand mentions across multiple AI models in real-time
                with instant alerts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-[rgb(252,86,21)]" size={24} />
              </div>
              <h3 className="mb-3 text-gray-900">Accuracy Analysis</h3>
              <p className="text-gray-600">
                Understand how accurately AI models represent your brand and
                identify misinformation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-[rgb(252,86,21)]" size={24} />
              </div>
              <h3 className="mb-3 text-gray-900">Optimization Tips</h3>
              <p className="text-gray-600">
                Get data-driven recommendations to improve your AI visibility
                and brand accuracy.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-[rgb(252,86,21)]" size={24} />
              </div>
              <h3 className="mb-3 text-gray-900">Comprehensive Reports</h3>
              <p className="text-gray-600">
                Access detailed analytics and exportable reports to share with
                your team.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-[rgb(252,86,21)]" size={24} />
              </div>
              <h3 className="mb-3 text-gray-900">Trend Analysis</h3>
              <p className="text-gray-600">
                Visualize your AI visibility trends over time and measure your
                growth.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="text-[rgb(252,86,21)]" size={24} />
              </div>
              <h3 className="mb-3 text-gray-900">Multi-Model Support</h3>
              <p className="text-gray-600">
                Monitor ChatGPT, Claude, Gemini, Perplexity, and more from one
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-gray-900 text-[24px] font-bold">
              Ready to Track Your AI Visibility?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Join the waitlist and be among the first to optimize your brand's
              presence in the age of AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-6 text-lg rounded-full border-gray-300 bg-white"
              />
              <Button className="bg-[rgb(252,86,21)] hover:bg-orange-700 text-white px-10 py-6 rounded-full text-lg whitespace-nowrap">
                Join waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Track and optimize your brand's visibility across AI platforms.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Citaforge. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-[rgb(252,86,21)] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[rgb(252,86,21)] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[rgb(252,86,21)] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[rgb(252,86,21)] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
