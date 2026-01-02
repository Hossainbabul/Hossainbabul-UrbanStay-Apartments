
import React, { useState } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'HOME' },
    { label: 'Apartments', view: 'APARTMENTS' },
    { label: 'About', view: 'ABOUT' },
    { label: 'Contact', view: 'CONTACT' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('HOME')}
              className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2"
            >
              <i className="fa-solid fa-building-circle-check text-amber-500"></i>
              <span>UrbanStay</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`text-sm font-medium transition-colors ${
                  currentView === item.view ? 'text-amber-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('BOOK')}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Book Now
            </button>
            <button 
              onClick={() => onNavigate('ADMIN')}
              className="text-slate-400 hover:text-slate-900 transition-colors"
              title="Admin Access"
            >
              <i className="fa-solid fa-user-gear"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                onNavigate(item.view);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('BOOK');
              setIsMenuOpen(false);
            }}
            className="block w-full bg-slate-900 text-white text-center px-4 py-3 rounded-lg font-semibold"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
