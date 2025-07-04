import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TheoryLattice = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title="Cubic-Diamond Lattice Structure – Lattice Theory"
        description="The foundational cubic-diamond lattice structure with atomic packing factor 0.34 and lattice parameter based on Planck length"
        type="ScholarlyArticle"
      />
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
            Space-time consists of Planck-scale spheres arranged in a cubic-diamond lattice. 
            This discrete structure provides the foundation for all physical phenomena, with 
            an atomic packing factor (APF) of 0.34 and lattice parameter derived from fundamental constants.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Lattice Parameters
              </h2>
              <p className="text-muted-foreground mb-6">
                The cubic-diamond lattice consists of Planck-scale spheres with specific geometric 
                constraints. The lattice parameter and atomic packing factor define the fundamental 
                structure of discrete space-time.
              </p>
              
              <EquationBlock 
                latex="a = \sqrt[3]{\frac{3\sqrt{3}}{4}} \, l_P"
                caption="Lattice parameter in terms of Planck length"
              />
               
              <EquationBlock 
                latex="\text{APF} = 0.34"
                caption="Atomic Packing Factor for cubic-diamond structure"
              />
              
              <EquationBlock 
                latex="l_P = \sqrt{\frac{\hbar G}{c^3}} \approx 1.616 \times 10^{-35} \text{ m}"
                caption="Planck Length - sphere diameter"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Sphere Interactions
              </h2>
              <p className="text-muted-foreground mb-6">
                Planck-scale spheres interact through collisions and maintain the lattice structure. 
                These interactions occur at discrete time intervals, with collision density determining 
                local time dilation effects.
              </p>
              
              <EquationBlock 
                latex="v_{\text{sphere}} = c \sqrt{1 - \frac{\rho}{\rho_{\max}}}"
                caption="Sphere velocity as function of collision density"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              src="/models/lattice-cube.glb"
              caption="3D Visualization of the Cubic-Diamond Lattice Structure"
              autoRotate={true}
              cameraPosition={[3, 3, 3]}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Key Properties
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  APF = 0.34 maximizes sphere packing efficiency
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lattice parameter scales with Planck length
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sphere collisions create discrete time intervals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collision density determines local velocities
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