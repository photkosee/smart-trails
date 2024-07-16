export interface ExtraOption {
  id: number;
  name: string;
  img: string;
}

export const ExtraOptions: ExtraOption[] = [
  {
    id: 1,
    name: "Pet-Friendly",
    img: "hiking.png",
  },
  {
    id: 2,
    name: "Wheelchair-Friendly",
    img: "walking.png",
  },
  {
    id: 3,
    name: "Stroller-Friendly",
    img: "running.png",
  },
  {
    id: 4,
    name: "Kid-Friendly",
    img: "cycling.png",
  },
];
