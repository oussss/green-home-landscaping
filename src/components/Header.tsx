import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#projects', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      if (event) (event.target as HTMLButtonElement).blur();
    }
  };

  const scrollToTop = (event?: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    if (event) (event.target as HTMLButtonElement).blur();
  };

  const handleGetQuote = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      if (event) (event.target as HTMLButtonElement).blur();
    }
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
    (e.target as HTMLButtonElement).blur();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg h-16'
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <button
              onClick={(e) => scrollToTop(e)}
              className="flex items-center space-x-2 animate-slide-in-left transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg p-2 -m-2"
              aria-label="Go to home page"
            >
              <Camera className={`h-8 w-8 transition-colors duration-500 ${
                isScrolled ? 'text-accent' : 'text-white'
              }`} />
              <span className={`text-xl font-display font-medium transition-colors duration-500 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Shots Studio
              </span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={(e) => scrollToSection(link.href, e)}
                    className={`font-nav transition-all duration-300 relative group tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded px-2 py-1 ${
                      isScrolled
                        ? 'text-secondary hover:text-primary'
                        : 'text-white/90 hover:text-white'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-accent' : 'bg-white'
                    }`}></span>
                  </button>
                ))}
              </nav>
              <button
                onClick={(e) => handleGetQuote(e)}
                className="bg-accent text-white px-6 py-2.5 font-nav font-medium tracking-wide transition-all duration-500 hover:bg-accent/90 hover:scale-105 hover:shadow-lg animate-slide-in-right relative overflow-hidden group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                style={{ animationDelay: '400ms' }}
              >
                <span className="relative z-10">Book a Shoot</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-3 transition-all duration-300 animate-slide-in-right z-50 relative rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isScrolled ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transition-all duration-500 ease-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <button
            onClick={(e) => scrollToTop(e)}
            className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg p-1 -m-1"
            aria-label="Go to home page"
          >
            <Camera className="h-6 w-6 text-accent" />
            <span className="font-display font-medium text-primary text-lg">Shots Studio</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-secondary hover:text-primary transition-colors duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={(e) => scrollToSection(link.href, e)}
              className={`text-left font-nav text-lg text-secondary hover:text-primary transition-all duration-300 py-2 tracking-wide transform border-b border-gray-100 last:border-b-0 rounded px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={(e) => handleGetQuote(e)}
            className={`w-full bg-accent text-white py-4 px-6 font-nav font-medium tracking-wide transition-all duration-500 hover:bg-accent/90 relative overflow-hidden group mt-6 rounded-lg transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${(navLinks.length + 1) * 100}ms` : '0ms' }}
          >
            <span className="relative z-10">Book a Shoot</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
