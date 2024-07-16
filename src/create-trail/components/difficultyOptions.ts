export interface difficultyOptionProps {
  id: number;
  name: string;
  img: string;
}

export const difficultyOptions: difficultyOptionProps[] = [
  {
    id: 1,
    name: "Easy",
    img: "https://images.pexels.com/photos/23225178/pexels-photo-23225178/free-photo-of-woman-in-hat-drinking-water-on-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Moderate",
    img: "https://images.pexels.com/photos/23325634/pexels-photo-23325634/free-photo-of-climber-in-orange-jacket-on-rock-in-zittau-mountains-nature-park-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Difficult",
    img: "https://images.pexels.com/photos/7084334/pexels-photo-7084334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Challenging",
    img: "https://images.pexels.com/photos/4736967/pexels-photo-4736967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
