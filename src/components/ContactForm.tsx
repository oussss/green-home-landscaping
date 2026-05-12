import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', service: '', budget: '', timeline: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name': return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email': return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
      case 'phone': return !/^\+?[\d\s\-\(\)]{10,}$/.test(value) ? 'Please enter a valid phone number' : '';
      case 'message': return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default: return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'budget' && key !== 'timeline') {
        const error = validateField(key, value);
        if (error) newErrors[key] = error;
      }
    });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', timeline: '', message: '' });
    } catch { setSubmitStatus('error'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <section id="contact" className="py-20 bg-light relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-primary mb-4 tracking-tighter">
            Let's Create Your <span className="font-semibold">Next Campaign</span>
          </h2>
          <p className="text-xl font-body text-secondary max-w-2xl mx-auto">
            Ready to elevate your product visuals? Book a shoot or request a quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-heading font-semibold text-primary mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', content: '+971 4 555 0199', delay: '200ms' },
                { icon: Mail, title: 'Email', content: 'hello@shotsstudio.ae', delay: '300ms' },
                { icon: MapPin, title: 'Studio', content: 'Dubai Design District (d3), UAE', delay: '400ms' },
                { icon: Clock, title: 'Hours', content: 'Sun–Thu: 8AM–7PM', delay: '500ms' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: item.delay }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-primary">{item.title}</p>
                    <p className="font-body text-secondary">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-white p-8 shadow-lg rounded-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                    className={`w-full p-4 border-2 ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-accent outline-none transition-all duration-300 rounded-lg group-hover:border-accent/50 font-body`}
                    placeholder="Full Name *" />
                  {errors.name && <p className="text-red-500 text-sm mt-1 animate-shake font-body">{errors.name}</p>}
                </div>
                <div className="relative group">
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className={`w-full p-4 border-2 ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:border-accent outline-none transition-all duration-300 rounded-lg group-hover:border-accent/50 font-body`}
                    placeholder="Email Address *" />
                  {errors.email && <p className="text-red-500 text-sm mt-1 animate-shake font-body">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                    className={`w-full p-4 border-2 ${errors.phone ? 'border-red-300' : 'border-gray-200'} focus:border-accent outline-none transition-all duration-300 rounded-lg group-hover:border-accent/50 font-body`}
                    placeholder="Phone Number *" />
                  {errors.phone && <p className="text-red-500 text-sm mt-1 animate-shake font-body">{errors.phone}</p>}
                </div>
                <select name="service" value={formData.service} onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 focus:border-accent outline-none transition-all duration-300 rounded-lg hover:border-accent/50 font-body">
                  <option value="">Select Service</option>
                  <option value="hero-shots">Hero Product Shots</option>
                  <option value="flat-lay">Flat Lay &amp; Still Life</option>
                  <option value="packaging">Packaging Photography</option>
                  <option value="lifestyle">Lifestyle &amp; In-Context</option>
                  <option value="video">Video &amp; Reels Content</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="budget" value={formData.budget} onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 focus:border-accent outline-none transition-all duration-300 rounded-lg hover:border-accent/50 font-body">
                  <option value="">Budget Range (AED)</option>
                  <option value="under-2k">Under 2,000</option>
                  <option value="2k-5k">2,000 – 5,000</option>
                  <option value="5k-15k">5,000 – 15,000</option>
                  <option value="over-15k">Over 15,000</option>
                </select>
                <select name="timeline" value={formData.timeline} onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 focus:border-accent outline-none transition-all duration-300 rounded-lg hover:border-accent/50 font-body">
                  <option value="">Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="relative group">
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5}
                  className={`w-full p-4 border-2 ${errors.message ? 'border-red-300' : 'border-gray-200'} focus:border-accent outline-none transition-all duration-300 resize-none rounded-lg group-hover:border-accent/50 font-body`}
                  placeholder="Tell us about your products and what you're looking to achieve... *" />
                {errors.message && <p className="text-red-500 text-sm mt-1 animate-shake font-body">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}
                className={`w-full bg-accent text-white py-4 px-8 font-nav font-medium tracking-wide transition-all duration-500 flex items-center justify-center space-x-2 rounded-lg relative overflow-hidden group ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent/90 hover:scale-105 hover:shadow-2xl'
                }`}>
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending...</span></>
                ) : (
                  <><Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" /><span>Send Message</span></>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-accent bg-accent/10 p-4 rounded-lg animate-slide-in-up">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-body">Thank you! We’ll be in touch within 24 hours.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg animate-shake">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-body">Something went wrong. Please try again or email us directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
