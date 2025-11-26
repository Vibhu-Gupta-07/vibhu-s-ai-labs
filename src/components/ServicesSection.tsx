import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Automation Setup",
    description: "End-to-end automation of your business workflows",
    features: [
      "Workflow analysis & design",
      "Tool integration",
      "Testing & deployment",
      "Documentation",
    ],
    price: "Custom",
    popular: false,
  },
  {
    title: "SaaS MVP Development",
    description: "Full product development from idea to launch",
    features: [
      "Product strategy",
      "UI/UX design",
      "Full-stack development",
      "AI integration",
      "Launch support",
    ],
    price: "Custom",
    popular: true,
  },
  {
    title: "AI Agent Development",
    description: "Custom AI agents for your specific use case",
    features: [
      "Requirements gathering",
      "Agent architecture",
      "Training & fine-tuning",
      "Integration",
    ],
    price: "Custom",
    popular: false,
  },
  {
    title: "Consulting",
    description: "Strategic guidance on AI & automation",
    features: [
      "Technology assessment",
      "Roadmap planning",
      "Best practices",
      "Team training",
    ],
    price: "Hourly",
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services to help you build and automate
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass rounded-2xl p-6 transition-all duration-500 animate-fade-in opacity-0 flex flex-col relative ${
                service.popular ? "border-primary/50 shadow-glow-sm" : "hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              
              <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={service.popular ? "hero" : "outline"} 
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Book a Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
