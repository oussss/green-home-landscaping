import React, { useEffect, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 transform scale-110 transition-transform duration-1000 ease-out">
        <img
          src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury landscape design in Dubai"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-medium text-white mb-6 leading-none tracking-tighter animate-slide-in-up">
          <span className="block animate-slide-in-up" style={{ animationDelay: '200ms' }}>
            Crafting Luxury
          </span>
          <span className="block font-semibold animate-slide-in-up -mt-1 lg:-mt-2" style={{ animationDelay: '400ms' }}>
            Outdoor Oases
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl font-body text-white/90 mb-8 font-light animate-slide-in-up" style={{ animationDelay: '600ms' }}>
          Award-winning landscape design in Dubai & UAE
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-in-up" style={{ animationDelay: '800ms' }}>
          <button 
            onClick={scrollToProjects}
            className="group bg-transparent border-2 border-white text-white px-8 py-3 font-nav font-medium transition-all duration-500 hover:scale-105 hover:bg-white hover:text-primary hover:shadow-2xl flex items-center space-x-2 hover:border-accent tracking-wide rounded-lg"
          >
            <span>View Our Work</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </button>
          
          <button className="group flex items-center space-x-3 text-white/90 hover:text-white transition-all duration-500 hover:scale-105">
            <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center group-hover:border-white transition-all duration-500 group-hover:bg-white/10 group-hover:rotate-6">
              <Play className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="font-nav font-medium tracking-wide">Watch Video</span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 text-center font-body">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;