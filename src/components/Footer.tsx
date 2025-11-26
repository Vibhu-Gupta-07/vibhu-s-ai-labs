import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy-deep border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">
            Vibhu<span className="text-primary">.</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
          {[
              { icon: Github, href: "https://github.com/Vibhu-Gupta-07", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vibhu-gupta01", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/vibhugupta9125", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Vibhu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
