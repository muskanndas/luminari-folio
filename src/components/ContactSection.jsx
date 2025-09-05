import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Linkedin, 
  Instagram, 
  Send,
  CheckCircle 
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@techflow.com",
      action: "mailto:hello@techflow.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Innovation Street, Tech Valley, CA 94043",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM PST",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-500">
            Get In
            <span className="text-primary animate-pulse"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass border-0 animate-fade-in interactive-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="h-12 border-border focus:border-primary hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="h-12 border-border focus:border-primary hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project, goals, and requirements..."
                      className="min-h-32 border-border focus:border-primary resize-none hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-primary-foreground px-8 py-3 h-12 w-full md:w-auto font-semibold rounded-lg group hover:scale-110 transition-transform duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-primary animate-pulse" />
                      <span className="text-sm text-muted-foreground">24h Response Time</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-primary animate-pulse" />
                      <span className="text-sm text-muted-foreground">Free Consultation</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-primary animate-pulse" />
                      <span className="text-sm text-muted-foreground">NDA Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="card-hover glass border-0 animate-fade-in interactive-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                      {info.action.startsWith('#') ? (
                        <p className="text-muted-foreground">{info.content}</p>
                      ) : (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="glass border-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all duration-300 group hover:scale-125"
                  >
                    <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </a>
                  <a 
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all duration-300 group hover:scale-125"
                  >
                    <Instagram className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Stay updated with our latest projects and tech insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;