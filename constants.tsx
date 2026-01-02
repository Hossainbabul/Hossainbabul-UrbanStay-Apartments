
import { Apartment } from './types';

export const INITIAL_APARTMENTS: Apartment[] = [
  {
    id: '1',
    name: 'Skyline Penthouse',
    description: 'A breathtaking 32nd-floor penthouse with floor-to-ceiling windows overlooking the city skyline. Features a private terrace and luxury finishes throughout.',
    pricePerNight: 350,
    maxGuests: 4,
    location: 'Downtown Core',
    images: ['https://picsum.photos/id/10/800/600', 'https://picsum.photos/id/20/800/600'],
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym', 'Balcony'],
    reviews: [
      { id: 'r1', userName: 'John Doe', rating: 5, comment: 'Incredible views and super clean!', date: '2023-10-15' }
    ],
    unavailableDates: ['2023-12-25', '2023-12-26']
  },
  {
    id: '2',
    name: 'Industrial Loft',
    description: 'Exposed brick, high ceilings, and an open floor plan in the heart of the arts district. Perfect for creative travelers.',
    pricePerNight: 180,
    maxGuests: 2,
    location: 'Arts District',
    images: ['https://picsum.photos/id/30/800/600', 'https://picsum.photos/id/40/800/600'],
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Laundry'],
    reviews: [],
    unavailableDates: []
  },
  {
    id: '3',
    name: 'Boho Garden Suite',
    description: 'A peaceful oasis with a private backyard garden. Quiet, sun-drenched, and beautifully decorated with natural materials.',
    pricePerNight: 120,
    maxGuests: 2,
    location: 'Quiet Suburbs',
    images: ['https://picsum.photos/id/50/800/600', 'https://picsum.photos/id/60/800/600'],
    amenities: ['WiFi', 'Garden', 'Parking', 'Kitchen'],
    reviews: [
      { id: 'r2', userName: 'Alice Smith', rating: 4, comment: 'Lovely garden area, very peaceful.', date: '2023-11-01' }
    ],
    unavailableDates: []
  }
];
