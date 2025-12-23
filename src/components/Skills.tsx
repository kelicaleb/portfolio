"use client";

import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-cyan-500 to-teal-500",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend & ML",
      color: "from-teal-500 to-emerald-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      title: "Database",
      color: "from-cyan-600 to-cyan-400",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      color: "from-teal-600 to-cyan-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 80 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  const techStack = [
    { name: "Next.js", icon: "⚛️" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "PyTorch", icon: "🔥" },
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section id="skills" className="py-24 relative gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="skill-badge glass-card px-5 py-3 rounded-full flex items-center gap-2 cursor-default"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                ></span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
