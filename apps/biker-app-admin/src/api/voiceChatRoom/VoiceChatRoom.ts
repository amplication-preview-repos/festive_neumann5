import { Biker } from "../biker/Biker";

export type VoiceChatRoom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  bikers?: Array<Biker>;
  biker?: Biker | null;
};
