import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Github, Twitter, Instagram, Icon, File } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground uppercase">Get In Touch</h2>
          <div className="w-16 h-1 bg-foreground mb-6"></div>
          <p className="text-muted-foreground max-w-2xl font-mono">
            {`> Feel free to reach out if you have any questions or want to work together on a project.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-2 border-border hover:border-foreground transition-all duration-0 rounded-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 uppercase">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium font-mono uppercase">
                      Name
                    </label>
                    <Input id="name" placeholder="YOUR NAME" className="border-2 border-input rounded-none focus-visible:ring-0 focus-visible:border-foreground font-mono placeholder:uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium font-mono uppercase">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="YOUR EMAIL" className="border-2 border-input rounded-none focus-visible:ring-0 focus-visible:border-foreground font-mono placeholder:uppercase" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium font-mono uppercase">
                    Subject
                  </label>
                  <Input id="subject" placeholder="SUBJECT" className="border-2 border-input rounded-none focus-visible:ring-0 focus-visible:border-foreground font-mono placeholder:uppercase" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium font-mono uppercase">
                    Message
                  </label>
                  <Textarea id="message" placeholder="YOUR MESSAGE" rows={5} className="border-2 border-input rounded-none focus-visible:ring-0 focus-visible:border-foreground font-mono placeholder:uppercase resize-none" />
                </div>
                <Button
                  type="submit"
                  className="w-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-0 uppercase font-bold rounded-none"
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
              <Card key={title} className="bg-card border-2 border-border hover:border-foreground transition-all duration-0 rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 uppercase">{title}</h3>
                  {title === "Contact Information" ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="border border-foreground p-2">
                          <Mail className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold uppercase font-mono">Email</h4>
                          <p className="text-muted-foreground font-mono">CEO@bahaanajjar.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="border border-foreground p-2">
                          <MapPin className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold uppercase font-mono">Location</h4>
                          <p className="text-muted-foreground font-mono">KFUPM, Dhahran, Saudi Arabia</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4">
                      {[
                        { href: "https://github.com/0xffvirus", Icon: Github, label: "GitHub" },
                        { href: "https://twitter.com/ceobahaa", Icon: Twitter, label: "Twitter" },
                        { href: "https://drive.usercontent.google.com/download?id=1pkwAs0WIjUNmaEKO7vDGAHaKapWIWSlM&export=download&authuser=0&confirm=t&uuid=9e8dbfa6-8a23-421f-a593-53e4b599eb80&at=AEz70l6SPMxQNPXNwAusQy6NbP8s:1741725106855", Icon: File, label: "CV" }
                      ].map(({ href, Icon, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-transparent border border-foreground hover:bg-foreground hover:text-background px-4 py-2 rounded-none transition-all duration-0 text-foreground uppercase font-bold font-mono"
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
