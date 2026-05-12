import React, { useEffect, useState } from 'react';
import { Award, Users, Clock, Camera } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ awards: 0, clients: 0, experience: 0, projects: 0 });

  const finalValues = { awards: 18, clients: 320, experience: 8, projects: 2400 };

  const stats = [
    { icon: Award, value: `${counters.awards}+`, label: 'Awards Won', key: 'awards' },
    { icon: Users, value: `${counters.clients}+`, label: 'Brand Clients', key: 'clients' },
    { icon: Clock, value: `${counters.experience}+`, label: 'Years Experience', key: 'experience' },
    { icon: Camera, value: `${counters.projects}+`, label: 'Shots Delivered', key: 'projects' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          Object.keys(finalValues).forEach((key) => {
            const target = finalValues[key as keyof typeof finalValues];
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) { current = target; clearInterval(timer); }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-primary mb-6 tracking-tighter">
              Obsessed With <span className="font-semibold">The Shot</span>
              <br />Since 2017
            </h2>

            <p className="text-xl font-body text-secondary mb-8 leading-relaxed">
              Shots Studio is a Dubai-based product photography studio built for brands that take 
              their visuals seriously. We combine technical mastery with creative storytelling to 
              produce images that sell, engage, and elevate your brand.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'State-of-the-art studio with full lighting & backdrop library',
                'Same-day turnaround available for urgent campaign launches',
                'Dedicated art direction & post-production retouching included'
              ].map((text, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0 animate-pulse-slow"></div>
                  <p className="font-body text-secondary">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-accent animate-pulse-slow" />
                  <div>
                    <div className="text-2xl font-display font-semibold text-primary">{stat.value}</div>
                    <div className="text-sm font-body text-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Shots Studio team at work"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>

            <div className={`absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl max-w-xs rounded-lg border-l-4 border-accent transition-all duration-1000 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              <h4 className="font-heading font-semibold text-primary mb-2">Layla Khalid</h4>
              <p className="text-sm font-body text-secondary mb-2">Founder & Creative Director</p>
              <p className="text-xs font-body text-secondary italic">
                "Every product has a story. Our job is to make sure the world sees it."
              </p>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent/10 rounded-full animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
