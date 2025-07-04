import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryElectron = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">Electron Dynamics</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Electron Dynamics in Lattice Space
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Electrons in the cubic-diamond lattice theory are not point particles but rather 
            stable excitation patterns that propagate through the discrete spacetime structure. 
            Their wave-like properties emerge naturally from the lattice dynamics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Wave Function in Lattice Space
              </h2>
              <p className="text-muted-foreground mb-6">
                The electron wave function represents a probability distribution across 
                lattice sites. The discrete nature of the lattice naturally leads to 
                quantized energy levels and orbital structures.
              </p>
              
              <EquationBlock 
                latex="\psi(\mathbf{r}) = \sum_{i,j,k} c_{i,j,k} |i,j,k\rangle"
                caption="Electron wave function as lattice site superposition"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Spin and Magnetic Moment
              </h2>
              <p className="text-muted-foreground mb-6">
                Electron spin emerges from the internal rotation of the excitation pattern 
                within the lattice structure. The magnetic moment is a consequence of this 
                internal angular momentum.
              </p>
              
              <EquationBlock 
                latex="\mu = -g \mu_B \frac{\mathbf{S}}{\hbar}"
                caption="Magnetic moment from lattice spin dynamics"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              caption="Electron Wave Function Visualization in Lattice"
              autoRotate={true}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Observable Properties
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mass emerges from lattice excitation energy
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Charge is a topological property of the pattern
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spin arises from internal pattern rotation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Uncertainty principle from lattice discretization
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory/photon"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Previous: Photon Mechanics
          </CTAButton>
          
          <CTAButton 
            variant="primary" 
            href="/theory/gravity"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Next: Gravity & Pressure Field
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryElectron;