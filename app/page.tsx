import Image from "next/image";
import { Cpu, Cog, Zap, Award, Users, Shield, Target } from "lucide-react";

// Helper component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
    {children}
  </h2>
);

// Header Component
const Header = () => (
  <header className="w-full bg-black/50 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between p-4 text-white">
      <h1 className="text-xl font-bold">Braviant</h1>
      <nav className="hidden md:flex gap-6">
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#why-braviant" className="hover:text-gray-300">Why Braviant</a>
        <a href="#process" className="hover:text-gray-300">Our Process</a>
      </nav>
      <a
        href="#contact"
        className="px-4 py-2 font-semibold text-black bg-white rounded-md hover:bg-gray-200"
      >
        Contact Us
      </a>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="w-full py-8 bg-gray-900 text-center text-white">
    <div className="container mx-auto">
      <p>&copy; {new Date().getFullYear()} Braviant. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Unlock Your Business Potential with Custom AI
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
              We build intelligent RAG (Retrieval-Augmented Generation) systems tailored to your company's data, transforming how you work.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 mt-8 font-semibold text-black bg-white rounded-md hover:bg-gray-200"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Services</SectionTitle>
            <div className="grid gap-8 mt-12 md:grid-cols-3">
              <div className="p-8 text-center bg-black rounded-lg">
                <Cpu className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Custom AI Solutions</h3>
                <p className="text-gray-400">Your business is unique. We build custom AI models and applications tailored specifically to your challenges and goals.</p>
              </div>
              <div className="p-8 text-center bg-black rounded-lg">
                <Cog className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">RAG System Integration</h3>
                <p className="text-gray-400">Unlock the power of your own data. We integrate advanced Retrieval-Augmented Generation systems that provide accurate, context-aware answers.</p>
              </div>
              <div className="p-8 text-center bg-black rounded-lg">
                <Zap className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Automation</h3>
                <p className="text-gray-400">Increase efficiency and reduce manual work. We develop AI-driven automation for your workflows and processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Braviant? Section */}
        <section id="why-braviant" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTitle>Why Braviant?</SectionTitle>
            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 text-center bg-gray-900 rounded-lg">
                <Award className="w-10 h-10 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold">Expertise</h3>
                <p className="text-sm text-gray-400 mt-2">We are specialists in AI RAG systems, not generalists. This focus ensures cutting-edge, effective solutions.</p>
              </div>
              <div className="p-6 text-center bg-gray-900 rounded-lg">
                <Users className="w-10 h-10 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold">True Partnership</h3>
                <p className="text-sm text-gray-400 mt-2">We work with you as a strategic partner, aligning our work with your long-term business objectives.</p>
              </div>
              <div className="p-6 text-center bg-gray-900 rounded-lg">
                <Shield className="w-10 h-10 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold">Data Security</h3>
                <p className="text-sm text-gray-400 mt-2">Your data's privacy and security are integral to our design and development process, never an afterthought.</p>
              </div>
              <div className="p-6 text-center bg-gray-900 rounded-lg">
                <Target className="w-10 h-10 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold">ROI-Focused</h3>
                <p className="text-sm text-gray-400 mt-2">We design solutions that deliver measurable value and a clear return on your technology investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <SectionTitle>Real-World Applications</SectionTitle>
             <div className="mt-12 text-center">
                <p>Use case examples will be shown here.</p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Transparent Process</SectionTitle>
            <div className="max-w-3xl mx-auto mt-12 relative">
              {/* The timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />

              {/* Step 1 */}
              <div className="relative mb-8">
                <div className="flex items-center justify-start">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="font-bold text-xl">1. Discovery Call</h3>
                    <p className="text-gray-400">We start by listening. In this initial call, we dive deep into your goals, challenges, and vision for AI in your organization.</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-900" />
              </div>

              {/* Step 2 */}
              <div className="relative mb-8">
                <div className="flex items-center justify-end">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-1/2 pl-8 text-left">
                    <h3 className="font-bold text-xl">2. Strategy & Proposal</h3>
                    <p className="text-gray-400">Based on our call, we design a tailored AI strategy and provide a detailed proposal, including scope, timeline, and investment.</p>
                  </div>
                </div>
                 <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-900" />
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-8">
                <div className="flex items-center justify-start">
                  <div className="w-1/2 pr-8 text-right">
                     <h3 className="font-bold text-xl">3. Development & Integration</h3>
                     <p className="text-gray-400">Our expert team gets to work, building your custom AI solution. We provide regular updates to ensure we're aligned every step of the way.</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                 <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-900" />
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex items-center justify-end">
                   <div className="w-1/2 pr-8"></div>
                   <div className="w-1/2 pl-8 text-left">
                     <h3 className="font-bold text-xl">4. Launch & Support</h3>
                     <p className="text-gray-400">We deploy the solution and provide comprehensive training. Our partnership continues with ongoing support to ensure long-term success.</p>
                  </div>
                </div>
                 <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-900" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <SectionTitle>Let's Build Your AI Future</SectionTitle>
            <p className="max-w-2xl mx-auto mt-4 text-center text-gray-400">
              Ready to start? Have a question? Fill out the form below, and a member of our team will get back to you shortly.
            </p>
            <div className="max-w-xl mx-auto mt-12">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input type="text" name="name" id="name" autoComplete="name" placeholder="Full Name" className="block w-full px-4 py-3 bg-black border border-gray-700 rounded-md shadow-sm focus:ring-white focus:border-white" />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Company</label>
                  <input type="text" name="company" id="company" autoComplete="organization" placeholder="Company" className="block w-full px-4 py-3 bg-black border border-gray-700 rounded-md shadow-sm focus:ring-white focus:border-white" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="Email Address" className="block w-full px-4 py-3 bg-black border border-gray-700 rounded-md shadow-sm focus:ring-white focus:border-white" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="How can we help?" className="block w-full px-4 py-3 bg-black border border-gray-700 rounded-md shadow-sm focus:ring-white focus:border-white"></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center w-full px-6 py-3 text-lg font-medium text-black bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-200">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
