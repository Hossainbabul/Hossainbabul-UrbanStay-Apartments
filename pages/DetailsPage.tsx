
import React, { useState } from 'react';
import { Apartment, ViewState } from '../types';

interface DetailsPageProps {
  apartment: Apartment;
  onNavigate: (view: ViewState, id?: string) => void;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ apartment, onNavigate }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={() => onNavigate('APARTMENTS')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <i className="fa-solid fa-arrow-left"></i> Back to search
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Gallery & Content */}
        <div className="lg:col-span-8">
          {/* Gallery */}
          <div className="space-y-4 mb-12">
            <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100">
              <img src={apartment.images[activeImage]} className="w-full h-full object-cover transition-opacity duration-500" alt={apartment.name} />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {apartment.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-amber-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{apartment.name}</h1>
            <p className="text-slate-500 flex items-center gap-2 mb-8">
              <i className="fa-solid fa-location-dot text-amber-500"></i>
              {apartment.location}
            </p>
            
            <div className="flex gap-12 border-y border-slate-100 py-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">{apartment.maxGuests}</div>
                <div className="text-sm text-slate-400">Guests Max</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">1</div>
                <div className="text-sm text-slate-400">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">1</div>
                <div className="text-sm text-slate-400">Baths</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">About this space</h3>
            <p className="text-slate-600 leading-relaxed mb-12 text-lg">
              {apartment.description}
            </p>

            <h3 className="text-2xl font-bold mb-6">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {apartment.amenities.map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-600">
                  <i className="fa-solid fa-check text-amber-500"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Reviews</h3>
            <div className="space-y-8">
              {apartment.reviews.length > 0 ? (
                apartment.reviews.map(review => (
                  <div key={review.id} className="bg-slate-50 p-6 rounded-2xl">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-slate-900">{review.userName}</span>
                      <div className="text-amber-500">
                        {[...Array(review.rating)].map((_, i) => <i key={i} className="fa-solid fa-star text-xs"></i>)}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-2">{review.comment}</p>
                    <span className="text-[10px] uppercase font-bold text-slate-400">{review.date}</span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">No reviews yet for this property.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Booking Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-3xl font-bold text-slate-900">${apartment.pricePerNight}</span>
                <span className="text-slate-400"> / night</span>
              </div>
              <div className="flex items-center text-amber-500 text-sm">
                <i className="fa-solid fa-star"></i>
                <span className="ml-1 font-bold text-slate-700">4.9</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
                <div className="p-3 border border-slate-200 rounded-xl">
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Stay Duration</label>
                    <div className="text-sm font-medium">Jan 12 - Jan 15</div>
                </div>
                <div className="p-3 border border-slate-200 rounded-xl">
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Guests</label>
                    <div className="text-sm font-medium">2 Guests</div>
                </div>
            </div>

            <button 
                onClick={() => onNavigate('BOOK', apartment.id)}
                className="w-full bg-slate-900 text-white py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all shadow-lg shadow-slate-200 active:scale-95 mb-6"
            >
                Reserve Now
            </button>

            <div className="space-y-3">
              <div className="flex justify-between text-sm text-slate-500">
                <span>${apartment.pricePerNight} x 3 nights</span>
                <span>${apartment.pricePerNight * 3}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>Cleaning fee</span>
                <span>$40</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>UrbanStay service fee</span>
                <span>$25</span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between font-bold text-slate-900 text-lg">
                <span>Total</span>
                <span>${apartment.pricePerNight * 3 + 40 + 25}</span>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-2">
                <i className="fa-solid fa-circle-info"></i> You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
