import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TheoryElectron = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title="Electron Figure-8 Knot – Lattice Theory"
        description="Electrons as four-sphere figure-8 knots with mass m_P/4 and topological charge properties"
        type="ScholarlyArticle"
      />
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
            Electron Figure-8 Knot Structure
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Electrons are figure-8 knots formed by four Planck-scale spheres in harmonic motion. 
            This topological structure naturally explains charge, spin, and mass through 
            geometric properties of the knot configuration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Four-Sphere Knot Structure
              </h2>
              <p className="text-muted-foreground mb-6">
                The electron consists of exactly four Planck-scale spheres arranged in a figure-8 
                knot topology. This closed-loop configuration provides stability and defines 
                the electron's fundamental properties.
              </p>
              
              <EquationBlock 
                latex="m_e = \frac{m_P}{N_{\text{electron}}} = \frac{m_P}{4}"
                caption="Electron mass from four-sphere count"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Charge and Spin Properties
              </h2>
              <p className="text-muted-foreground mb-6">
                Electric charge emerges from the topological orientation of the figure-8 knot. 
                Spin-1/2 behavior arises from the knot's internal angular momentum, with 
                spin-up and spin-down corresponding to different circulation directions.
              </p>
              
              <EquationBlock 
                latex="q_e = \pm e \quad \text{(topological charge)}"
                caption="Charge from knot chirality: electron (-e), positron (+e)"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              src="/models/electron-fig8.glb"
              caption="Electron Figure-8 Knot with Four Spheres"
              autoRotate={true}
              cameraPosition={[2, 2, 2]}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Topological Properties
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mass: m_P/4 from four-sphere structure
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Charge: ±e from knot chirality
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spin: 1/2 from knot angular momentum
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stability: Topological protection of knot
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