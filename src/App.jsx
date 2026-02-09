import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ChevronRight, ChevronDown, ChevronUp, ExternalLink, Code2, Terminal, Cpu, Database, Download } from "lucide-react";

// --- Data ---
const PORTFOLIO_DATA = {
  hero: {
    name: "Pranjali Murdeshwar",
    title: "Software Engineer II",
    tagline: "Building scalable distributed systems, data engineering pipelines & agentic AI.",
    socials: [
      { name: "GitHub", url: "https://github.com/murdpra", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/pranjali-ravindra/", icon: Linkedin },
      { name: "Email", url: "mailto:murdpra93@gmail.com", icon: Mail },
    ],
  },
  about: {
    bio: [
      "I am a passionate Software Engineer with a strong focus on building resilient, high-scale distributed systems and data engineering pipelines. Most recently, I worked as a Software Engineer II at Walmart Global Tech, where I designed and architected enterprise-grade solutions using Java, Spring Boot, Apache Spark, and Kafka.",
      "I hold a Master’s degree in Computer Information Systems from Colorado State University, which strengthened my understanding of data systems, scalable architectures, and enterprise software development. Alongside my engineering work, I am a data enthusiast who enjoys uncovering insights, working with large-scale datasets, and building data-driven solutions.",
      "I am particularly interested in pushing the boundaries of Agentic AI, actively exploring and leveraging frameworks such as CrewAI and LangChain. Beyond technology, I am an extrovert who thrives on social interaction and exchanging new ideas. Outside of work, you’ll often find me singing, experimenting in the kitchen, or hiking nature trails."
    ],
    skills: [
      "Java", "Python", "C++", "Spring Boot", "Apache Spark", "Kafka", "React", "AWS", "Docker", "Kubernetes", "System Design", "Agentic AI", "LangChain"
    ]
  },
  experience: [
    {
      company: "Walmart",
      role: "Software Engineer II",
      period: "Aug 2022 — Aug 2025",
      location: "Sunnyvale, CA",
      description: "Synthesized seller notification system with Apache Spark, increasing seller interaction by 31%. Automated weekly performance analytics with Kafka. Refactored legacy services to Java 17/Spring Boot, reducing tech debt by 40%.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
      details: [
        "Synthesized seller notification system with Apache Spark, increasing the seller interaction by 31% through automated performance emails.",
        "Automated weekly performance analytics, activating 1,565 new seller engagements by designing Apache Kafka-driven pipelines and REST API endpoints.",
        "Designed API component for seller appeals platform, reducing manual interventions by 50 minutes per case.",
        "Conducted requirements analysis, API design, and solution architecture reviews, ensuring scalability.",
        "Externalized seller performance APIs, enabling 77% of sellers to access critical business metrics.",
        "Developed and implemented a Seller Dashboard with 8 real-time performance KPIs, utilizing React, HTML, and CSS for the frontend and Spring Boot for the backend.",
        "Refactored legacy services to Java 17/J2EE and Spring Boot, modularizing microservices, adding Apache Spark–based data pipelines, documenting APIs with Swagger/OpenAPI, reduced tech debt by 40%.",
        "Simplified market-specific build system into a unified CI/CD Jenkins pipeline, reducing build time by 35%."
      ]
    },
    {
      company: "Medifast Inc",
      role: "Java/J2EE Developer",
      period: "Jan 2022 — Aug 2022",
      location: "Lehi, UT",
      description: "Contributed to custom Hybris solutions. Constructed Grafana/Splunk dashboards for zero downtime monitoring. Authored 90+ unit tests increasing coverage by 45%.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Medifast_logo.png",
      details: [
        "Contributed to developing custom Hybris solutions with Spring, optimizing system scalability by 30%.",
        "Constructed Grafana and Splunk dashboard for tracking system health metrics with zero downtime.",
        "Authored 90+ unit tests with JUnit/Mockito, increasing backend reliability and code quality by 45%."
      ]
    },
    {
      company: "Tata Consultancy Services Pvt. Ltd",
      role: "Systems Engineer",
      period: "Jan 2017 – Dec 2019",
      location: "Bengaluru, India",
      description: "Specialized in Identity and Access Management (IAM) systems and enterprise application development, significantly improving operational efficiency and data integrity.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
      details: [
        "Orchestrated end-to-end SDLC for IAM, elevating operational workflow by 70% through script provisioning.",
        "Developed VB.NET, C++ and MySQL solutions, ensuring database integrity across enterprise applications."
      ]
    }
  ],
  projects: [
    {
      title: "Resume Genie AI",
      description: "Agentic AI-powered resume optimization leveraging Python, CrewAI, and OpenAI to generate ATS-compliant content.",
      tags: ["Python", "CrewAI", "OpenAI", "Docker"],
      link: "https://github.com/murdpra/resume_genie_ai",
      icon: Cpu
    },
    {
      title: "Alpha Synth",
      description: "High-performance RAG pipeline for automating financial analysis, reducing report generation from hours to seconds.",
      tags: ["LangChain", "LLMs", "FAISS", "RAG"],
      link: "https://github.com/murdpra/AlphaSynth",
      icon: Database
    },
    {
      title: "Clothing Ecommerce",
      description: "Full-stack scalable ecommerce platform built with modern web technologies.",
      tags: ["React", "Node.js", "Redux"],
      link: "https://github.com/murdpra/Clothing-Ecommerce-Website",
      icon: Code2
    }
  ]
};

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight text-text">PM</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-secondary hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-text">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Animation Components ---

const ProfileGlow = () => (
  <div className="relative group">
    <motion.div
      animate={{ 
        rotate: 360,
        opacity: [0, 0.8, 0]
      }}
      transition={{ 
        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent via-purple-500 to-accent rounded-full blur-xl scale-110"
    />
    <img 
      src={import.meta.env.BASE_URL + "ProfilePhoto.JPG"} 
      alt="Pranjali Murdeshwar" 
      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 relative z-10"
    />
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Profile Photo Container */}
        <div className="relative flex justify-center md:justify-start mb-12"> 
          <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="relative z-20"
          >
            <ProfileGlow />
          </motion.div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text mb-4"
        >
          {PORTFOLIO_DATA.hero.name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl font-medium text-accent mb-6"
        >
          {PORTFOLIO_DATA.hero.title}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed mb-12"
        >
          {PORTFOLIO_DATA.hero.tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center gap-6"
        >


          <div className="flex space-x-6">
            {PORTFOLIO_DATA.hero.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-transform hover:scale-110"
                title={social.name}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-12">{children}</h2>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="glass p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800">
          <div className="space-y-6 mb-8">
            {PORTFOLIO_DATA.about.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {PORTFOLIO_DATA.about.skills.map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm font-medium text-text bg-gray-100 dark:bg-gray-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-3xl hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-800">
      <div 
        className="p-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text">{job.role}</h3>
            <p className="text-accent font-medium text-lg">{job.company}</p>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span className="text-sm font-medium text-secondary bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
              {job.period}
            </span>
            <div className="text-secondary">
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-secondary mb-4">
          <span className="mr-2">📍</span> {job.location}
        </div>

        <p className="text-secondary leading-relaxed line-clamp-2 md:line-clamp-none">
          {job.description}
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-6 space-y-3 border-t border-gray-200 dark:border-gray-700 pt-6">
                {job.details.map((point, i) => (
                  <li key={i} className="text-secondary leading-relaxed list-disc list-outside ml-5">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-8 relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 pb-4">
          {PORTFOLIO_DATA.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-black" />
              <ExperienceCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Selected Work</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group block"
            >
              <div className="glass p-8 rounded-3xl h-full flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl border border-gray-200 dark:border-gray-800">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-accent">
                      <project.icon size={32} />
                    </div>
                    <ExternalLink className="text-secondary group-hover:text-accent transition-colors" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3">{project.title}</h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold tracking-wide text-secondary bg-gray-100 dark:bg-gray-800 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="py-24 px-6 bg-white dark:bg-black text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-text mb-8">Ready to engineer the future?</h2>
      <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
        Currently open to new opportunities in Software Engineering, Data Engineering or AI. Let's build something extraordinary.
      </p>
      <a 
        href="mailto:murdpra93@gmail.com"
        className="inline-flex items-center px-10 py-5 bg-text text-background rounded-full font-semibold text-lg hover:bg-accent hover:scale-105 transition-all duration-300"
      >
        Let's Talk <ChevronRight className="ml-2" size={20} />
      </a>
      <div className="mt-24 text-sm text-secondary">
        <p>&copy; {new Date().getFullYear()} Pranjali Murdeshwar. All rights reserved.</p>
        <p className="mt-2 opacity-60">AI-powered design. Human-approved debugging.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-background min-h-screen text-text selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
