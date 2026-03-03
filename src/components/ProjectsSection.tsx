import { useState } from "react";
import { ExternalLink, Github, BarChart3, Database, Bot, FileSpreadsheet, MessageSquare, Hand, Package } from "lucide-react";

const filters = ["All", "Python", "Power BI", "Machine Learning", "SQL", "R", "Web and AI Applications"];

const projects = [
  {
    id: 1,
    name: "Sales Dashboard Analytics",
    description:
      "Interactive Power BI dashboard analyzing 2 years of retail sales data with drill-down capabilities and DAX measures.",
    technologies: ["Power BI", "SQL"],
    icon: BarChart3,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
  {
    id: 2,
    name: "Customer Churn Prediction",
    description:
      "Machine learning model using Random Forest and XGBoost to predict customer churn with 92% accuracy.",
    technologies: ["Python", "Machine Learning", "SQL"],
    icon: Bot,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
  {
    id: 3,
    name: "COVID-19 Data Pipeline",
    description:
      "Automated ETL pipeline extracting, transforming, and loading daily COVID-19 data into a PostgreSQL database.",
    technologies: ["Python", "SQL", "R"],
    icon: Database,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
  {
    id: 4,
    name: "Financial Report Generator",
    description:
      "Automated reporting tool generating monthly financial summaries from CSV data with visual charts.",
    technologies: ["Python", "Power BI"],
    icon: FileSpreadsheet,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
  {
    id: 5,
    name: "Chatbot",
    description:
      "AI-powered chatbot using Python and NLP to answer user queries in real time, improving response efficiency and engagement.",
    technologies: ["Python", "Machine Learning", "Web and AI Applications"],
    icon: MessageSquare,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
  {
    id: 6,
    name: "Sign Language Learning Web-Based App",
    description:
      "Web application with real-time gesture recognition using Python, MediaPipe, and TensorFlow to teach American Sign Language interactively.",
    technologies: ["Python", "Machine Learning", "Web and AI Applications"],
    icon: Hand,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
  {
    id: 7,
    name: "Inventory Management System",
    description:
      "Full-stack web application using React, Node.js, and PostgreSQL to track inventory, manage stock levels, and generate automated reports.",
    technologies: ["SQL", "Web and AI Applications"],
    icon: Package,
    thumbnail: null,
    github: "https://github.com/heartiecodes",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(active));

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="section-container space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl text-gradient-pink">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of data science projects showcasing analytics, ML, and visualization.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden hover-glow group animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-40 bg-secondary flex items-center justify-center border-b border-border">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <project.icon
                    size={48}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                )}
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary border border-border px-3 py-0.5 text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-highlight hover:underline"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-highlight hover:underline"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
