import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Coming Soon",
    role: "Client Testimonials",
    content: "Testimonials from satisfied clients will appear here. Each review will showcase the impact of AI automation solutions.",
    rating: 5,
  },
  {
    name: "Coming Soon",
    role: "Partner Reviews",
    content: "Reviews from business partners and collaborators highlighting successful project deliveries and outcomes.",
    rating: 5,
  },
  {
    name: "Coming Soon",
    role: "Project Feedback",
    content: "Detailed feedback from completed projects demonstrating the value and ROI of automation implementations.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-glow-gradient opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working together
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
