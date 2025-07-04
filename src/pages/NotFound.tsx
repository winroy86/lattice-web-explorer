import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Home, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In WordPress, this would redirect to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Einstein Caricature */}
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-neutral-light to-neutral-light/50 rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Einstein Hair */}
              <div className="absolute top-4 left-8 w-8 h-8 bg-gray-400 rounded-full opacity-60"></div>
              <div className="absolute top-2 left-12 w-12 h-12 bg-gray-500 rounded-full opacity-40"></div>
              <div className="absolute top-3 right-8 w-10 h-10 bg-gray-400 rounded-full opacity-50"></div>
              <div className="absolute top-1 right-14 w-8 h-8 bg-gray-500 rounded-full opacity-45"></div>
              
              {/* Face */}
              <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full relative">
                {/* Eyes */}
                <div className="absolute top-8 left-4 w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="absolute top-8 right-4 w-3 h-3 bg-gray-800 rounded-full"></div>
                
                {/* Nose */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-amber-300 rounded-full"></div>
                
                {/* Mustache */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded-full"></div>
                
                {/* Mouth */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-400 rounded-full"></div>
              </div>
              
              {/* Equation symbols floating around */}
              <div className="absolute top-12 left-4 text-2xl text-cobalt opacity-60 animate-pulse">E</div>
              <div className="absolute top-16 right-6 text-xl text-academic-green opacity-60 animate-pulse">=</div>
              <div className="absolute bottom-20 left-6 text-2xl text-academic-orange opacity-60 animate-pulse">mc²</div>
              <div className="absolute bottom-12 right-4 text-lg text-muted-foreground opacity-60 animate-pulse">?</div>
            </div>
            
            <div className="text-6xl font-bold text-cobalt mb-4">404</div>
            <h1 className="font-merriweather font-bold text-3xl mb-4">
              "Space and Time Cannot Be Found!"
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Even Einstein would be puzzled by this missing page. 
              Let's help you find what you're looking for in our discrete spacetime.
            </p>
          </div>

          {/* Search Box */}
          <Card className="theory-card mb-8">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">Search Our Universe</h2>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for theory, equations, papers..."
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cobalt focus:border-transparent"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-cobalt text-white rounded-lg hover:bg-cobalt-dark transition-colors flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Navigation Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="theory-card text-center group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-6 h-6 text-cobalt" />
                </div>
                <h3 className="font-semibold mb-2">Start Fresh</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Return to our homepage and explore the theory from the beginning
                </p>
                <CTAButton variant="secondary" href="/" className="w-full">
                  Go Home
                </CTAButton>
              </CardContent>
            </Card>

            <Card className="theory-card text-center group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-academic-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-academic-green" />
                </div>
                <h3 className="font-semibold mb-2">Explore Theory</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dive into the mathematical foundations and physics principles
                </p>
                <CTAButton variant="secondary" href="/theory" className="w-full">
                  Theory Explorer
                </CTAButton>
              </CardContent>
            </Card>

            <Card className="theory-card text-center group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-academic-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ArrowLeft className="w-6 h-6 text-academic-orange" />
                </div>
                <h3 className="font-semibold mb-2">Go Back</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Return to the previous page you were visiting
                </p>
                <CTAButton 
                  variant="secondary" 
                  onClick={() => window.history.back()} 
                  className="w-full"
                >
                  Go Back
                </CTAButton>
              </CardContent>
            </Card>
          </div>

          {/* Fun Physics Quote */}
          <div className="bg-gradient-to-r from-cobalt/10 to-academic-green/10 rounded-lg p-6">
            <blockquote className="text-lg italic text-muted-foreground mb-2">
              "The most incomprehensible thing about the universe is that it is comprehensible."
            </blockquote>
            <cite className="text-sm font-semibold">— Albert Einstein</cite>
            <p className="text-sm text-muted-foreground mt-2">
              Keep exploring, and perhaps you'll help make the universe even more comprehensible.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;