import { Biker } from "../biker/Biker";

export type InsuranceReminder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reminderDate: Date | null;
  bikers?: Array<Biker>;
  biker?: Biker | null;
};
