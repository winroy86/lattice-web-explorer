import { Layout } from '@/components/Layout';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Play, Code, Atom } from 'lucide-react';

const InteractiveLab = () => {
  const notebooks = [
    {
      title: "Lattice Wave Propagation",
      description: "Interactive simulation of electromagnetic waves through the cubic-diamond lattice",
      type: "Jupyter Notebook",
      url: "/notebooks/wave-propagation.html",
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: "Particle Dynamics Simulator",
      description: "Explore electron and photon behavior in discrete spacetime",
      type: "Python Simulation",
      url: "/notebooks/particle-dynamics.html",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Gravity Field Visualization",
      description: "3D visualization of pressure field effects and spacetime curvature",
      type: "WebGL Demo",
      url: "/notebooks/gravity-viz.html",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const demos = [
    {
      title: "Basic Lattice Structure",
      description: "Explore the fundamental cubic-diamond lattice",
      interactive: true
    },
    {
      title: "Time Evolution",
      description: "Watch how the lattice evolves over discrete time steps",
      interactive: true
    },
    {
      title: "Wave Interference",
      description: "See how waves interact in discrete spacetime",
      interactive: true
    },
    {
      title: "Particle Collision",
      description: "Observe particle interactions at the lattice level",
      interactive: true
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Interactive Physics Lab
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the Cubic-Diamond-Lattice Theory through interactive simulations, 
            computational notebooks, and 3D visualizations. Experience the theory firsthand 
            with hands-on experiments and demonstrations.
          </p>
        </div>

        {/* Computational Notebooks */}
        <section className="mb-20">
          <h2 className="font-merriweather font-bold text-3xl mb-8 text-center">
            Computational Notebooks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {notebooks.map((notebook, index) => (
              <Card key={index} className="theory-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-cobalt/10 rounded-lg text-cobalt">
                      {notebook.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{notebook.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{notebook.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {notebook.description}
                  </p>
                  <iframe 
                    src={notebook.url}
                    className="w-full h-32 border rounded mb-4 bg-neutral-light"
                    title={notebook.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <CTAButton 
                    variant="primary" 
                    href={notebook.url}
                    icon={<ExternalLink className="w-4 h-4" />}
                    className="w-full"
                  >
                    Launch Notebook
                  </CTAButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 3D Demo Gallery */}
        <section className="mb-20">
          <h2 className="font-merriweather font-bold text-3xl mb-8 text-center">
            3D Demonstration Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                  {demo.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {demo.description}
                </p>
                <Interactive3D 
                  caption={demo.title}
                  autoRotate={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Educational Resources */}
        <section className="bg-neutral-light/50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="font-merriweather font-bold text-3xl mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Additional tools and resources to deepen your understanding of the theory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Theory Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step explanation of key concepts
                </p>
                <CTAButton variant="secondary" href="/theory" className="w-full">
                  Learn Theory
                </CTAButton>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Equations Reference</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete mathematical formulations
                </p>
                <CTAButton variant="secondary" href="/publications" className="w-full">
                  View Papers
                </CTAButton>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Video Lectures</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recorded presentations and tutorials
                </p>
                <CTAButton variant="secondary" href="/courses" className="w-full">
                  Watch Videos
                </CTAButton>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Discussion Forum</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with other researchers
                </p>
                <CTAButton variant="secondary" href="/community" className="w-full">
                  Join Discussion
                </CTAButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InteractiveLab;