
import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <button 
              onClick={() => onNavigate('HOME')}
              className="text-white text-2xl font-bold mb-6 flex items-center gap-2"
            >
              <i className="fa-solid fa-building-circle-check text-amber-500"></i>
              UrbanStay
            </button>
            <p className="text-slate-400 leading-relaxed mb-6">
              Modern urban living for the discerning traveler. Premium apartments in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('HOME')} className="hover:text-amber-500 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('APARTMENTS')} className="hover:text-amber-500 transition-colors">Apartments</button></li>
              <li><button onClick={() => onNavigate('ABOUT')} className="hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('CONTACT')} className="hover:text-amber-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Booking Guide</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-amber-500"></i>
                <span>123 City Center Plaza,<br />Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-amber-500"></i>
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-amber-500"></i>
                <span>hello@urbanstay.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023 UrbanStay Apartments. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
