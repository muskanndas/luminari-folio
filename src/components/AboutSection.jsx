import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const aboutCards = [
    {
      icon: Users,
      title: "Who We Are",
      description: "A passionate team of developers, designers, and innovators dedicated to creating cutting-edge digital solutions that transform businesses and drive growth."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that enhance efficiency, drive growth, and create meaningful connections with their customers."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading technology partner for businesses worldwide, known for delivering exceptional results and pioneering the future of digital innovation."
    },
    {
      icon: Award,
      title: "Core Values",
      description: "Excellence, Innovation, Integrity, and Customer Success drive everything we do. We believe in building long-term partnerships based on trust and results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Mouse Follow Elements */}
      <div 
        className="absolute w-32 h-32 bg-primary/5 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x * 0.05,
          top: mousePosition.y * 0.05,
          transition: 'all 0.1s ease',
        }}
      />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 hover:text-primary transition-colors duration-500">
            About
            <span className="text-primary animate-pulse"> TechFlow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company committed to delivering 
            innovative solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* About Cards Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => (
            <Card 
              key={card.title}
              className="card-hover glass border-0 animate-fade-in interactive-card group cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `translate(${mousePosition.x * 0.002 * (index + 1)}px, ${mousePosition.y * 0.002 * (index + 1)}px)`,
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <card.icon className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats with Float Animation */}
        <div className="mt-20 bg-dark-bg rounded-2xl p-12 animate-fade-in hover:scale-105 transition-transform duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 animate-pulse">5+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>200+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 animate-pulse" style={{ animationDelay: '0.4s' }}>50+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 animate-pulse" style={{ animationDelay: '0.6s' }}>15+</div>
              <div className="text-white/80">Team Members</div>
            </div>
          </div>
        </div>

        {/* Call to Action with Magnetic Effect */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's work together to create something amazing
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold interactive-card hover:scale-110 transition-transform duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;