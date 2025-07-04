import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Atom, Clock, Zap, Circle, Globe } from 'lucide-react';

const theoryTopics = [
  {
    title: "Lattice Structure",
    href: "/theory/lattice",
    icon: <Circle className="w-8 h-8" />,
    description: "Explore the fundamental cubic-diamond lattice that underlies all of spacetime",
    color: "text-cobalt"
  },
  {
    title: "Discrete Time",
    href: "/theory/discrete-time",
    icon: <Clock className="w-8 h-8" />,
    description: "Understanding how time emerges from discrete lattice transitions",
    color: "text-academic-green"
  },
  {
    title: "Photon Mechanics",
    href: "/theory/photon",
    icon: <Zap className="w-8 h-8" />,
    description: "How electromagnetic radiation propagates through lattice structures",
    color: "text-academic-orange"
  },
  {
    title: "Electron Dynamics",
    href: "/theory/electron",
    icon: <Atom className="w-8 h-8" />,
    description: "Particle behavior and wave functions in discrete spacetime",
    color: "text-cobalt"
  },
  {
    title: "Gravity & Pressure Field",
    href: "/theory/gravity",
    icon: <Globe className="w-8 h-8" />,
    description: "Unifying gravity with other forces through pressure field dynamics",
    color: "text-academic-green"
  }
];

const TheoryExplorer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Theory Explorer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the mathematical foundations and physical principles of the 
            Cubic-Diamond-Lattice Theory. Each section builds upon the previous, 
            creating a comprehensive understanding of this revolutionary approach to physics.
          </p>
        </div>

        {/* Theory Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {theoryTopics.map((topic, index) => (
            <Card key={topic.title} className="theory-card hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-neutral-light flex items-center justify-center mx-auto mb-4 ${topic.color} group-hover:scale-110 transition-transform duration-300`}>
                  {topic.icon}
                </div>
                <CardTitle className="font-merriweather text-xl mb-2">
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {topic.description}
                </p>
                <CTAButton 
                  variant="primary" 
                  href={topic.href}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  Explore {topic.title}
                </CTAButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <div className="bg-neutral-light/50 rounded-lg p-8 mb-16">
          <h2 className="font-merriweather font-bold text-2xl mb-6 text-center">
            Recommended Learning Path
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            {theoryTopics.map((topic, index) => (
              <div key={topic.title} className="flex items-center">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="font-semibold text-sm">{index + 1}. {topic.title}</span>
                </div>
                {index < theoryTopics.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <h2 className="font-merriweather font-bold text-2xl mb-6">
            Ready for More?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="secondary" href="/lab">
              Interactive Lab
            </CTAButton>
            <CTAButton variant="secondary" href="/publications">
              Research Papers
            </CTAButton>
            <CTAButton variant="secondary" href="/courses">
              Structured Courses
            </CTAButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryExplorer;