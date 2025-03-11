import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Github, Twitter, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border/10">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Feel free to reach out if you have any questions or want to work together on a project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button
                  type="submit"
                  className="w-full border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {["Contact Information", "Social Media"].map((title, index) => (
              <Card key={title} className="bg-card border-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">{title}</h3>
                  {title === "Contact Information" ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-muted-foreground">CEO@bahaanajjar.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-muted-foreground">KFUPM, Dhahran, Saudi Arabia</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4">
                      {[
                        { href: "https://github.com/0xffvirus", Icon: Github, label: "GitHub" },
                        { href: "https://twitter.com/ceobahaa", Icon: Twitter, label: "Twitter" },
                        { href: "https://instagram.com/1zsb", Icon: Instagram, label: "Instagram" }
                      ].map(({ href, Icon, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-transparent border border-primary/30 hover:border-primary hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] px-4 py-2 rounded-md transition-all duration-300 text-foreground"
                        >
                          <Icon className="h-5 w-5" />
                          <span>{label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}