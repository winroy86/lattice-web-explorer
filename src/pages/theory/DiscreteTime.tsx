import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryDiscreteTime = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">Discrete Time</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Discrete Time Evolution
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Time in the cubic-diamond lattice theory is not a continuous parameter but consists 
            of discrete steps. Each time step corresponds to one complete update of the entire 
            lattice state, creating a digital physics foundation for temporal evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Temporal Quantization
              </h2>
              <p className="text-muted-foreground mb-6">
                Just as space is quantized into discrete lattice points, time is quantized 
                into discrete intervals. This temporal quantization has profound implications 
                for causality and the arrow of time.
              </p>
              
              <EquationBlock 
                latex="t_n = n \cdot t_p, \quad n \in \mathbb{N}"
                caption="Discrete time as integer multiples of Planck time"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                State Evolution Rules
              </h2>
              <p className="text-muted-foreground mb-6">
                The lattice evolves according to deterministic rules that preserve quantum 
                mechanical properties while operating on discrete time steps. This creates 
                a computational universe where each step is calculable.
              </p>
              
              <EquationBlock 
                latex="\psi_{i,j,k}(t+1) = \sum_{neighbors} W_{mn} \psi_{m,n,\ell}(t)"
                caption="Lattice site evolution from neighboring sites"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              caption="Time Evolution of Lattice States (Animation)"
              autoRotate={false}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Implications
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The arrow of time emerges from computation direction
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Causality is preserved through local interactions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Time dilation emerges from lattice computation rates
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quantum uncertainty relates to computational limits
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory/lattice"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Previous: Lattice Structure
          </CTAButton>
          
          <CTAButton 
            variant="primary" 
            href="/theory/photon"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Next: Photon Mechanics
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryDiscreteTime;