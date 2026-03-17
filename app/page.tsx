'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Cog, Zap, Award, Users, Shield, Target, ChevronRight, MessageSquare, BarChart3, Brain } from 'lucide-react';

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
      }}
    />
  );
};

// Navbar Component
const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blurValue = useTransform(scrollY, [0, 100], [0, 10]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10"
      style={{
        backgroundColor: `rgba(11, 15, 25, ${backgroundOpacity})`,
        backdropFilter: `blur(${blurValue}px)`,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Braviant
        </motion.h1>
        <div className="hidden md:flex space-x-8">
          {['Services', 'Why Braviant', 'Use Cases', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-hover
        >
          Get Started
        </motion.a>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  const words = ["Unlock", "Your", "Business", "Potential", "with", "Custom", "AI"];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We build intelligent RAG systems tailored to your company's data, transforming how you work.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              data-hover
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Schedule Free Consultation
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated AI Graphic Placeholder */}
          <div className="relative w-full h-96 lg:h-[500px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
                  "linear-gradient(45deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))",
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(34, 211, 238, 0.2))",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-4 flex items-center justify-center">
              <motion.div
                className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-16 h-16 text-white" />
              </motion.div>
            </div>
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Custom AI Solutions",
      description: "Your business is unique. We build custom AI models and applications tailored specifically to your challenges and goals.",
    },
    {
      icon: Cog,
      title: "RAG System Integration",
      description: "Unlock the power of your own data. We integrate advanced Retrieval-Augmented Generation systems that provide accurate, context-aware answers.",
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Increase efficiency and reduce manual work. We develop AI-driven automation for your workflows and processes.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Braviant Section
const WhyBraviant = () => {
  const reasons = [
    { icon: Award, title: "Expertise", description: "We are specialists in AI RAG systems, not generalists. This focus ensures cutting-edge, effective solutions." },
    { icon: Users, title: "True Partnership", description: "We work with you as a strategic partner, aligning our work with your long-term business objectives." },
    { icon: Shield, title: "Data Security", description: "Your data's privacy and security are integral to our design and development process, never an afterthought." },
    { icon: Target, title: "ROI-Focused", description: "We design solutions that deliver measurable value and a clear return on your technology investment." },
  ];

  return (
    <section id="why-braviant" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Braviant?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <reason.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/70 text-sm">{reason.description}</p>
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cases = [
    {
      icon: MessageSquare,
      title: "Customer Support Chatbot",
      description: "Intelligent chatbot that understands your product documentation and provides instant, accurate responses to customer inquiries.",
      features: ["24/7 availability", "Reduces response time by 80%", "Learns from your data"],
    },
    {
      icon: BarChart3,
      title: "Data Analysis Assistant",
      description: "AI-powered assistant that analyzes your business data and provides insights, recommendations, and automated reporting.",
      features: ["Real-time insights", "Predictive analytics", "Custom dashboards"],
    },
    {
      icon: Brain,
      title: "Knowledge Management",
      description: "Transform your internal knowledge base into an intelligent search and retrieval system for your team.",
      features: ["Instant document search", "Context-aware answers", "Continuous learning"],
    },
  ];

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Real-World Applications
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12">
            {cases.map((case_, index) => (
              <motion.button
                key={case_.title}
                className={`px-6 py-3 rounded-full mr-4 mb-4 backdrop-blur-xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white/20 border-white/40 text-white'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <case_.icon className="w-5 h-5 inline mr-2" />
                {case_.title}
              </motion.button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6"
                animate={{ rotate: activeTab === 0 ? [0, 5, -5, 0] : 0 }}
                transition={{ duration: 2, repeat: activeTab === 0 ? Infinity : 0 }}
              >
                {React.createElement(cases[activeTab].icon, { className: "w-8 h-8 text-white" })}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{cases[activeTab].title}</h3>
                <p className="text-white/70">{cases[activeTab].description}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {cases[activeTab].features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="bg-white/5 rounded-lg p-4 border border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-white/80 text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Process Section
const Process = () => {
  const steps = [
    { title: "Discovery Call", description: "We start by listening. In this initial call, we dive deep into your goals, challenges, and vision for AI in your organization." },
    { title: "Strategy & Proposal", description: "Based on our call, we design a tailored AI strategy and provide a detailed proposal, including scope, timeline, and investment." },
    { title: "Development & Integration", description: "Our expert team gets to work, building your custom AI solution. We provide regular updates to ensure we're aligned every step of the way." },
    { title: "Launch & Support", description: "We deploy the solution and provide comprehensive training. Our partnership continues with ongoing support to ensure long-term success." },
  ];

  return (
    <section id="process" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Transparent Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto w-1/2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 left-1/2 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />
                <motion.div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Your AI Future</h2>
          <p className="text-xl text-white/70">
            Ready to start? Have a question? Fill out the form below, and a member of our team will get back to you shortly.
          </p>
        </motion.div>
        <motion.div
          className="max-w-xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              data-hover
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="py-8 bg-black/50 backdrop-blur-sm border-t border-white/10">
    <div className="container mx-auto px-4 text-center">
      <p className="text-white/70">&copy; {new Date().getFullYear()} Braviant. All rights reserved.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyBraviant />
        <UseCases />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
