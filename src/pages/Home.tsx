import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Interactive3D } from '@/components/Interactive3D';
import { EquationBlock } from '@/components/EquationBlock';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Microscope, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title="Roy Winter's Cubic-Diamond-Lattice Theory of Everything"
        description="Discrete-lattice physics framework unifying quantum mechanics and relativity through Planck-scale cubic-diamond lattice structures and pressure field dynamics."
        type="website"
        keywords={['discrete lattice physics', 'cubic diamond lattice', 'theory of everything', 'quantum mechanics', 'relativity', 'Roy Winter']}
      />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-merriweather font-bold text-4xl md:text-6xl mb-6 text-foreground">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>
            
            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton 
                variant="hero" 
                size="lg"
                href="/theory/lattice"
                icon={<BookOpen className="w-5 h-5" />}
              >
                {t('home.cta.explore')}
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="lg"
                href="/assets/white-paper.pdf"
                icon={<Download className="w-5 h-5" />}
              >
                {t('home.cta.download')}
              </CTAButton>
            </div>
          </div>
          
          {/* Interactive 3D Visualization */}
          <div className="max-w-4xl mx-auto">
            <Interactive3D 
              src="/models/lattice-cube.glb"
              caption="Interactive Cubic-Diamond Lattice Structure - Click and drag to explore"
              autoRotate={true}
              cameraPosition={[3, 3, 3]}
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Theory Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-merriweather font-bold text-3xl md:text-4xl mb-4">
              Core Theoretical Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the fundamental structure of spacetime through discrete lattice mechanics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  {t('feature.electron.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('feature.electron.desc')}
                </p>
                <EquationBlock 
                  latex="N_{\text{electron}} = 4"
                  caption="Four Planck-scale spheres define electron mass"
                />
              </div>

              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  {t('feature.photon.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('feature.photon.desc')}
                </p>
                <EquationBlock 
                  latex="E = \frac{m_P c^2}{N_{\text{photon}}}"
                  caption="Photon energy from lattice sphere disturbance"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  {t('feature.time.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('feature.time.desc')}
                </p>
                <EquationBlock 
                  latex="\Delta t = \frac{\Delta x}{v}"
                  caption="Discrete time steps from lattice dynamics"
                />
              </div>

              <div className="theory-card">
                <h3 className="font-merriweather font-semibold text-xl mb-3 text-cobalt">
                  {t('feature.gravity.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('feature.gravity.desc')}
                </p>
                <EquationBlock 
                  latex="v(r) = \frac{v_0 r_0^2}{r^2}"
                  caption="Velocity profile creates gravitational effects"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-neutral-light/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-merriweather font-bold text-3xl md:text-4xl mb-4">
              Revolutionary Physics Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Novel explanations for fundamental phenomena through discrete lattice structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="theory-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-cobalt" />
                </div>
                <h3 className="font-merriweather font-semibold text-xl mb-3">
                  Revised Uncertainty Principle
                </h3>
                <p className="text-muted-foreground">
                  Modified uncertainty relation: Δp·Δx ≥ ℏv/c accounts for lattice velocity constraints.
                </p>
              </CardContent>
            </Card>

            <Card className="theory-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-academic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-academic-green" />
                </div>
                <h3 className="font-merriweather font-semibold text-xl mb-3">
                  {t('feature.redshift.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('feature.redshift.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="theory-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-academic-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-academic-orange" />
                </div>
                <h3 className="font-merriweather font-semibold text-xl mb-3">
                  Testable Predictions
                </h3>
                <p className="text-muted-foreground">
                  Specific predictions for electron charge, spin, and annihilation photon polarization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cobalt text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-merriweather font-bold text-3xl md:text-4xl mb-4">
            Explore the Mathematical Framework
          </h2>
          <p className="text-xl text-cobalt-light mb-8 max-w-2xl mx-auto">
            Discover the equations, visualizations, and theoretical foundations of discrete-lattice physics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/theory/lattice"
              className="bg-white text-cobalt hover:bg-gray-100"
            >
              Start with Lattice Theory
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/lab"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cobalt"
            >
              Interactive Demonstrations
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/theory/testable-predictions"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cobalt"
            >
              Testable Predictions
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;