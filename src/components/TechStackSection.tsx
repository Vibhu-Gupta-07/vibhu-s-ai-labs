const techStack = [
  { name: "OpenAI / GPT", category: "AI" },
  { name: "Vapi", category: "Voice" },
  { name: "Zapier", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "Bubble", category: "No-Code" },
  { name: "Webflow", category: "No-Code" },
  { name: "Python", category: "Code" },
  { name: "Streamlit", category: "Code" },
  { name: "Airtable", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "LangChain", category: "AI" },
];

const TechStackSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground">Tools and technologies I work with daily</p>
        </div>

        {/* Tech logos - scrolling marquee effect */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="glass px-6 py-3 rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">{tech.name}</span>
                  <span className="text-xs text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
