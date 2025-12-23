"use client";

import React from "react";

const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Full Stack Development",
      description: "Building end-to-end solutions with Next.js, React, and modern backend technologies.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Machine Learning",
      description: "Leveraging Python, NumPy, Pandas, and PyTorch to build intelligent solutions.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Database Architecture",
      description: "Designing robust data solutions with PostgreSQL and MySQL for scalable applications.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m a Full Stack Developer and Machine Learning Engineer with a passion for
                building innovative solutions that make a real impact. Currently, I work as a
                Software Developer at <span className="text-cyan-500 font-semibold">Accord</span>,
                a dynamic startup where I contribute to building cutting-edge applications.
              </p>
              <p>
                My expertise spans across the entire development stack - from crafting beautiful,
                responsive user interfaces with Next.js and Tailwind CSS, to developing robust
                backend systems and implementing machine learning models with Python.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the
                latest technologies. When I&apos;m not coding, you&apos;ll find me exploring new
                frameworks, contributing to open-source projects, or learning about emerging
                trends in AI and software development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-cyan-500/10">
                <div className="text-2xl font-bold text-cyan-500">2+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-teal-500/10">
                <div className="text-2xl font-bold text-teal-500">10+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-cyan-600/10">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">5+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-4 hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 text-cyan-500 dark:text-cyan-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
