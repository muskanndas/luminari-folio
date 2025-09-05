import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  BarChart3, 
  Palette 
} from "lucide-react";

const ServicesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications with intuitive user experiences and robust functionality.",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: ["React & Next.js", "Node.js Backend", "E-commerce", "CMS Solutions"]
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Transform your data into actionable insights with advanced analytics and machine learning solutions.",
      features: ["Machine Learning", "Data Analytics", "AI Solutions", "Predictive Modeling"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines for optimal performance and reliability.",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      icon: Cpu,
      title: "IoT & Automation",
      description: "Smart device integration and process automation to enhance efficiency and create innovative solutions.",
      features: ["IoT Platforms", "Smart Sensors", "Home Automation", "Industrial IoT"]
    },
    {
      icon: Layers,
      title: "System Design",
      description: "Architecting scalable, maintainable systems that grow with your business needs and requirements.",
      features: ["Microservices", "API Design", "Database Architecture", "Performance Optimization"]
    },
    {
      icon: BarChart3,
      title: "Big Data",
      description: "Process and analyze large datasets to uncover patterns, trends, and business intelligence insights.",
      features: ["Data Warehousing", "ETL Processes", "Real-time Analytics", "Business Intelligence"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create engaging user interfaces and experiences that delight users and drive business success.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div 
        className="absolute w-64 h-64 bg-primary/5 rounded-full pointer-events-none blur-3xl"
        style={{
          left: mousePosition.x * 0.02,
          top: mousePosition.y * 0.02,
          transition: 'all 0.3s ease',
        }}
      />
      <div 
        className="absolute w-32 h-32 bg-primary/10 rounded-full pointer-events-none blur-2xl"
        style={{
          right: mousePosition.x * -0.01,
          bottom: mousePosition.y * -0.01,
          transition: 'all 0.2s ease',
        }}
      />
      
      <div className="container mx-auto px-6">
        {/* Header with Enhanced Animation */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
            Our
            <span className="text-primary animate-pulse"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-300">
            We offer a comprehensive suite of technology services designed to help your 
            business innovate, scale, and succeed in today's digital landscape.
          </p>
        </div>

        {/* Services Grid with Mouse Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="service-card border-0 h-full animate-fade-in group cursor-pointer interactive-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translate(${mousePosition.x * 0.003 * (index % 2 === 0 ? 1 : -1)}px, ${mousePosition.y * 0.003 * (index % 3)}px) rotateY(${mousePosition.x * 0.01}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <CardContent className="p-6 h-full flex flex-col relative">
                {/* Icon with Enhanced Animation */}
                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                </div>

                {/* Title with Gradient Effect on Hover */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features with Staggered Animation */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{
                        transitionDelay: `${featureIndex * 0.1}s`
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action with 3D Effect */}
        <div className="text-center mt-16 animate-fade-in">
          <div 
            className="bg-dark-bg rounded-2xl p-12 interactive-card hover:scale-105 transition-all duration-500"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-4 hover:text-primary transition-colors duration-300">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
              Our team of experts is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-110 transition-transform duration-300 interactive-card"
              >
                Start Your Project
              </button>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;