"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, ExternalLink, Github, Mail, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "./components/contact-form"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [expandedProjects, setExpandedProjects] = useState<number[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleProjectDescription = (index: number) => {
    setExpandedProjects((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index)
      } else {
        return [...prev, index]
      }
    })
  }

  const isProjectExpanded = (index: number) => {
    return expandedProjects.includes(index)
  }

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Function to truncate text
  const truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  // Replace with your information
  const personalInfo = {
    name: "Maneesh Reddy Benjaram",
    title: "Full-Stack Software Developer",
    about:
      "Software Developer with 3+ years of experience building scalable, secure, and user-friendly web applications. Skilled in React.js, Node.js, Express.js, JavaScript, SQL, AWS, and CI/CD pipelines. Experienced in Agile/Scrum, full-stack development, and Pega (CSA & CSSA certified). Passionate about solving real-world problems with clean, efficient code and modern development practices.",
    email: "maneeshreddybenjaram@gmail.com",
    phone: "+1 (913) 388-2645",
    location: "Denton, TX",
    github: "https://github.com/maneeshreddyb",
    linkedin: "https://linkedin.com/in/maneeshbenjaram",
  }

  // Skills organized by category
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "TypeScript", icon: "ts" },
        { name: "JavaScript", icon: "js" },
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", icon: "database" },
        { name: "PostgreSQL", icon: "database" },
        { name: "MongoDB", icon: "database" },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: "Node.js", icon: "node" },
        { name: "Express.js", icon: "express" },
        { name: "Django", icon: "python" },
        { name: "React", icon: "react" },
      ],
    },
    {
      name: "Web",
      skills: [
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "API/REST APIs", icon: "api" },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Jira", icon: "jira" },
        { name: "Jenkins", icon: "jenkins" },
      ],
    },
    {
      name: "Cloud",
      skills: [{ name: "AWS", icon: "aws" }],
    },
  ]

  // Replace with your experience
  const experience = [
    {
      company: "Chase",
      position: "Software Developer",
      period: "July 2024 - Present",
      achievements: [
        "Developed high-performance web applications using React.js, Node.js, and Express.js, with optimized RESTful API integration and robust error handling.",
        "Improved software performance by implementing lazy loading, caching, and server-side rendering (SSR), reducing page load time by 30%.",
        "Enhanced UI/UX consistency using React Hooks and modular architecture, boosting reusability and responsiveness for high-traffic users.",
        "Optimized complex SQL queries in PostgreSQL and Firebase, significantly improving data retrieval speed and maintaining data integrity.",
        "Automated CI/CD pipelines with Jenkins and GitHub Actions, cutting manual deployment efforts by 40%, and deployed apps on AWS (EC2, S3) with monitoring via CloudWatch and Postman.",
        "Strengthened application security by implementing JWT authentication, RBAC, and adhering to OWASP standards, ensuring compliance and protection against vulnerabilities.",
      ],
    },
    {
      company: "Cognizant",
      position: "Software Engineer",
      period: "April 2020 - Dec 2022",
      achievements: [
        "Designed and developed scalable web applications using React.js, JavaScript, and AJAX, optimized performance, and enhanced user experience for 80% of active users daily.",
        "Optimized SQL queries and database schemas, enhancing data retrieval efficiency by 85%, and maintained smooth data processing with minimal latency. ",
        "Implemented RESTful APIs and microservices, also integrated third-party services to expand functionality, improved system interoperability, and streamlined data flow between applications. ",
        "Automated CI/CD pipelines using Jenkins and Docker, reduced deployment time, improved software release efficiency, and ensured continuous integration with minimal downtime. ",
      ],
    },
    {
      company: "Nenos",
      position: "Full-Stack Web Developer (Volunteer)",
      period: "February 2025 - Present",
      achievements: [
        "Integrated Git CMS with Netlify to streamline content management workflows and significantly improve publishing efficiency for the Bloom Social platform",
        "Developed a feature to allow users to upload and attach images, links, and tags to prose posts, ensuring scalability for future multi-image support.",
        "Designed and implemented the AdminLayout.tsx, creating a custom, responsive dashboard for authenticated admins and seamlessly integrating it into the Bloom Social admin panel. ",
        "Refined UI/UX by enhancing image display beneath posts and improving overall dashboard accessibility in line with Figma design guidelines. ",
        "Contributed to full-stack development using React.js and Node.js, optimizing platform performance and ensuring a seamless, intuitive user experience. ",
      ],
    },
  ]

  // Replace with your projects
  const projects = [
    {
      title: "Simon Game",
      description:
        "Built a fully interactive Simon Game using HTML, CSS, JavaScript, and jQuery, featuring dynamic button sequences and real-time user input. Developed a backend with Node.js and Express.js to handle routing and data management. Integrated a MySQL database to store user scores and update a real-time leaderboard. Designed a responsive, animated UI for seamless gameplay across desktop and mobile devices.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "Express.js"],
      image: "/images/projects/simon-game.jpg",
      github: "https://github.com/maneeshreddyb/Simon-Game-updated.git",
      demo: "https://maneeshreddyb.github.io/Simon-Game-updated/",
    },
    {
      title: "Drum Kit",
      description:
        "Built an interactive Drum Kit web application using HTML, CSS, and JavaScript, allowing users to play drum sounds via mouse clicks or keyboard inputs. Integrated JavaScript's Audio API for real-time sound playback and used event listeners to enhance user interactivity. Implemented smooth CSS animations for visual feedback, delivering an engaging and responsive UI/UX. Optimized the codebase with clean JavaScript functions and ES6 features for better maintainability and scalability.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "Audio API"],
      image: "/images/projects/drum-kit.jpg",
      github: "https://github.com/maneeshreddyb/Drum-Kit.git",
      demo: "https://maneeshreddyb.github.io/Drum-Kit/",
    },
  ]

  // Replace with your education
  const education = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and Software Engineering",
    },
    {
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      period: "2010 - 2014",
      description: "Graduated with honors, Minor in Mathematics",
    },
  ]

  // Function to get the appropriate icon for each skill
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "ts":
        return <span className="text-blue-500 font-bold">TS</span>
      case "java":
        return <span className="text-orange-500">☕</span>
      case "python":
        return <span className="text-blue-600">🐍</span>
      case "js":
        return <span className="text-yellow-500 font-bold">JS</span>
      case "database":
        return <span className="text-blue-500">🗄️</span>
      case "code":
        return <span className="text-gray-700 dark:text-gray-300">&lt;/&gt;</span>
      case "hash":
        return <span className="text-purple-500">#</span>
      case "node":
        return <span className="text-green-600">⬢</span>
      case "express":
        return <span className="text-green-500"></span>
      case "react":
        return <span className="text-blue-400">⚛️</span>
      case "angular":
        return <span className="text-red-500">A</span>
      case "html":
        return <span className="text-orange-600">H5</span>
      case "css":
        return <span className="text-blue-500">C3</span>
      case "bootstrap":
        return <span className="text-purple-600">B</span>
      case "api":
        return <span className="text-gray-700 dark:text-gray-300">API</span>
      case "git":
        return <span className="text-orange-600">G</span>
      case "github":
        return <Github className="h-4 w-4" />
      case "docker":
        return <span className="text-blue-500">🐳</span>
      case "kubernetes":
        return <span className="text-blue-600">☸️</span>
      case "jira":
        return <span className="text-blue-500">J</span>
      case "jenkins":
        return <span className="text-red-500">J</span>
      case "aws":
        return <span className="text-orange-400">AWS</span>
      default:
        return <span>•</span>
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f8fdff] dark:bg-gray-900 transition-colors duration-300">
        {/* Header/Navigation */}
        <header className="fixed w-full bg-[#006699] dark:bg-[#004466] text-white z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">{personalInfo.name.split(" ")[0]}</h1>
            <nav className="hidden md:flex space-x-6">
              {["Home", "About", "Work", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-[#7dd3fc] transition-colors ${
                    activeSection === item.toLowerCase() ? "font-semibold" : ""
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </nav>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors mr-4"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-[#e6f7ff] to-[#f8fdff] dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gray-700 dark:text-gray-300">Hi, I&apos;m </span>
                <span className="text-[#4db8ff] dark:text-[#7dd3fc]">{personalInfo.name}</span>
              </h2>
              <div className="mb-8">
                <div className="typewriter-container relative h-12 mb-2">
                  <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#006699] via-[#4db8ff] to-[#006699] dark:from-[#4db8ff] dark:via-[#7dd3fc] dark:to-[#4db8ff] inline-block text-transparent bg-clip-text animate-gradient">
                    <span className="typewriter">{personalInfo.title}</span>
                    <span className="cursor">|</span>
                  </p>
                </div>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 italic">
                  Designing scalable and User-interactive Software solutions
                </p>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                {/* LinkedIn Logo */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#0077b5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>

                {/* GitHub Logo */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-7 w-7 text-[#333] dark:text-white" />
                </a>

                {/* Email Button - Changed to copy to clipboard */}
                <button
                  onClick={copyEmailToClipboard}
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 relative"
                  aria-label="Copy Email Address"
                >
                  {copied ? (
                    <Check className="h-7 w-7 text-green-500" />
                  ) : (
                    <Mail className="h-7 w-7 text-[#006699] dark:text-[#4db8ff]" />
                  )}

                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {copied ? "Copied!" : "Copy Email"}
                  </span>
                </button>
              </div>
              {copied && (
                <div className="mt-4 text-sm text-green-600 dark:text-green-400 animate-fade-in-out">
                  Email copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-[#e6f7ff] flex-shrink-0 border-4 border-[#4db8ff]">
                  <img
                    src="/images/profile/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify">{personalInfo.about}</p>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex items-center mr-4 mb-2 md:mb-0 justify-start w-full md:w-auto">
                        <span className="font-semibold inline-flex w-20">Email:</span>
                        <button
                          onClick={copyEmailToClipboard}
                          className="text-[#006699] dark:text-[#4db8ff] flex items-center hover:underline group relative text-justify"
                        >
                          {personalInfo.email}
                          {copied ? (
                            <Check className="ml-2 h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="ml-2 h-3 w-3" />
                          )}

                          {/* Tooltip */}
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {copied ? "Copied!" : "Copy Email"}
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center mb-2 md:mb-0 justify-start w-full md:w-auto">
                        <span className="font-semibold inline-flex w-20">Phone:</span>
                        <span className="text-justify">{personalInfo.phone}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex items-center mr-4 mb-2 md:mb-0 justify-start w-full md:w-auto">
                        <span className="font-semibold inline-flex w-20">Location:</span>
                        <span className="text-justify">{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center mb-2 md:mb-0 justify-start w-full md:w-auto">
                        <span className="font-semibold inline-flex w-20">Available:</span>
                        <span className="text-justify">Full-time and Contract</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#006699] text-[#006699] hover:bg-[#e6f7ff] dark:border-[#4db8ff] dark:text-[#4db8ff] dark:hover:bg-gray-700"
                    >
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#006699] text-[#006699] hover:bg-[#e6f7ff] dark:border-[#4db8ff] dark:text-[#4db8ff] dark:hover:bg-gray-700"
                    >
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="py-20 bg-[#f8fdff] dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Work Experience</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-[#006699] dark:border-[#4db8ff]"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.position}</h3>
                      <span className="text-sm text-[#006699] dark:text-[#4db8ff] font-medium">{job.period}</span>
                    </div>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{job.company}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{job.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-justify">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-10">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category.name}</h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-[#e6f7ff] dark:bg-gray-700 rounded-full py-2 px-4 flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:bg-[#d1eeff] dark:hover:bg-gray-600"
                        >
                          <span className="flex items-center justify-center w-5 h-5">{getSkillIcon(skill.icon)}</span>
                          <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-[#f8fdff] dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                >
                  <div className="h-48 overflow-hidden relative bg-gray-100 dark:bg-gray-700">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105"
                      style={{
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-[#e6f7ff] text-[#006699] dark:bg-gray-700 dark:text-[#4db8ff]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-[#006699] text-[#006699] hover:bg-[#e6f7ff] dark:border-[#4db8ff] dark:text-[#4db8ff] dark:hover:bg-gray-700"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4  w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-[#006699] hover:bg-[#005588] dark:bg-[#4db8ff] dark:text-gray-900 dark:hover:bg-[#7dd3fc]"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Me</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#f8fdff] dark:bg-gray-700 rounded-lg shadow-md p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#006699] dark:bg-[#004466] text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7dd3fc] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7dd3fc] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
