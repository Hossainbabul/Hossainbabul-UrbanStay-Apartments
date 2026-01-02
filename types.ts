
export interface Apartment {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  location: string;
  images: string[];
  amenities: string[];
  reviews: Review[];
  unavailableDates: string[]; // ISO format YYYY-MM-DD
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  apartmentId: string;
  guestName: string;
  guestEmail: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export type ViewState = 'HOME' | 'APARTMENTS' | 'DETAILS' | 'BOOK' | 'ABOUT' | 'CONTACT' | 'ADMIN';
