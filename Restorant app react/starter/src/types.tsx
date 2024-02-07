export type ImageType = {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  isFavourite: boolean;
  reviewsList: [
    {
      id: number;
      author: string;
      comment: string;
      stars: number;
    }
  ];
};
