import { BadgeType, TTutor } from 'type/tutor';
import faker from 'faker';

export const TUTOR_LISTS: TTutor[] = [...Array(20)].map((_, index: number) => {
  return {
    id: faker.datatype.uuid(),
    avatar: 'https://d21xzygesx9h0w.cloudfront.net/TUTOROO-Russian-Tutor-Singapore-Lana-1040.jpg',
    name: faker.name.findName(),
    pricePerHouse: +faker.finance.amount(150, 250),
    rate: faker.datatype.number(5),
    totalHourRemain: faker.datatype.number(20),
    totalReview: faker.datatype.number(30),
    badge: faker.random.arrayElement(Object.values(BadgeType))
  };
});

export const getTutors = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(TUTOR_LISTS);
    }, 2000);
  });
