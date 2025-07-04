import { Layout } from '@/components/Layout';
import { EquationBlock } from '@/components/EquationBlock';
import { CMBSpectrumChart } from '@/components/CMBSpectrumChart';
import { CTAButton } from '@/components/CTAButton';
import { SEO } from '@/components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TheoryCMBPowerSpectrum = () => {
  return (
    <Layout>
      <SEO 
        title="CMB Power Spectrum – Lattice Theory of Everything"
        description="Cosmic microwave background power spectrum predictions from cubic-diamond lattice theory based on harmonic analysis."
        type="ScholarlyArticle"
        keywords={['CMB power spectrum', 'cosmic microwave background', 'lattice harmonics', 'cosmology']}
      />
      
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/theory" className="hover:text-cobalt">Theory Explorer</a></li>
            <li>/</li>
            <li className="text-foreground">CMB Power Spectrum</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            CMB Power Spectrum Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            The cosmic microwave background power spectrum emerges naturally from the cubic-diamond 
            lattice through harmonic analysis, providing testable predictions for cosmological observations.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {/* Page 1: Lattice Harmonics */}
          <section className="theory-card">
            <h2 className="font-merriweather font-semibold text-2xl mb-6 text-cobalt">
              1. Lattice Harmonic Foundation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The cubic-diamond lattice supports standing wave modes that correspond to temperature 
                  fluctuations in the cosmic microwave background. The harmonic modes are characterized 
                  by discrete wave vectors determined by lattice symmetry.
                </p>
                <EquationBlock 
                  latex="\ell \propto N = h^2 + k^2 + l^2"
                  caption="Multipole moment from lattice harmonics"
                />
                <p className="text-muted-foreground">
                  Where h, k, l are integer quantum numbers corresponding to the three lattice directions, 
                  and N represents the harmonic mode number that directly relates to the multipole moment ℓ.
                </p>
              </div>
              <div className="bg-neutral-light/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Key Harmonic Properties:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Discrete frequency spectrum from lattice periodicity</li>
                  <li>• Temperature fluctuations follow harmonic patterns</li>
                  <li>• Peak positions determined by resonance conditions</li>
                  <li>• Amplitude scaling from lattice compression effects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Page 2: Power Spectrum Calculation */}
          <section className="theory-card">
            <h2 className="font-merriweather font-semibold text-2xl mb-6 text-cobalt">
              2. Power Spectrum Calculation
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The angular power spectrum C_ℓ is calculated from the statistical properties of lattice 
                harmonic modes. The discrete nature of the lattice leads to specific peak locations and 
                relative amplitudes that differ from continuous spacetime models.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <EquationBlock 
                    latex="C_\ell = \frac{4\pi}{2\ell + 1} \sum_m |a_{\ell m}|^2"
                    caption="Angular power spectrum from lattice modes"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    The coefficients a_ℓm are determined by the lattice structure and initial conditions 
                    set by the discrete spacetime geometry.
                  </p>
                </div>
                <div>
                  <EquationBlock 
                    latex="\ell_{\text{peak}} = \sqrt{h^2 + k^2 + l^2} \cdot \alpha"
                    caption="Peak positions from resonance conditions"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Where α is a scaling factor determined by the lattice spacing and horizon size 
                    at last scattering.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Page 3: Predictions and Comparison */}
          <section className="theory-card">
            <h2 className="font-merriweather font-semibold text-2xl mb-6 text-cobalt">
              3. Theoretical Predictions vs. Observations
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The lattice theory predicts specific peak positions and relative amplitudes that can be 
                compared with Planck satellite observations. Key differences from ΛCDM model include 
                modified peak spacing and suppressed power at high multipoles.
              </p>
              
              <CMBSpectrumChart />
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-cobalt/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-cobalt mb-2">First Acoustic Peak</h4>
                  <p className="text-sm text-muted-foreground">
                    ℓ ≈ 220 from fundamental lattice resonance
                  </p>
                </div>
                <div className="bg-academic-green/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-academic-green mb-2">Peak Ratios</h4>
                  <p className="text-sm text-muted-foreground">
                    Modified ratios due to discrete harmonic structure
                  </p>
                </div>
                <div className="bg-academic-orange/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-academic-orange mb-2">High-ℓ Damping</h4>
                  <p className="text-sm text-muted-foreground">
                    Enhanced damping from lattice scale cutoff
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-between items-center">
          <CTAButton 
            variant="secondary" 
            href="/theory/testable-predictions"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Previous: Testable Predictions
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

export default TheoryCMBPowerSpectrum;