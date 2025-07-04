import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { Interactive3D } from '@/components/Interactive3D';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryTestablePredictions = () => {
  return (
    <Layout>
      <SEO 
        title="Testable Predictions – Lattice Theory of Everything"
        description="Specific, measurable predictions from Roy Winter's cubic-diamond lattice theory that can be experimentally verified."
        type="ScholarlyArticle"
        keywords={['testable predictions', 'experimental verification', 'electron charge', 'spin', 'polarization']}
      />
      
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">Testable Predictions</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Testable Predictions
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            The cubic-diamond lattice theory makes specific, measurable predictions that distinguish 
            it from standard quantum mechanics and can be experimentally verified.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Fundamental Predictions (Approved 4 Apr 2025)
              </h2>
              
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <div>
                    <strong>Electron Charge:</strong> e = 4.803 × 10⁻¹⁰ esu (exact value from four-sphere model)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <strong>Electron Spin:</strong> Angular momentum quantization from figure-8 knot geometry
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <div>
                    <strong>Polarizer Effect:</strong> Modified transmission through crossed polarizers due to lattice alignment
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <div>
                    <strong>Revised Uncertainty:</strong> Δp·Δx ≥ ℏv/c replaces standard uncertainty relation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                  <div>
                    <strong>Avogadro Link:</strong> N_A derived from lattice sphere count and fundamental constants
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">6</span>
                  <div>
                    <strong>e⁻/e⁺ Annihilation:</strong> Specific photon polarization patterns from knot cancellation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">7</span>
                  <div>
                    <strong>Gravity:</strong> Velocity profile v(r) = v₀r₀²/r² measurable in laboratory settings
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-cobalt text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">8</span>
                  <div>
                    <strong>H₀ without Expansion:</strong> Hubble constant from time dilation, not cosmic expansion
                  </div>
                </li>
              </ol>
            </div>

            <div className="theory-card">
              <h2 className="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                Key Equations for Verification
              </h2>
              
              <div className="space-y-6">
                <EquationBlock 
                  latex="\Delta p \,\Delta x \ge \frac{\hbar v}{c}"
                  caption="Modified uncertainty principle with velocity constraint"
                />
                
                <EquationBlock 
                  latex="N_{\text{electron}} = 4"
                  caption="Electron as four-sphere harmonic oscillator"
                />
                
                <EquationBlock 
                  latex="v(r) = \frac{v_0 r_0^2}{r^2}"
                  caption="Gravitational velocity profile"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Interactive3D 
              src="/models/electron-fig8.glb"
              caption="Figure-8 Electron Knot - Testable spin predictions"
              autoRotate={true}
              cameraPosition={[4, 4, 4]}
            />
            
            <div className="theory-card">
              <h3 className="font-merriweather font-semibold text-xl mb-4 text-cobalt">
                Experimental Methods
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  High-precision charge measurements using modern techniques
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Polarization analysis of annihilation photons
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Laboratory gravity measurements at small scales
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cobalt rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Modified uncertainty relation verification
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory/gravity"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Previous: Gravity & Pressure Field
          </CTAButton>
          
          <CTAButton 
            variant="primary" 
            href="/theory/cmb-power-spectrum"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Next: CMB Power Spectrum
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default TheoryTestablePredictions;