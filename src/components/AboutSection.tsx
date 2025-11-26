import { Code2, Cpu, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-semibold">Vibhu</span> — an AI automation engineer and SaaS builder. My focus is creating systems that automate workflows, replace repetitive tasks, and build scalable AI-powered products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I use no-code, low-code, and Python to build fast, test ideas quickly, and turn concepts into working software.
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { icon: Code2, label: "Clean Code" },
                  { icon: Cpu, label: "AI First" },
                  { icon: Zap, label: "Fast Delivery" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="glass p-4 rounded-xl text-center hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="glass rounded-2xl p-8 glow-hover transition-all duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-muted-foreground">
                      <span className="text-primary">const</span> builder = {"{"}
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      name: <span className="text-green-400">"Vibhu"</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      role: <span className="text-green-400">"AI Automation Engineer"</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      passion: <span className="text-green-400">"Building SaaS Products"</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      tools: [<span className="text-purple-light">"AI"</span>, <span className="text-purple-light">"No-Code"</span>, <span className="text-purple-light">"Python"</span>]
                    </div>
                    <div className="text-muted-foreground">{"}"}</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-glow/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
