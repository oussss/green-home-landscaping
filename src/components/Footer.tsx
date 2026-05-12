import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Hero Product Shots',
      'Flat Lay & Still Life',
      'Packaging Photography',
      'Lifestyle & In-Context',
      'Video & Reels Content',
    ],
    company: [
      'About Us',
      'Our Portfolio',
      'Testimonials',
      'Careers',
      'Contact',
    ],
    resources: [
      'Shot Guide',
      'Brand Prep Checklist',
      'Studio Rental Info',
      'Retouching Options',
      'FAQs',
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2 animate-slide-in-up">
              <div className="mb-6">
                <span className="text-2xl text-white" style={{ fontFamily: "'Gugi', sans-serif" }}>
                  Shots Studio
                </span>
              </div>
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Dubai’s premium product photography studio. We help brands create visuals
                that sell, engage, and tell a story worth remembering.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-accent transition-all duration-500 hover:scale-125 hover:rotate-12"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block" style={{ transitionDelay: `${index * 50}ms` }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="animate-slide-in-up" style={{ animationDelay: '400ms' }}>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block" style={{ transitionDelay: `${index * 50}ms` }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="animate-slide-in-up" style={{ animationDelay: '600ms' }}>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block" style={{ transitionDelay: `${index * 50}ms` }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-slide-in-up" style={{ animationDelay: '800ms' }}>
            <div className="text-white/70 text-sm">
              &copy; {currentYear} Shots Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
