import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryGravity = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">Gravity & Pressure Field</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Gravity & Pressure Field Dynamics
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            In the cubic-diamond lattice theory, gravity is not a fundamental force but emerges 
            from pressure variations in the lattice structure. This unifies gravitational effects 
            with other forces through a common pressure field mechanism.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Pressure Field Mechanics
              </h2>
              <p className="text-muted-foreground mb-6">
                The lattice experiences varying pressure based on local excitation densities. 
                Mass-energy creates regions of higher lattice compression, leading to what we 
                observe as gravitational attraction through pressure gradients.
              </p>
              
              <EquationBlock 
                latex="F = -\nabla P(\mathbf{r}, t)"
                caption="Force as pressure gradient in lattice space"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Spacetime Curvature
              </h2>
              <p className="text-muted-foreground mb-6">
                Einstein's spacetime curvature emerges from the varying lattice density. 
                Regions of high mass-energy compress the lattice, creating the geodesics 
                that particles follow in curved spacetime.
              </p>
              
              <EquationBlock 
                latex="G_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}"
                caption="Einstein field equations from lattice compression"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              caption="Gravity Field Visualization in Lattice Space"
              autoRotate={true}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Unified Field Theory
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gravity emerges from lattice compression
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All forces share pressure field origin
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dark matter explained by lattice density variations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quantum gravity naturally incorporated
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory/electron"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Previous: Electron Dynamics
          </CTAButton>
          
          <CTAButton 
            variant="primary" 
            href="/lab"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Interactive Lab
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryGravity;