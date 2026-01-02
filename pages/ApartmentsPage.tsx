
import React, { useState, useMemo } from 'react';
import { Apartment, ViewState } from '../types';

interface ApartmentsPageProps {
  apartments: Apartment[];
  onNavigate: (view: ViewState, id?: string) => void;
}

const ApartmentsPage: React.FC<ApartmentsPageProps> = ({ apartments, onNavigate }) => {
  const [filter, setFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState(500);

  const filteredApartments = useMemo(() => {
    return apartments.filter(apt => 
      (apt.name.toLowerCase().includes(filter.toLowerCase()) || 
       apt.location.toLowerCase().includes(filter.toLowerCase())) &&
      apt.pricePerNight <= maxPrice
    );
  }, [apartments, filter, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Apartments</h1>
        <p className="text-slate-500">Discover our collection of premium urban residences.</p>
      </div>

      {/* Filters */}
      <div className="bg-slate-50 p-6 rounded-2xl mb-12 flex flex-col md:flex-row gap-6 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-semibold text-slate-700 mb-2">Search Location or Name</label>
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="e.g. Downtown"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        
        <div className="w-full md:w-64">
          <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price (${maxPrice})</label>
          <input 
            type="range" 
            min="50" 
            max="500" 
            step="10"
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>$50</span>
            <span>$500+</span>
          </div>
        </div>

        <button 
          onClick={() => { setFilter(''); setMaxPrice(500); }}
          className="text-amber-600 font-semibold text-sm hover:underline"
        >
          Reset Filters
        </button>
      </div>

      {/* Grid */}
      {filteredApartments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredApartments.map(apt => (
            <div 
              key={apt.id} 
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              onClick={() => onNavigate('DETAILS', apt.id)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={apt.images[0]} 
                  alt={apt.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                  {apt.location}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{apt.name}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{apt.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {apt.amenities.slice(0, 3).map(amenity => (
                        <span key={amenity} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                            {amenity}
                        </span>
                    ))}
                    {apt.amenities.length > 3 && <span className="text-[10px] text-slate-400 mt-1">+{apt.amenities.length - 3} more</span>}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <div>
                    <span className="text-2xl font-bold text-slate-900">${apt.pricePerNight}</span>
                    <span className="text-slate-400 text-sm"> / night</span>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
            <i className="fa-regular fa-face-frown text-6xl text-slate-200 mb-6"></i>
            <h3 className="text-2xl font-bold text-slate-900">No apartments found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your filters to find your perfect stay.</p>
        </div>
      )}
    </div>
  );
};

export default ApartmentsPage;
