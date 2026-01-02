
import React, { useState, useEffect } from 'react';
import { Apartment, Booking } from '../types';

interface BookNowPageProps {
  apartment: Apartment | null;
  allApartments: Apartment[];
  onSubmit: (booking: Booking) => void;
}

const BookNowPage: React.FC<BookNowPageProps> = ({ apartment, allApartments, onSubmit }) => {
  const [selectedId, setSelectedId] = useState(apartment?.id || '');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startDate: '',
    endDate: '',
    guests: 1
  });

  const selectedApt = allApartments.find(a => a.id === selectedId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedApt) return;

    const days = 3; // Simplified
    const booking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        apartmentId: selectedApt.id,
        guestName: formData.name,
        guestEmail: formData.email,
        startDate: formData.startDate,
        endDate: formData.endDate,
        totalPrice: selectedApt.pricePerNight * days,
        status: 'pending'
    };
    onSubmit(booking);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Complete Your Reservation</h1>
        <p className="text-slate-500">Secure your stay in just a few steps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-2xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Select Apartment</label>
            <select 
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50 font-medium"
              required
            >
              <option value="">Choose a residence...</option>
              {allApartments.map(apt => (
                <option key={apt.id} value={apt.id}>{apt.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Check In</label>
              <input 
                type="date" 
                required
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Check Out</label>
              <input 
                type="date" 
                required
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Guest Information</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50 mb-3"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-lg active:scale-95"
          >
            Confirm Reservation
          </button>
        </form>

        {/* Summary */}
        <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col">
            <h3 className="text-2xl font-bold mb-8">Reservation Summary</h3>
            {selectedApt ? (
                <div className="flex-grow space-y-8">
                    <div className="flex gap-4 items-center">
                        <img src={selectedApt.images[0]} className="w-20 h-20 rounded-xl object-cover" />
                        <div>
                            <h4 className="font-bold">{selectedApt.name}</h4>
                            <p className="text-slate-400 text-sm">{selectedApt.location}</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 pt-8 border-t border-white/10">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Nightly Rate</span>
                            <span className="font-bold">${selectedApt.pricePerNight}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Security Deposit</span>
                            <span className="font-bold">$0.00</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold pt-4">
                            <span>Total (Est.)</span>
                            <span className="text-amber-500">${selectedApt.pricePerNight * 3}</span>
                        </div>
                    </div>

                    <div className="mt-12 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3 text-amber-500 mb-2">
                            <i className="fa-solid fa-lock"></i>
                            <span className="font-bold text-sm">Secure Checkout</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Your payment information is encrypted and never stored on our servers. Flexible cancellation up to 48 hours before stay.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex-grow flex items-center justify-center text-slate-500 italic">
                    Select an apartment to see summary
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookNowPage;
