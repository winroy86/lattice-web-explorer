import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TheoryGravity = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title="Gravity as Velocity Gradient – Lattice Theory"
        description="Gravity from velocity profile v(r) = v₀r₀²/r² creating pressure field without expansion"
        type="ScholarlyArticle"
      />
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
            Gravity as Velocity Gradient
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Gravity emerges from velocity gradients in the background sphere field. Mass creates 
            regions of slowed sphere motion, generating pressure gradients that manifest as 
            gravitational force through the profile v(r) = v₀r₀²/r².
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Velocity Profile
              </h2>
              <p className="text-muted-foreground mb-6">
                Mass creates a velocity gradient in the background sphere field, with spheres 
                moving slower near massive objects. This r⁻² profile matches gravitational 
                potential behavior without requiring spacetime curvature.
              </p>
              
              <EquationBlock 
                latex="v(r) = \frac{v_0 r_0^2}{r^2}"
                caption="Velocity profile around massive objects"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Pressure Field Force
              </h2>
              <p className="text-muted-foreground mb-6">
                The velocity gradient creates a pressure field that exerts force on matter. 
                This mechanism reproduces gravitational attraction without requiring the 
                concept of curved spacetime or gravitational waves.
              </p>
              
              <EquationBlock 
                latex="F = \frac{4\pi G M m}{r^2}"
                caption="Gravitational force from pressure field (kinetic theory factor 4)"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              src="/models/gravity-field.glb"
              caption="Velocity Gradient Field Around Mass"
              autoRotate={true}
              cameraPosition={[4, 3, 4]}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Key Features
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  No curved spacetime required
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pressure field force ∝ v₀²/r²
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kinetic theory factor of 4
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Velocity gradient explains time dilation
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