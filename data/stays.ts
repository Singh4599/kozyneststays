export interface Stay {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  images: string[];
  slug: string;
}

export const stays: Stay[] = [
  {
    id: "1",
    name: "Kozynest Unit 1",
    location: "Paramount Golf Foreste, Greater Noida",
    price: 1400,
    image: "/images/properties/kozy-1/cover.jpg",
    images: [
      "/images/properties/kozy-1/cover.jpg",
      "/images/properties/kozy-1/2.jpg",
      "/images/properties/kozy-1/3.jpg",
    ],
    slug: "kozy-nest-1",
  },
  {
    id: "2",
    name: "Kozynest Unit 2",
    location: "Paramount Golf Foreste, Greater Noida",
    price: 1600,
    image: "/images/properties/kozy-2/cover.jpg",
    images: [
      "/images/properties/kozy-2/cover.jpg",
      "/images/properties/kozy-2/2.jpg",
      "/images/properties/kozy-2/3.jpg",
      "/images/properties/kozy-2/4.jpg",
      "/images/properties/kozy-2/5.jpg",
    ],
    slug: "kozy-nest-2",
  },
  {
    id: "3",
    name: "Kozynest Unit 3",
    location: "Paramount Golf Foreste, Greater Noida",
    price: 1600,
    image: "/images/properties/kozy-3/cover.jpg",
    images: [
      "/images/properties/kozy-3/cover.jpg",
      "/images/properties/kozy-3/2.jpg",
      "/images/properties/kozy-3/3.jpg",
      "/images/properties/kozy-3/4.jpg",
      "/images/properties/kozy-3/5.jpg",
      "/images/properties/kozy-3/6.jpg",
      "/images/properties/kozy-3/7.jpg",
      "/images/properties/kozy-3/8.jpg",
    ],
    slug: "kozy-nest-3",
  },
  {
    id: "4",
    name: "Kozynest Unit 4",
    location: "Paramount Golf Foreste, Greater Noida",
    price: 1600,
    image: "/images/properties/kozy-4/cover.jpg",
    images: [
      "/images/properties/kozy-4/cover.jpg",
      "/images/properties/kozy-4/2.jpg",
      "/images/properties/kozy-4/3.jpg",
      "/images/properties/kozy-4/4.jpg",
      "/images/properties/kozy-4/5.jpg",
      "/images/properties/kozy-4/6.jpg",
    ],
    slug: "kozy-nest-4",
  },
  {
    id: "5",
    name: "Kozynest Unit 5",
    location: "Paramount Golf Foreste, Greater Noida",
    price: 1700,
    image: "/images/properties/kozy-5/cover.jpg",
    images: [
      "/images/properties/kozy-5/cover.jpg",
      "/images/properties/kozy-5/2.jpg",
      "/images/properties/kozy-5/3.jpg",
      "/images/properties/kozy-5/4.jpg",
      "/images/properties/kozy-5/5.jpg",
    ],
    slug: "kozy-nest-5",
  },
];
