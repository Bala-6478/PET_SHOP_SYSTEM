export interface Pet {
  id: number;
  name: string;
  type: 'Dog' | 'Cat' | 'Bird' | 'Fish';
  breed: string;
  price: number;
  imageUrl: string;
  description: string;
}