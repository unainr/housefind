export interface Album {
  id:number
    name: string
    bio: string
    image: string
    Parking:number
    Bathrooms: number
    Bedrooms: number
  }
  
  export const listenNowAlbums: Album[] = [
    { id: 1, name: 'Emily Clark', Parking:2,  Bathrooms:2,  Bedrooms:3, bio: 'Specializing in sustainable home decor', image: '/images/p1.jpg' },
    { id: 2, name: 'Sophia Taylor', Parking:4,  Bathrooms:1, Bedrooms:2,  bio: 'Expert in modern minimalist interiors', image: '/images/p2.jpg' },
    { id: 3, name: 'Olivia Brown',  Parking:1, Bathrooms:5,  Bedrooms:1, bio: 'Focusing on vibrant and eclectic designs', image: '/images/p3.jpg' },
    { id: 4, name: 'Liam Johnson',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: 'Expert in luxury residential design', image: '/images/p2.jpg' },
    { id: 5, name: 'Olivia Brown ',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: ' South Sun House', image: '/images/p5.jpg' },
    { id: 6, name: 'Emily Clark ',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: ' Pine Forest Bungalow', image: '/images/p6.jpg' },
  ]
  
  export const madeForYouAlbums: Album[] = [
    { id: 1, name: 'Emily Clark', Parking:2,  Bathrooms:2,  Bedrooms:3, bio: 'Specializing in sustainable home decor', image: '/images/p-1.jpg' },
    { id: 2, name: 'Sophia Taylor', Parking:4,  Bathrooms:1, Bedrooms:2,  bio: 'Expert in modern minimalist interiors', image: '/images/p2-2.jpg' },
    { id: 3, name: 'Olivia Brown',  Parking:1, Bathrooms:5,  Bedrooms:1, bio: 'Focusing on vibrant and eclectic designs', image: '/images/p3-1.jpg' },
    { id: 4, name: 'Liam Johnson',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: 'Expert in luxury residential design', image: '/images/p4-3.jpg' },
    { id: 5, name: 'Olivia Brown ',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: ' South Sun House', image: '/images/p5-1.jpg' },
    { id: 6, name: 'Emily Clark ',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: ' Pine Forest Bungalow', image: '/images/p6-2.jpg' },
  ]