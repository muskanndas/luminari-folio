import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github } from "lucide-react";

const TeamSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      bio: "Visionary leader with 10+ years in tech innovation. Former senior engineer at Google, passionate about building transformative digital solutions.",
      skills: ["Strategic Leadership", "Product Vision", "Tech Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      featured: true
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Technical architect specializing in scalable systems and AI. PhD in Computer Science, former Principal Engineer at Amazon.",
      skills: ["System Architecture", "AI/ML", "Cloud Computing"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      featured: true
    },
    {
      name: "Emily Rodriguez",
      role: "Lead UX Designer",
      image: "/placeholder.svg",
      bio: "Award-winning designer focused on creating intuitive user experiences. 8+ years at top design agencies and Fortune 500 companies.",
      skills: ["UX Strategy", "Design Systems", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      featured: false
    },
    {
      name: "David Kumar",
      role: "Senior Full-Stack Developer",
      image: "/placeholder.svg",
      bio: "Full-stack expert with deep knowledge in modern web technologies. Open source contributor and tech community leader.",
      skills: ["React", "Node.js", "DevOps"],
      social: {
        linkedin: "#",
        github: "#"
      },
      featured: false
    },
    {
      name: "Lisa Thompson",
      role: "Data Science Lead",
      image: "/placeholder.svg",
      bio: "ML engineer and data scientist with expertise in building intelligent systems. Former researcher at MIT AI Lab.",
      skills: ["Machine Learning", "Deep Learning", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      featured: false
    },
    {
      name: "Alex Martinez",
      role: "Mobile Development Lead",
      image: "/placeholder.svg",
      bio: "Mobile app specialist with 6+ years creating cross-platform solutions. Expert in React Native and Flutter development.",
      skills: ["React Native", "Flutter", "Mobile Architecture"],
      social: {
        linkedin: "#",
        github: "#"
      },
      featured: false
    }
  ];

  const leaders = teamMembers.filter(member => member.featured);
  const teamMembers_ = teamMembers.filter(member => !member.featured);

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="absolute w-80 h-80 bg-primary/5 rounded-full pointer-events-none blur-3xl"
        style={{
          right: mousePosition.x * 0.02,
          top: mousePosition.y * 0.03,
          transition: 'all 0.3s ease',
        }}
      />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
            Meet Our
            <span className="text-primary animate-pulse"> Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-300">
            Our diverse team of experts brings together years of experience, innovation, 
            and passion to deliver exceptional results for every project.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center hover:text-primary transition-colors duration-300">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader, index) => (
              <Card 
                key={leader.name}
                className="card-hover glass border-0 overflow-hidden animate-fade-in interactive-card group"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translate(${mousePosition.x * 0.004 * (index === 0 ? 1 : -1)}px, ${mousePosition.y * 0.003}px) rotateY(${mousePosition.x * 0.008 * (index === 0 ? 1 : -1)}deg)`,
                }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {/* Profile Image with 3D Effect */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                      <div className="absolute bottom-4 left-4 transform group-hover:translate-y-2 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{leader.name}</h3>
                        <p className="text-primary-light font-medium animate-pulse">{leader.role}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {leader.bio}
                      </p>

                      {/* Skills with Staggered Animation */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {leader.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:scale-110 transition-transform duration-300"
                            style={{
                              transitionDelay: `${skillIndex * 0.1}s`
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Social Links with Enhanced Hover */}
                      <div className="flex space-x-3">
                        {leader.social.linkedin && (
                          <a 
                            href={leader.social.linkedin}
                            className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full hover:scale-125 hover:rotate-12"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {leader.social.twitter && (
                          <a 
                            href={leader.social.twitter}
                            className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full hover:scale-125 hover:rotate-12"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                        {leader.social.github && (
                          <a 
                            href={leader.social.github}
                            className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full hover:scale-125 hover:rotate-12"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Team with Grid Animation */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center hover:text-primary transition-colors duration-300">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamMembers_.map((member, index) => (
              <Card 
                key={member.name}
                className="card-hover glass border-0 text-center animate-fade-in group interactive-card"
                style={{ 
                  animationDelay: `${(index + 2) * 0.1}s`,
                  transform: `translate(${mousePosition.x * 0.002 * (index % 2 === 0 ? 1 : -1)}px, ${mousePosition.y * 0.002}px) scale(${1 + (index % 3) * 0.01})`,
                }}
              >
                <CardContent className="p-6">
                  {/* Profile Image with Magnetic Effect */}
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent group-hover:animate-pulse"></div>
                  </div>

                  {/* Info with Enhanced Hover */}
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 group-hover:scale-105">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-3 animate-pulse">{member.role}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:scale-110 transition-transform duration-300"
                        style={{
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full hover:scale-125 hover:rotate-12"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full hover:scale-125 hover:rotate-12"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github}
                        className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full hover:scale-125 hover:rotate-12"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Team CTA with 3D Effect */}
        <div 
          className="mt-16 bg-dark-bg rounded-2xl p-12 text-center animate-fade-in interactive-card"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.005}deg) rotateY(${mousePosition.x * 0.005}deg)`,
          }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 hover:text-primary transition-colors duration-300">Join Our Amazing Team</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology 
            and want to make a difference. Explore our open positions and grow with us.
          </p>
          <button className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-110 transition-transform duration-300 interactive-card">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;