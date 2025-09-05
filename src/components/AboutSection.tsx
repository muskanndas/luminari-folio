import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            About
            <span className="text-primary"> TechFlow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company committed to delivering 
            innovative solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* About Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => (
            <Card 
              key={card.title}
              className="card-hover glass border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-dark-bg rounded-2xl p-12 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-white/80">Team Members</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's work together to create something amazing
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;