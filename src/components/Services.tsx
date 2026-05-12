import React, { useEffect, useState } from 'react';
import { servicesData } from '../utils/constants';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const element = document.getElementById('services');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleBookSession = (serviceTitle: string) => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
        if (serviceSelect) {
          const serviceMapping: { [key: string]: string } = {
            'Hero Product Shots': 'hero-shots',
            'Flat Lay & Still Life': 'flat-lay',
            'Packaging Photography': 'packaging',
            'Lifestyle & In-Context': 'lifestyle',
            'Video & Reels Content': 'video',
          };
          const val = serviceMapping[serviceTitle];
          if (val) {
            serviceSelect.value = val;
            serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-primary mb-4 tracking-tighter">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-xl font-body text-secondary max-w-2xl mx-auto">
            From hero shots to full campaign libraries — everything your brand needs to stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white border border-gray-100 p-8 rounded-xl transition-all duration-700 hover:shadow-2xl hover:border-accent/20 hover:scale-105 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-6 text-accent transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <service.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4 transition-colors duration-300 group-hover:text-accent tracking-tight">
                  {service.title}
                </h3>
                <p className="font-body text-secondary mb-6 leading-relaxed transition-colors duration-300 group-hover:text-primary">
                  {service.description}
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-display font-medium text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110 inline-block">
                    {service.price}
                  </span>
                  <span className="font-body text-secondary text-sm ml-1">{service.unit}</span>
                </div>
                <button
                  onClick={() => handleBookSession(service.title)}
                  className="w-full bg-accent text-white py-3 px-6 font-nav font-medium tracking-wide transition-all duration-500 hover:bg-accent/90 hover:scale-105 hover:shadow-lg relative overflow-hidden group rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <span className="relative z-10">Book Session</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
