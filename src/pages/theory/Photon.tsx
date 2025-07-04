import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryPhoton = () => {
  return (
    <Layout>
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
            Photon Mechanics in Discrete Spacetime
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Electromagnetic radiation in the cubic-diamond lattice manifests as coherent waves 
            propagating through the discrete structure. Photons emerge as quantized excitations 
            that maintain wave-like properties while operating within the lattice constraints.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Wave Propagation
              </h2>
              <p className="text-muted-foreground mb-6">
                Electromagnetic waves propagate through the lattice as coordinated oscillations 
                of lattice sites. The discrete nature of the lattice naturally quantizes the 
                electromagnetic field, giving rise to photon behavior.
              </p>
              
              <EquationBlock 
                latex="E(\mathbf{r}, t) = E_0 \cos(\mathbf{k} \cdot \mathbf{r} - \omega t + \phi)"
                caption="Electromagnetic field in lattice coordinates"
              />
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Quantization
              </h2>
              <p className="text-muted-foreground mb-6">
                The energy of electromagnetic radiation is naturally quantized due to the 
                discrete lattice structure. Each photon corresponds to a specific excitation 
                pattern that propagates through the lattice.
              </p>
              
              <EquationBlock 
                latex="E = \hbar \omega = \frac{hc}{\lambda}"
                caption="Photon energy quantization"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              caption="Electromagnetic Wave Propagation Through Lattice"
              autoRotate={true}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Key Properties
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Speed of light emerges from lattice propagation rate
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wave-particle duality is fundamental to lattice dynamics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Polarization states correspond to lattice orientations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interference patterns arise from lattice superposition
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