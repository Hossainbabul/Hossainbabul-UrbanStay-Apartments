
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">How can we help?</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Our team is available 24/7 to assist with bookings, local recommendations, or any issues during your stay.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Direct Support</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                  <p className="font-medium">+1 (555) 000-1234</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">WhatsApp</p>
                  <p className="font-medium">+1 (555) 000-5678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Our Office</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              123 City Center Plaza,<br />
              Suite 400, Metropolis, NY 10001
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Message Type</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500">
                  <option>General Inquiry</option>
                  <option>Booking Modification</option>
                  <option>Partnership Proposal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Your Message</label>
                <textarea rows={5} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
