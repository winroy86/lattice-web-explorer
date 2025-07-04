import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export const SiteFooter = () => {
  return (
    <footer className="bg-neutral-dark text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cobalt rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="font-merriweather font-bold text-lg">CDLT Theory</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Roy Winter's revolutionary Cubic-Diamond-Lattice Theory of Everything - 
              unifying quantum mechanics and relativity through discrete spacetime.
            </p>
            
            {/* ORCID Badge */}
            <div className="flex items-center space-x-2">
              <img 
                src="/images/orcid-logo.png" 
                alt="ORCID iD" 
                className="w-4 h-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <a 
                href="https://orcid.org/0000-0000-0000-0000" 
                className="text-sm text-cobalt hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roy Winter ORCID
              </a>
            </div>
          </div>

          {/* Theory Links */}
          <div>
            <h3 className="font-merriweather font-semibold mb-4">Theory</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/theory/lattice" className="text-gray-300 hover:text-cobalt transition-colors">Lattice Structure</Link></li>
              <li><Link to="/theory/discrete-time" className="text-gray-300 hover:text-cobalt transition-colors">Discrete Time</Link></li>
              <li><Link to="/theory/photon" className="text-gray-300 hover:text-cobalt transition-colors">Photon Mechanics</Link></li>
              <li><Link to="/theory/electron" className="text-gray-300 hover:text-cobalt transition-colors">Electron Dynamics</Link></li>
              <li><Link to="/theory/gravity" className="text-gray-300 hover:text-cobalt transition-colors">Gravity & Pressure</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-merriweather font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/lab" className="text-gray-300 hover:text-cobalt transition-colors">Interactive Lab</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-cobalt transition-colors">Courses</Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-cobalt transition-colors">Publications</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cobalt transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-cobalt transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-merriweather font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/roywinter" 
                className="text-gray-300 hover:text-cobalt transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://twitter.com/roywinter_phys" 
                className="text-gray-300 hover:text-cobalt transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="mailto:roy@cdlt-theory.com" 
                className="text-gray-300 hover:text-cobalt transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            
            <div className="text-sm space-y-2">
              <div className="flex items-center space-x-1">
                <ExternalLink className="w-3 h-3" />
                <a 
                  href="https://discord.gg/cdlt-theory" 
                  className="text-gray-300 hover:text-cobalt transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Community
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <ExternalLink className="w-3 h-3" />
                <a 
                  href="https://t.me/cdlt_theory" 
                  className="text-gray-300 hover:text-cobalt transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram Channel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
          <div className="mb-4 sm:mb-0">
            <p>&copy; 2024 Roy Winter. Licensed under 
              <a 
                href="https://creativecommons.org/licenses/by-sa/4.0/" 
                className="text-cobalt hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY-SA 4.0
              </a>
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-cobalt transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-cobalt transition-colors">Terms</Link>
            <a 
              href="/sitemap.xml" 
              className="hover:text-cobalt transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};