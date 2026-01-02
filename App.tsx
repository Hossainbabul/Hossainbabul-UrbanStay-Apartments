
import React, { useState, useEffect, useCallback } from 'react';
import { Apartment, Booking, ViewState } from './types';
import { INITIAL_APARTMENTS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ApartmentsPage from './pages/ApartmentsPage';
import DetailsPage from './pages/DetailsPage';
import BookNowPage from './pages/BookNowPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [apartments, setApartments] = useState<Apartment[]>(INITIAL_APARTMENTS);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null);

  // Simple Router Logic
  const navigate = useCallback((newView: ViewState, id?: string) => {
    setView(newView);
    if (id) setSelectedApartmentId(id);
    window.scrollTo(0, 0);
  }, []);

  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
    // Update apartment availability
    setApartments(prev => prev.map(apt => {
        if (apt.id === booking.apartmentId) {
            // Add range of dates to unavailable (simplified)
            return { ...apt, unavailableDates: [...apt.unavailableDates, booking.startDate, booking.endDate] };
        }
        return apt;
    }));
    navigate('HOME');
    alert("Booking confirmed! Check your email for details.");
  };

  const selectedApartment = apartments.find(a => a.id === selectedApartmentId);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar currentView={view} onNavigate={navigate} />
      
      <main className="flex-grow pt-16">
        {view === 'HOME' && (
          <HomePage onNavigate={navigate} featuredApartments={apartments.slice(0, 3)} />
        )}
        {view === 'APARTMENTS' && (
          <ApartmentsPage apartments={apartments} onNavigate={navigate} />
        )}
        {view === 'DETAILS' && selectedApartment && (
          <DetailsPage apartment={selectedApartment} onNavigate={navigate} />
        )}
        {view === 'BOOK' && (
          <BookNowPage 
            apartment={selectedApartment || null} 
            allApartments={apartments}
            onSubmit={addBooking} 
          />
        )}
        {view === 'ABOUT' && <AboutPage />}
        {view === 'CONTACT' && <ContactPage />}
        {view === 'ADMIN' && (
            <AdminDashboard 
                apartments={apartments} 
                bookings={bookings} 
                onUpdateApartments={setApartments}
            />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
