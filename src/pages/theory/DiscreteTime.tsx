import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TheoryDiscreteTime = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title="Discrete Time Evolution – Lattice Theory"
        description="Time as discrete collision intervals with revised uncertainty principle and velocity-dependent time dilation"
        type="ScholarlyArticle"
      />
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
            Time emerges from discrete collision intervals between Planck-scale spheres. 
            Each "tick" represents a collision event, with local time dilation arising from 
            varying collision densities throughout the lattice structure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Collision-Based Time
              </h2>
              <p className="text-muted-foreground mb-6">
                Time intervals arise from sphere collision events. The fundamental relationship 
                between distance, velocity, and time creates discrete temporal steps that vary 
                with local collision density.
              </p>
              
              <EquationBlock 
                latex="\Delta t = \frac{\Delta x}{v}"
                caption="Time interval from collision spacing and velocity"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Revised Uncertainty Principle
              </h2>
              <p className="text-muted-foreground mb-6">
                The discrete nature of space-time modifies the traditional uncertainty principle. 
                The velocity-dependent formulation accounts for the finite resolution of the 
                lattice structure and sphere interaction dynamics.
              </p>
              
              <EquationBlock 
                latex="\Delta p \, \Delta x \ge \frac{\hbar v}{c}"
                caption="Modified uncertainty principle with velocity dependence"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              src="/models/time-evolution.glb"
              caption="Discrete Time Evolution of Lattice Collisions"
              autoRotate={false}
              cameraPosition={[4, 2, 4]}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Key Consequences
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Time dilation from collision density variations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Velocity-dependent uncertainty principle
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Discrete causality through collision events
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  No need for continuous time coordinates
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