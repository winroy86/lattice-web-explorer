import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Theory Explorer', 
    href: '/theory',
    children: [
      { name: 'Lattice Structure', href: '/theory/lattice' },
      { name: 'Discrete Time', href: '/theory/discrete-time' },
      { name: 'Photon Mechanics', href: '/theory/photon' },
      { name: 'Electron Dynamics', href: '/theory/electron' },
      { name: 'Gravity & Pressure Field', href: '/theory/gravity' }
    ]
  },
  { name: 'Interactive Lab', href: '/lab' },
  { name: 'Courses', href: '/courses' },
  { name: 'Publications', href: '/publications' },
  { name: 'Blog', href: '/blog' },
  { name: 'Community', href: '/community' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const NavLink = ({ item, isMobile = false }: { item: typeof navigationItems[0], isMobile?: boolean }) => (
    <Link
      to={item.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-cobalt",
        isActiveRoute(item.href) ? "text-cobalt" : "text-foreground",
        isMobile && "block py-2 px-3 text-base"
      )}
      onClick={() => isMobile && setIsOpen(false)}
    >
      {item.name}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 mr-8">
          <div className="w-8 h-8 bg-cobalt rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="font-merriweather font-bold text-lg hidden sm:inline-block">
            CDLT Theory
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-1">
          {navigationItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink item={item} />
              
              {/* Dropdown for Theory Explorer */}
              {item.children && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          "block px-4 py-2 text-sm hover:bg-neutral-light transition-colors",
                          isActiveRoute(child.href) ? "text-cobalt bg-neutral-light" : "text-foreground"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block ml-auto">
          <Button 
            asChild
            className="bg-cobalt hover:bg-cobalt-dark text-white"
          >
            <Link to="/courses">Start Learning</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex items-center justify-between mb-6">
              <span className="font-merriweather font-bold text-lg">CDLT Theory</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <NavLink item={item} isMobile />
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={cn(
                            "block py-2 px-3 text-sm transition-colors hover:text-cobalt",
                            isActiveRoute(child.href) ? "text-cobalt" : "text-muted-foreground"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t">
                <Button 
                  asChild
                  className="w-full bg-cobalt hover:bg-cobalt-dark text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/courses">Start Learning</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};