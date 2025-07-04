import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Interactive3D } from '@/components/Interactive3D';
import { EquationBlock } from '@/components/EquationBlock';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Microscope, Download } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-merriweather font-bold text-4xl md:text-6xl mb-6 text-foreground">
              Roy Winter's <span className="text-cobalt">Cubic-Diamond-Lattice</span> Theory of Everything
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A revolutionary approach to fundamental physics that unifies quantum mechanics and relativity 
              through discrete spacetime lattices and pressure field dynamics.
            </p>
            
            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton 
                variant="hero" 
                size="lg"
                href="/theory"
                icon={<BookOpen className="w-5 h-5" />}
              >
                Start Learning
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="lg"
                href="/publications"
                icon={<Download className="w-5 h-5" />}
              >
                Download White Paper
              </CTAButton>
            </div>
          </div>
          
          {/* Interactive 3D Visualization */}
          <div className="max-w-4xl mx-auto">
            <Interactive3D 
              caption="Interactive Cubic-Diamond Lattice Structure - Click and drag to explore"
              autoRotate={true}
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Theory Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-merriweather font-bold text-3xl md:text-4xl mb-4">
              The Theory in 30 Seconds
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the fundamental structure of spacetime through discrete lattice mechanics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  Discrete Spacetime Lattice
                </h3>
                <p className="text-muted-foreground mb-4">
                  Space and time are not continuous but exist as a discrete cubic-diamond lattice structure 
                  with fundamental units of length and time.
                </p>
                <EquationBlock 
                  latex="L_p = \sqrt{\frac{\hbar G}{c^3}} \approx 1.616 \times 10^{-35} \text{ m}"
                  caption="Planck Length - The fundamental lattice spacing"
                />
              </div>

              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  Pressure Field Dynamics
                </h3>
                <p className="text-muted-foreground mb-4">
                  All fundamental forces emerge from pressure variations in the lattice structure, 
                  unifying gravity, electromagnetism, and nuclear forces.
                </p>
                <EquationBlock 
                  latex="F = -\nabla P(\mathbf{r}, t)"
                  caption="Force as pressure gradient in lattice space"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  Quantum Emergence
                </h3>
                <p className="text-muted-foreground mb-4">
                  Quantum mechanics emerges naturally from the discrete lattice structure, 
                  explaining wave-particle duality and uncertainty principles.
                </p>
                <EquationBlock 
                  latex="\psi(\mathbf{r}, t) = \sum_{\mathbf{n}} A_{\mathbf{n}} e^{i\mathbf{k} \cdot \mathbf{r} - i\omega t}"
                  caption="Wave function as lattice site superposition"
                />
              </div>

              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  Relativistic Consistency
                </h3>
                <p className="text-muted-foreground mb-4">
                  The lattice structure preserves Lorentz invariance at macroscopic scales 
                  while providing a discrete foundation for spacetime.
                </p>
                <EquationBlock 
                  latex="ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2"
                  caption="Emergent spacetime metric from lattice dynamics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-neutral-light/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-merriweather font-bold text-3xl md:text-4xl mb-4">
              Why This Theory Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary insights that address fundamental problems in modern physics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="theory-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-cobalt" />
                </div>
                <h3 className="font-merriweather font-semibold text-xl mb-3">
                  Unifies All Forces
                </h3>
                <p className="text-muted-foreground">
                  Explains gravity, electromagnetism, and nuclear forces as manifestations 
                  of pressure variations in the underlying lattice structure.
                </p>
              </CardContent>
            </Card>

            <Card className="theory-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-academic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-academic-green" />
                </div>
                <h3 className="font-merriweather font-semibold text-xl mb-3">
                  Solves Dark Matter
                </h3>
                <p className="text-muted-foreground">
                  Provides a natural explanation for dark matter and dark energy 
                  through lattice compression and expansion dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="theory-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-academic-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-academic-orange" />
                </div>
                <h3 className="font-merriweather font-semibold text-xl mb-3">
                  Testable Predictions
                </h3>
                <p className="text-muted-foreground">
                  Makes specific, testable predictions about particle behavior 
                  and cosmological phenomena that can be verified experimentally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cobalt text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-merriweather font-bold text-3xl md:text-4xl mb-4">
            Ready to Explore the Theory?
          </h2>
          <p className="text-xl text-cobalt-light mb-8 max-w-2xl mx-auto">
            Dive deep into the mathematical foundations, explore interactive visualizations, 
            and join our community of researchers and enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/theory"
              className="bg-white text-cobalt hover:bg-gray-100"
            >
              Explore Theory
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/lab"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cobalt"
            >
              Interactive Lab
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/community"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cobalt"
            >
              Join Community
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;