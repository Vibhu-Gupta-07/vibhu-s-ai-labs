import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bot, Linkedin, FileText, LayoutDashboard, Mail } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "AI Calling Agent SaaS",
    description: "Voice agent for outreach, booking, and lead qualification with natural conversations",
    tags: ["Vapi", "OpenAI", "Twilio"],
    status: "Live",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Automation SaaS",
    description: "Personalized outreach + auto reply + targeting for B2B lead generation",
    tags: ["Python", "AI", "Automation"],
    status: "Beta",
  },
  {
    icon: FileText,
    title: "Resume Match AI Tool",
    description: "Parses CVs, analyzes job fits, auto-improves resumes with AI suggestions",
    tags: ["GPT-4", "NLP", "Streamlit"],
    status: "Live",
  },
  {
    icon: LayoutDashboard,
    title: "Business Automation Hub",
    description: "Unified dashboard for workflow automations across multiple platforms",
    tags: ["n8n", "Airtable", "React"],
    status: "Development",
  },
  {
    icon: Mail,
    title: "Support Inbox Agent",
    description: "AI that answers emails and WhatsApp messages automatically with context",
    tags: ["LangChain", "RAG", "APIs"],
    status: "Live",
  },
];

const statusColors: Record<string, string> = {
  Live: "bg-green-500/20 text-green-400 border-green-500/30",
  Beta: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Development: "bg-primary/20 text-primary border-primary/30",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-glow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Current <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered products and automation systems I'm building
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow-sm transition-all duration-500 group animate-fade-in opacity-0 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary px-2 py-1 rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-full justify-between group/btn">
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
