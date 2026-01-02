
import React, { useState } from 'react';
import { Apartment, Booking } from '../types';
import { generateDescription } from '../services/geminiService';

interface AdminDashboardProps {
  apartments: Apartment[];
  bookings: Booking[];
  onUpdateApartments: (apartments: Apartment[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ apartments, bookings, onUpdateApartments }) => {
  const [activeTab, setActiveTab] = useState<'PROPERTIES' | 'BOOKINGS'>('PROPERTIES');
  const [isAdding, setIsAdding] = useState(false);
  const [newApt, setNewApt] = useState({ name: '', location: '', price: 0, amenities: '' });
  const [aiLoading, setAiLoading] = useState(false);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApt.name || !newApt.price) return;
    
    setAiLoading(true);
    
    const features = newApt.amenities.split(',').map(s => s.trim()).filter(s => s !== '');
    
    // Use Gemini for the heavy lifting of high-conversion copywriting
    const aiDesc = await generateDescription(newApt.name, features);

    const apt: Apartment = {
      id: Math.random().toString(36).substr(2, 9),
      name: newApt.name,
      location: newApt.location || 'Metropolis',
      pricePerNight: newApt.price,
      description: aiDesc || 'A premium UrbanStay residence.',
      amenities: features.length > 0 ? features : ['WiFi', 'Air Conditioning', 'Kitchen'],
      maxGuests: 4,
      images: [`https://picsum.photos/seed/${Math.random()}/800/600`],
      reviews: [],
      unavailableDates: []
    };
    
    onUpdateApartments([...apartments, apt]);
    setNewApt({ name: '', location: '', price: 0, amenities: '' });
    setIsAdding(false);
    setAiLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Control Panel</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your properties, track bookings, and grow your occupancy.</p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
          <button 
            onClick={() => setActiveTab('PROPERTIES')}
            className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'PROPERTIES' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Properties
          </button>
          <button 
            onClick={() => setActiveTab('BOOKINGS')}
            className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'BOOKINGS' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Bookings
          </button>
        </div>
      </div>

      {activeTab === 'PROPERTIES' ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-800">Property Portfolio <span className="text-slate-400 font-normal ml-2">({apartments.length})</span></h3>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${isAdding ? 'bg-slate-200 text-slate-600' : 'bg-amber-500 text-white hover:bg-amber-600 shadow-md'}`}
            >
              <i className={`fa-solid ${isAdding ? 'fa-xmark' : 'fa-plus'}`}></i>
              {isAdding ? 'Cancel' : 'New Property'}
            </button>
          </div>

          {isAdding && (
            <form onSubmit={handleAdd} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
              <div className="col-span-1 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Apartment Name</label>
                  <input 
                    type="text" placeholder="e.g. Skyline Executive Suite" required 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
                    value={newApt.name} onChange={e => setNewApt({...newApt, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Location</label>
                  <input 
                    type="text" placeholder="Neighborhood or Street" required 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
                    value={newApt.location} onChange={e => setNewApt({...newApt, location: e.target.value})}
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Price per night ($)</label>
                  <input 
                    type="number" placeholder="250" required 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
                    value={newApt.price || ''} onChange={e => setNewApt({...newApt, price: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Key Amenities (Separated by commas)</label>
                  <input 
                    type="text" placeholder="WiFi, Gym, Pool, Kitchen" 
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
                    value={newApt.amenities} onChange={e => setNewApt({...newApt, amenities: e.target.value})}
                  />
                </div>
              </div>
              <div className="col-span-full pt-4">
                <button 
                  type="submit"
                  disabled={aiLoading}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {aiLoading ? (
                    <>
                      <i className="fa-solid fa-sparkles animate-pulse text-amber-500"></i>
                      <span>AI Crafting Luxury Copy...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                      <span>Generate & Save with AI</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Property</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Location</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Price</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {apartments.map(apt => (
                  <tr key={apt.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <img src={apt.images[0]} className="w-10 h-10 rounded-lg object-cover" />
                            <span className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{apt.name}</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{apt.location}</td>
                    <td className="px-6 py-4 text-center font-bold text-slate-900">${apt.pricePerNight}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        LIVE
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="fa-solid fa-pen-to-square"></i></button>
                      <button className="text-slate-400 hover:text-rose-500 transition-colors"><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800">Booking Pipeline <span className="text-slate-400 font-normal ml-2">({bookings.length})</span></h3>
          {bookings.length > 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Guest Details</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Dates</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Revenue</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {bookings.map(book => (
                        <tr key={book.id}>
                            <td className="px-6 py-4">
                                <div className="font-bold text-slate-900">{book.guestName}</div>
                                <div className="text-xs text-slate-400">{book.guestEmail}</div>
                            </td>
                            <td className="px-6 py-4 text-slate-500 text-sm font-medium">
                                <i className="fa-regular fa-calendar-days mr-2 opacity-50"></i>
                                {book.startDate} — {book.endDate}
                            </td>
                            <td className="px-6 py-4 text-center font-bold text-slate-900 text-lg">${book.totalPrice}</td>
                            <td className="px-6 py-4 text-center">
                                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full border border-amber-100">CONFIRMED</span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          ) : (
            <div className="text-center py-32 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
              <i className="fa-solid fa-inbox text-5xl text-slate-200 mb-6 block"></i>
              <h4 className="text-xl font-bold text-slate-900 mb-2">No active bookings</h4>
              <p className="text-slate-400 max-w-xs mx-auto">Once guests start reserving your apartments, they will appear here in the pipeline.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
