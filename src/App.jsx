import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const links = {
    github: "https://github.com/mohamad-haidar-21",
    linkedin:
      "https://www.linkedin.com/in/mohamad-al-jawad-haidar-a34b2a231/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BauMTUEjFSueXA5F180ikvQ%3D%3D",
    email: "mohamad.haidar1012@email.com",
    whatsapp: "https://wa.me/96181763389",
  };

  const skills = [
    "Flutter",
    "Dart",
    "Android Development",
    "Java",
    "Kotlin",
    "SpringBoot",
    "Laravel",
    "REST APIs",
    "MySQL",
    "SQLite",
    "State Management",
    "Git & GitHub",
    "postman",
    "Clean Code & Architecture",
  ];
  const experiences = [
    {
      role: "Backend Developer Internship",
      company: " LeadByTech",
      period: "Nov 2025 — Jan 2026",
      location: "Lebanon (Hybrid)",
      points: [
        "Designed and developed RESTful APIs following clean architecture and best practices.",
        "Implemented authentication, authorization, and role-based access control for secure applications.",
        "Integrated backend services with mobile and web clients, ensuring reliable data flow and error handling.",
        "Optimized database queries and API performance to improve response times and scalability.",
      ],
      stack: ["php", "Laravel", "REST APIs", "Git", "MySQL"],
    },
    {
      role: "Flutter Developer Internship",
      company: " LeadByTech",
      period: "July 2025 — Oct 2025",
      location: "Lebanon (Hybrid)",
      points: [
        "Built cross-platform mobile apps with clean architecture and reusable components.",
        "Integrated REST APIs, authentication flows, and real-time features when needed.",
        "Improved performance and UX with smooth state management and optimized UI rendering.",
      ],
      stack: ["Flutter", "Dart", "REST APIs", "Git"],
    },
  ];

  const projects = [
    {
      title: "Support & Ticket System",
      desc: "Developed a customer support platform with ticketing system and real-time chat for businesses to manage customer inquiries efficiently.",
      tech: "Flutter · Laravel · MySql · REST API",
      highlights: [
        "Real-time chat with Support Team",
        "Ticket prioritization and assignment system",
        "Reduced average response time by implementing automated routing",
      ],
      github: "https://github.com/mohamad-haidar-21/support_system-app.git",
      image: "./project-support.png",
    },
    {
      title: "Event Management App",
      desc: "Built a comprehensive mobile app for event organizers to manage bookings, attendees, and schedules with real-time updates.",
      tech: "Flutter · Laravel · MySql · REST API",
      highlights: [
        "Seamless event booking flow with 95% completion rate",
        "Real-time attendee tracking",
        "Admin dashboard for event management and analytics",
      ],
      github: "https://github.com/mohamad-haidar-21/event_hub.git",
      image: "./event_app.jpg",
    },
    {
      title: "OneHand",
      desc: "OneHand is a comprehensive crowdfunding platform designed to democratize fundraising for creative projects, startups, and social causes. ",
      tech: "React · SpringBoot · MySql · REST API",
      highlights: [
        "Built a remote support system enabling users to report issues and receive real-time assistance from support agents.",
        "Designed a scalable backend architecture supporting secure communication, session handling, and issue tracking.",
        "Focused on performance, reliability, and clean API design to ensure a smooth and responsive support experience.",
      ],
      github: "https://github.com/BayoumiBytes/OneHand.git",
      image: "./onehand.jpg",
    },
  ];

  // ✅ Clean stagger setup
  const stagger = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: prefersReducedMotion ? {} : { staggerChildren: 0.08 },
      },
    }),
    [prefersReducedMotion],
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: prefersReducedMotion
          ? {}
          : { duration: 0.55, ease: "easeOut" },
      },
    }),
    [prefersReducedMotion],
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-100"
      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
    >
      {/* Top progress bar */}
      <ScrollProgressBar />
      {/* Sophisticated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Parallax orbs */}
        <ParallaxOrbs prefersReducedMotion={prefersReducedMotion} />
      </div>
      {/* Cursor spotlight */}
      {!prefersReducedMotion && <CursorGlow />}
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-slate-900/60 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="font-semibold text-lg text-white tracking-tight">
              Mohamad Haidar
            </span>
          </motion.div>

          <div className="flex gap-8 items-center">
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden md:block"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden md:block"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden md:block"
            >
              Projects
            </a>

            <Magnetic>
              <motion.a
                href="#contact"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="text-sm font-medium px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-900/50 hover:shadow-blue-900/70 transition-all"
              >
                Get in Touch
              </motion.a>
            </Magnetic>
          </div>
        </nav>
      </header>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-36 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion ? {} : { duration: 0.8, ease: "easeOut" }
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion ? {} : { duration: 0.6, delay: 0.2 }
              }
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Available for new projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="block text-white">Software</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light mb-4 max-w-2xl leading-relaxed">
              Mobile Applications Specialist
            </p>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
              I develop fast and reliable mobile applications that solve actual
              business problems. More specifically, my specializations lie in
              Native/ Cross-platform development and Web Development with
              extreme care for clean architecture and seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Magnetic>
                <motion.a
                  href="#projects"
                  whileHover={
                    prefersReducedMotion ? {} : { scale: 1.02, y: -2 }
                  }
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/60 transition-all flex items-center gap-2"
                >
                  View Projects
                  {!prefersReducedMotion && (
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  )}
                </motion.a>
              </Magnetic>

              <motion.a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                LinkedIn
              </motion.a>

              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              prefersReducedMotion ? {} : { duration: 0.8, delay: 0.3 }
            }
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-30" />

              {/* Image container */}
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={prefersReducedMotion ? {} : { duration: 0.25 }}
                className="relative w-full h-full rounded-full overflow-hidden
                 border border-white/10
                 bg-gradient-to-br from-slate-800 to-slate-900 p-2"
              >
                <img
                  src="./IMG-20251025-WA0042.jpg"
                  alt="Mohamad Haidar"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Decorative orbs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={item}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                About Me
              </motion.h2>

              <motion.div
                variants={item}
                className="space-y-4 text-slate-300 text-lg leading-relaxed"
              >
                <p>
                  I am a mobile developer passionate about crafting applications
                  that inspire and make a difference. Proficient in Flutter and
                  Android development, I have been focusing on scalable,
                  maintainable applications with clean code and intuitive
                  interfaces.
                </p>
                <p>
                  I basically thrive on solving complex problems and turning
                  ideas into functional, user-friendly mobile experiences. My
                  approach marries technical excellence with a deep
                  understanding of user needs.
                </p>
                <motion.div
                  variants={item}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Magnetic>
                    <motion.a
                      href="/MohamadHaidar-CV.pdf"
                      download
                      whileHover={
                        prefersReducedMotion ? {} : { scale: 1.03, y: -2 }
                      }
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl
                 bg-gradient-to-r from-blue-600 to-indigo-600
                 text-white font-medium shadow-lg shadow-blue-900/50
                 hover:shadow-xl hover:shadow-blue-900/60 transition-all"
                    >
                      {/* Icon */}
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                        />
                      </svg>
                      Download CV
                    </motion.a>
                  </Magnetic>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                variants={item}
                className="text-2xl font-semibold mb-6 text-white"
              >
                Tech Skills
              </motion.h3>

              <motion.div variants={item} className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={
                      prefersReducedMotion
                        ? {}
                        : { duration: 0.3, delay: index * 0.03 }
                    }
                    whileHover={
                      prefersReducedMotion ? {} : { y: -2, scale: 1.05 }
                    }
                    className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-blue-500/30 backdrop-blur transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div variants={item} className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  What I Offer
                </h3>
                <ul className="space-y-4">
                  {[
                    "Native and Cross-platform mobile app development",
                    "API integration and backend connectivity",
                    "App maintenance and feature updates",
                    "Performance optimization and bug fixes",
                  ].map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={
                        prefersReducedMotion ? {} : { delay: i * 0.1 }
                      }
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-lg">{t}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Experience
            </motion.h2>
            <motion.p
              variants={item}
              className="text-lg text-slate-400 max-w-2xl"
            >
              A quick timeline of what I’ve worked on and the value I bring to
              teams and clients.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.role}-${idx}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                {/* Shine */}
                <ShineOverlay />

                <div className="p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-slate-400 mt-1">
                        {exp.company} •{" "}
                        <span className="text-slate-500">{exp.location}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.points.map((p, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.06 * i }}
                        className="text-slate-300 text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        <span>{p}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stack pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-blue-500/30 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={item}
              className="text-lg text-slate-400 max-w-2xl"
            >
              A selection of Some Mobile Applications and WebSites I've built,
              showcasing different aspects of my development expertise.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}{" "}
      <section id="contact" className="py-32 relative overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>{" "}
        <div className="max-w-4xl mx-auto px-6 relative">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {" "}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {" "}
              Let's Work Together{" "}
            </h2>{" "}
            <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              {" "}
              Have a project in mind or looking for a mobile developer? I'm
              available for freelance projects and full-time opportunities.
              Let's discuss how I can help bring your ideas to life.{" "}
            </p>{" "}
            <div className="flex flex-wrap gap-4 justify-center">
              {" "}
              <motion.a
                href={`mailto:${links.email}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/60 transition-all"
              >
                {" "}
                Email Me{" "}
              </motion.a>{" "}
              <motion.a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {" "}
                WhatsApp{" "}
              </motion.a>{" "}
              <motion.a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {" "}
                LinkedIn{" "}
              </motion.a>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>
      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Mohamad Haidar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${links.email}`}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------- Effects ----------------- */

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[999] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
    />
  );
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.12), transparent 45%)`,
      }}
    />
  );
}

function ParallaxOrbs({ prefersReducedMotion }) {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y1 }}
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }
        }
        transition={
          prefersReducedMotion
            ? {}
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y2 }}
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.18, 1], opacity: [0.1, 0.2, 0.1] }
        }
        transition={
          prefersReducedMotion
            ? {}
            : { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y3 }}
        animate={
          prefersReducedMotion
            ? {}
            : { x: [0, 50, 0], y: [0, -30, 0], opacity: [0.08, 0.15, 0.08] }
        }
        transition={
          prefersReducedMotion
            ? {}
            : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
      />
    </>
  );
}

function Magnetic({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ----------------- Project Card ----------------- */

function ShineOverlay() {
  return (
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="absolute -inset-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-[-60%] group-hover:translate-x-[60%] transition-transform duration-700" />
    </span>
  );
}

function ProjectCard({
  title,
  desc,
  tech,
  highlights,
  github,
  demo,
  image,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
    >
      <ShineOverlay />

      <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-900/50"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="p-7">
        <h3 className="font-bold text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>

        {highlights?.length > 0 && (
          <ul className="mb-5 space-y-2.5">
            {highlights.map((h, i) => (
              <motion.li
                key={`${title}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="text-sm text-slate-300 flex items-start gap-2.5"
              >
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="mb-5 pb-5 border-b border-white/5">
          <p className="text-xs text-slate-500 font-medium">{tech}</p>
        </div>

        <div className="flex gap-4">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              View Code
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          )}
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
            >
              Live Demo
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
