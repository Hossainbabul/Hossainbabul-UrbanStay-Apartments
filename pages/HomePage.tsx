
import React from 'react';
import { Apartment, ViewState } from '../types';

interface HomePageProps {
  onNavigate: (view: ViewState, id?: string) => void;
  featuredApartments: Apartment[];
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, featuredApartments }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/431/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elevate Your <span className="text-amber-500">Urban</span> Experience.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Curated premium apartments in the world's most vibrant neighborhoods. Stay where the action is, in comfort that feels like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('APARTMENTS')}
                className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all shadow-lg active:scale-95"
              >
                Browse Apartments
              </button>
              <button 
                onClick={() => onNavigate('ABOUT')}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 items-center grayscale opacity-60">
            <span className="text-2xl font-bold text-slate-400 flex items-center gap-2"><i className="fa-brands fa-airbnb"></i> Airbnb Superhost</span>
            <span className="text-2xl font-bold text-slate-400 flex items-center gap-2"><i className="fa-solid fa-award"></i> Hospitality Excellence</span>
            <span className="text-2xl font-bold text-slate-400 flex items-center gap-2"><i className="fa-solid fa-shield-halved"></i> 100% Secure</span>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Our Selection</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Handpicked Residences</h2>
          </div>
          <button 
            onClick={() => onNavigate('APARTMENTS')}
            className="text-amber-600 font-semibold hover:underline flex items-center gap-2"
          >
            View All Properties <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredApartments.map(apt => (
            <div 
              key={apt.id} 
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => onNavigate('DETAILS', apt.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={apt.images[0]} 
                  alt={apt.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{apt.name}</h3>
                    <div className="flex items-center text-amber-500 text-sm">
                        <i className="fa-solid fa-star"></i>
                        <span className="ml-1 font-bold text-slate-700">4.9</span>
                    </div>
                </div>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{apt.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-lg font-bold text-slate-900">${apt.pricePerNight} <span className="text-slate-400 text-sm font-normal">/ night</span></span>
                  <div className="flex gap-3 text-slate-400 text-xs">
                    <span><i className="fa-solid fa-user-group"></i> {apt.maxGuests}</span>
                    <span><i className="fa-solid fa-bed"></i> 1</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The UrbanStay Difference</h2>
            <p className="text-slate-400 max-w-xl mx-auto">More than just a room. We provide a comprehensive hospitality experience designed for modern life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-location-crosshairs', title: 'Prime Locations', desc: 'Step out into the most vibrant parts of the city.' },
              { icon: 'fa-broom', title: 'Hotel Standards', desc: 'Professionally cleaned and managed to high standards.' },
              { icon: 'fa-key', title: 'Easy Access', desc: 'Contactless check-in and 24/7 digital support.' },
              { icon: 'fa-wifi', title: 'Remote Work Ready', desc: 'Ultra-fast WiFi and dedicated work spaces.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <i className={`fa-solid ${feature.icon} text-3xl text-amber-500 mb-6`}></i>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="bg-amber-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for your next stay?</h2>
            <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto">Book your urban retreat today and enjoy exclusive member pricing and flexible cancellation.</p>
            <button 
                onClick={() => onNavigate('APARTMENTS')}
                className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95"
            >
                Check Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
