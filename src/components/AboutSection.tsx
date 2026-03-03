import { Download, Award, GraduationCap, Brain, Users, Lightbulb, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

const skills = [
  { name: "Excel", level: 90 },
  { name: "Power BI", level: 90 },
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 84 },
  { name: "SQL", level: 80 },
  { name: "Tableau", level: 75 },
  { name: "R", level: 75 },
];

const softSkills = [
  { icon: Brain, label: "Analytical Thinking" },
  { icon: Users, label: "Teamwork" },
  { icon: Lightbulb, label: "Problem-Solving" },
  { icon: MessageCircle, label: "Communication Skills" },
  { icon: Sparkles, label: "Curiosity & Continuous Learning" },
  { icon: ShieldCheck, label: "Adaptability & Resilience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="section-container space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl text-gradient-green">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate data scientist turning raw data into actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-6 space-y-4 hover-glow">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-accent" size={24} />
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="text-foreground font-medium">
                  Bachelor of Science in Computer Science
                </p>
                <p>Specialized in Data Science</p>
                <p>Lyceum of the Philippines University – Batangas</p>
                <p>Graduated August 2026</p>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4 hover-glow">
              <div className="flex items-center gap-3">
                <Award className="text-primary" size={24} />
                <h3 className="text-lg font-semibold text-foreground">Awards</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Academic Excellence Award, 2023–2025</li>
                <li>Excel Associate Microsoft 365 Apps</li>
              </ul>
            </div>

            <div className="glass-card p-6 space-y-4 hover-glow">
              <h3 className="text-lg font-semibold text-foreground">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                  >
                    <s.icon size={14} className="text-accent" />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/Ashley_Golloso_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-glow-cyan transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
