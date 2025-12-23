"use client";

import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Accord",
      type: "Startup",
      period: "Present",
      description:
        "Working as a Software Developer at Accord, a fast-growing startup. Building innovative solutions using modern technologies including Next.js, Python, and cloud services to deliver scalable applications.",
      technologies: ["Next.js", "Python", "PostgreSQL", "Tailwind CSS"],
      current: true,
    },
    {
      role: "Machine Learning Projects",
      company: "Personal Projects",
      type: "Self-Directed",
      period: "Ongoing",
      description:
        "Developing machine learning models using Python, NumPy, Pandas, and PyTorch. Focusing on data analysis, predictive modeling, and deep learning applications.",
      technologies: ["Python", "PyTorch", "NumPy", "Pandas"],
      current: false,
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, glassmorphism portfolio built with Next.js and Tailwind CSS featuring dark/light mode.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
    {
      title: "ML Data Pipeline",
      description: "End-to-end machine learning pipeline for data processing and model training with PyTorch.",
      technologies: ["Python", "PyTorch", "Pandas", "NumPy"],
      link: "#",
    },
    {
      title: "Database Management System",
      description: "Robust database architecture with PostgreSQL and MySQL for high-performance applications.",
      technologies: ["PostgreSQL", "MySQL", "Python"],
      link: "#",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-emerald-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 border-4 border-white dark:border-slate-900 z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card p-6 relative">
                    {exp.current && (
                      <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
                        {exp.company}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                    <svg
                      className="w-6 h-6 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
