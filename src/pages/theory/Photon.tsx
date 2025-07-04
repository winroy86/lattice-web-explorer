import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TheoryPhoton = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title="Photon Spiral Motion – Lattice Theory"
        description="Photons as spiral disturbances of N spheres with energy E = m_P c²/N and structural redshift mechanism"
        type="ScholarlyArticle"
      />
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">Photon Mechanics</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Photon Spiral Motion
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Photons are spiral disturbances involving N_photon spheres moving through the lattice. 
            Energy is quantized as E = m_P c²/N_photon, with wavelength growth creating both 
            structural and observational redshift without requiring cosmic expansion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Spiral Structure
              </h2>
              <p className="text-muted-foreground mb-6">
                Photons propagate as spiral disturbances through the lattice, involving multiple 
                spheres in coordinated motion. The spiral pattern maintains coherence while 
                allowing for wavelength changes during propagation.
              </p>
              
              <EquationBlock 
                latex="E = \frac{m_P c^2}{N_{\text{photon}}}"
                caption="Photon energy from involved sphere count"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Redshift Mechanism  
              </h2>
              <p className="text-muted-foreground mb-6">
                Photons experience wavelength growth as they traverse regions of varying time 
                dilation, acquiring additional spheres and reducing energy. This creates redshift 
                without requiring expanding space.
              </p>
              
              <EquationBlock 
                latex="z = \frac{\lambda_{\text{observed}} - \lambda_{\text{emitted}}}{\lambda_{\text{emitted}}}"
                caption="Redshift from wavelength growth during propagation"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              src="/models/photon-spiral.glb"
              caption="Photon Spiral Disturbance Through Lattice"
              autoRotate={true}
              cameraPosition={[3, 2, 3]}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Observable Effects
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Structural redshift from wavelength growth
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Observational redshift from time dilation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Energy quantization E = m_P c²/N
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spiral propagation maintains coherence
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory/discrete-time"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Previous: Discrete Time
          </CTAButton>
          
          <CTAButton 
            variant="primary" 
            href="/theory/electron"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Next: Electron Dynamics
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryPhoton;