
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-8">Redefining the <span className="italic">Urban</span> Stay.</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Founded in 2018, UrbanStay was born out of a simple realization: travelers shouldn't have to choose between the soul of a local apartment and the reliability of a high-end hotel.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            We curated a portfolio of stunning properties, implemented rigorous maintenance standards, and layered on a 24/7 concierge service. Today, we manage over 50 premium residences across the city's most iconic districts.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-400">Residences</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">12k+</div>
              <div className="text-sm text-slate-400">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">4.9</div>
              <div className="text-sm text-slate-400">Avg Rating</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/id/101/800/1000" className="rounded-[3rem] shadow-2xl" />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden sm:block">
            <p className="text-slate-900 font-bold italic mb-2">"The best stay experience I've had in years. The attention to detail is unmatched."</p>
            <span className="text-sm text-slate-400">- Marcus V., CEO</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-16 rounded-[4rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">The Values That Guide Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Obsessive Quality', desc: 'Every apartment is personally inspected before every single guest arrival.' },
            { title: 'Local Connection', desc: 'We help you live like a local by providing insider guides to our neighborhoods.' },
            { title: 'Radical Safety', desc: 'Secure buildings, encrypted tech, and on-call security for peace of mind.' }
          ].map((val, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className={`fa-solid ${i === 0 ? 'fa-gem' : i === 1 ? 'fa-map' : 'fa-shield'} text-2xl text-amber-500`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4">{val.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
