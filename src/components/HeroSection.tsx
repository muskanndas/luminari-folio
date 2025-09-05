import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen hero-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full hero-glow"></div>
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-primary/10 rounded-full hero-glow"></div>

      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Content */}
          <div className="text-white animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-4 glass">
                🚀 Innovative Tech Solutions
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Building the
              <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {" "}Future{" "}
              </span>
              of Technology
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              We transform ideas into powerful digital solutions. From cutting-edge web development 
              to advanced AI systems, we deliver innovation that drives your business forward.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                className="btn-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToAbout}
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-white/30 text-white hover:bg-white/10 group"
              >
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-light">200+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-light">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-light">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Modern Tech Team"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;