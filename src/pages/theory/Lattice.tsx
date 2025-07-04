import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryLattice = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">Lattice Structure</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Cubic-Diamond Lattice Structure
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            The foundation of our theory lies in the discrete structure of spacetime itself. 
            Rather than continuous space and time, we propose that reality is built upon a 
            cubic-diamond lattice with fundamental units of distance and time intervals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Fundamental Lattice Properties
              </h2>
              <p className="text-muted-foreground mb-6">
                The cubic-diamond lattice represents the most fundamental level of physical reality. 
                Each lattice point can exist in various states, and the connections between points 
                carry the information that we observe as physical phenomena.
              </p>
              
              <EquationBlock 
                latex="L_p = \sqrt{\frac{\hbar G}{c^3}} \approx 1.616 \times 10^{-35} \text{ m}"
                caption="Planck Length - The fundamental lattice spacing"
              />
              
              <EquationBlock 
                latex="t_p = \sqrt{\frac{\hbar G}{c^5}} \approx 5.391 \times 10^{-44} \text{ s}"
                caption="Planck Time - The fundamental time interval"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Lattice Dynamics
              </h2>
              <p className="text-muted-foreground mb-6">
                The evolution of the lattice follows discrete rules similar to cellular automata, 
                but with quantum mechanical properties. Each lattice site can be in a superposition 
                of states, and the transitions between time steps preserve unitarity.
              </p>
              
              <EquationBlock 
                latex="|\psi(t + \Delta t)\rangle = U(\Delta t) |\psi(t)\rangle"
                caption="Unitary evolution of lattice states"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              caption="3D Visualization of the Cubic-Diamond Lattice Structure"
              autoRotate={true}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Key Takeaways
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spacetime is fundamentally discrete, not continuous
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The lattice spacing is on the order of the Planck length
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quantum superposition exists at the lattice level
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All physical phenomena emerge from lattice dynamics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Theory Explorer
          </CTAButton>
          
          <CTAButton 
            variant="primary" 
            href="/theory/discrete-time"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Next: Discrete Time
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryLattice;