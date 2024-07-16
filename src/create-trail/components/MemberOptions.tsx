export interface MemberOption {
  id: number;
  name: string;
  img: string;
}

export const MemberOptions: MemberOption[] = [
  {
    id: 1,
    name: "Solo",
    img: "hiking.png",
  },
  {
    id: 2,
    name: "Couple",
    img: "walking.png",
  },
  {
    id: 3,
    name: "Family",
    img: "running.png",
  },
  {
    id: 4,
    name: "Friends",
    img: "cycling.png",
  },
];
