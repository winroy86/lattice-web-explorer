import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, Users, Zap, HelpCircle, Mail, Send } from 'lucide-react';

const Community = () => {
  const faqs = [
    {
      question: "What is the Cubic-Diamond-Lattice Theory of Everything?",
      answer: "CDLT Theory proposes that spacetime is fundamentally discrete, existing as a cubic-diamond lattice structure at the Planck scale. All physical phenomena, from quantum mechanics to gravity, emerge from the dynamics of this lattice."
    },
    {
      question: "How does this theory differ from string theory?",
      answer: "While string theory proposes fundamental particles as vibrating strings in higher dimensions, CDLT theory suggests that all phenomena emerge from discrete lattice dynamics in our familiar 3+1 dimensional spacetime. This makes it more directly testable and computationally tractable."
    },
    {
      question: "What experimental evidence supports CDLT theory?",
      answer: "The theory makes specific predictions about particle behavior, wave propagation, and gravitational effects that are consistent with current observations. Several proposed experiments could provide direct validation of the discrete spacetime hypothesis."
    },
    {
      question: "Can I contribute to the research?",
      answer: "Absolutely! We welcome contributions from physicists, mathematicians, and computer scientists. Join our discussion forums, attend virtual seminars, or collaborate on computational simulations and theoretical developments."
    },
    {
      question: "Is there open-source software for CDLT simulations?",
      answer: "Yes, we maintain several open-source simulation packages and computational tools. Check our GitHub repositories and documentation for Python, Julia, and C++ implementations of lattice dynamics simulators."
    },
    {
      question: "How can I stay updated on new developments?",
      answer: "Subscribe to our newsletter, join our Discord server, follow our blog, and attend our monthly virtual seminars. We also maintain active discussions on relevant physics forums and social media channels."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with researchers, students, and enthusiasts exploring the frontiers of physics. 
            Collaborate, discuss, and contribute to the development of the Cubic-Diamond-Lattice Theory.
          </p>
        </div>

        {/* Community Platforms */}
        <section className="mb-20">
          <h2 className="font-merriweather font-bold text-3xl mb-8 text-center">
            Connect With Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="theory-card text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle>Discord Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Join real-time discussions, share ideas, and collaborate with fellow researchers 
                  in our active Discord server.
                </p>
                <CTAButton variant="primary" href="https://discord.gg/cdlt-theory" className="w-full">
                  Join Discord
                </CTAButton>
              </CardContent>
            </Card>

            <Card className="theory-card text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-sky-500" />
                </div>
                <CardTitle>Telegram Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Get instant updates on new publications, breakthrough discoveries, 
                  and upcoming events in our Telegram channel.
                </p>
                <CTAButton variant="primary" href="https://t.me/cdlt_theory" className="w-full">
                  Join Telegram
                </CTAButton>
              </CardContent>
            </Card>

            <Card className="theory-card text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle>Research Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Participate in in-depth technical discussions, peer review, 
                  and collaborative research projects.
                </p>
                <CTAButton variant="primary" href="/forum" className="w-full">
                  Visit Forum
                </CTAButton>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <Card className="theory-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cobalt" />
              </div>
              <CardTitle className="text-2xl">Stay Informed</CardTitle>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest research updates, 
                event announcements, and exclusive content.
              </p>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cobalt focus:border-transparent"
                  />
                  <CTAButton 
                    variant="primary"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Subscribe
                  </CTAButton>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-merriweather font-bold text-3xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about the theory, research, and how to get involved
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="theory-card px-6">
                  <AccordionTrigger className="text-left hover:text-cobalt">
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 mr-3 text-cobalt flex-shrink-0" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-merriweather font-bold text-3xl mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions, ideas, or want to collaborate? We'd love to hear from you.
            </p>
          </div>
          
          <Card className="theory-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cobalt focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cobalt focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cobalt focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cobalt focus:border-transparent"
                    placeholder="Tell us more..."
                  />
                </div>
                
                <CTAButton 
                  variant="primary" 
                  size="lg"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full"
                >
                  Send Message
                </CTAButton>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-cobalt to-cobalt-dark text-white rounded-lg p-12">
          <h2 className="font-merriweather font-bold text-3xl mb-4">
            Ready to Shape the Future of Physics?
          </h2>
          <p className="text-xl text-cobalt-light mb-8 max-w-2xl mx-auto">
            Join our growing community of researchers, students, and innovators working 
            to understand the fundamental nature of reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="secondary"
              size="lg"
              href="/theory"
              className="bg-white text-cobalt hover:bg-gray-100"
            >
              Start Learning
            </CTAButton>
            <CTAButton 
              variant="secondary"
              size="lg"
              href="/courses"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cobalt"
            >
              Take a Course
            </CTAButton>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Community;