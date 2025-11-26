import { 
  Bot, 
  Linkedin, 
  Globe, 
  MessageSquare, 
  RefreshCw, 
  Phone, 
  TrendingUp, 
  Layers 
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Calling agents, research agents, response agents for automated workflows",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    description: "Automated outreach workflows with personalization at scale",
  },
  {
    icon: Globe,
    title: "SaaS MVPs",
    description: "Full SaaS products with AI backend and modern interfaces",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Support & sales chatbots that understand context and convert",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    description: "Business process automation with Zapier, Make.com, n8n",
  },
  {
    icon: Phone,
    title: "AI Voice Bots",
    description: "Voice agents with Vapi/Twilio for calls and interactions",
  },
  {
    icon: TrendingUp,
    title: "CRM Enrichment",
    description: "Lead qualification agents and data enrichment systems",
  },
  {
    icon: Layers,
    title: "No-Code Stacks",
    description: "Rapid prototypes and automation stacks without coding",
  },
];

const WhatIBuildSection = () => {
  return (
    <section id="services" className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-glow-gradient opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="text-primary">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in creating intelligent systems that automate and scale your business
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow-sm transition-all duration-500 group animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
