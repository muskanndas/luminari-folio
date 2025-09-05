import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A complete e-commerce solution with advanced analytics, inventory management, and seamless payment integration.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      featured: true
    },
    {
      title: "Healthcare Mobile App",
      description: "HIPAA-compliant mobile application for patient management, appointment scheduling, and telemedicine consultations.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "WebRTC", "HL7 FHIR"],
      category: "Mobile Development",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence dashboard with machine learning insights and predictive analytics capabilities.",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      category: "Data Science",
      featured: true
    },
    {
      title: "IoT Smart Office System",
      description: "Comprehensive IoT solution for smart office management including lighting, climate, and security automation.",
      image: "/placeholder.svg",
      technologies: ["IoT Sensors", "AWS IoT", "React", "Node.js"],
      category: "IoT & Automation",
      featured: false
    },
    {
      title: "Cloud Infrastructure Platform",
      description: "Scalable cloud platform with auto-scaling, monitoring, and deployment automation for enterprise applications.",
      image: "/placeholder.svg",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      category: "Cloud & DevOps",
      featured: false
    },
    {
      title: "Financial Trading App",
      description: "Real-time trading application with advanced charting, portfolio management, and risk assessment tools.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "WebSocket", "PostgreSQL", "Redis"],
      category: "Mobile Development",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering innovative solutions across various industries.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-hover glass border-0 overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/10"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                      <Github className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-hover glass border-0 overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-32 bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We'd love to help bring your vision to life. Let's discuss your project 
            and explore how we can create something amazing together.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
