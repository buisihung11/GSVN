export enum BadgeType {
  DIAMOND = 'Kim cương',
  GOLD = 'Vàng'
}

export type TTutor = {
  id: string;
  badge?: BadgeType;
  name: string;
  rate: number;
  totalReview: number;
  pricePerHouse: number;
  totalHourRemain: number;
  avatar: string;
};
