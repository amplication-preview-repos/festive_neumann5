import { Biker } from "../biker/Biker";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  latitude: number | null;
  longitude: number | null;
  biker?: Biker | null;
  bikers?: Array<Biker>;
};
