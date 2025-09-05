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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our
            <span className="text-primary"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of technology services designed to help your 
            business innovate, scale, and succeed in today's digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="service-card border-0 h-full animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-dark-bg rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
              Our team of experts is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
              >
                Start Your Project
              </button>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
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