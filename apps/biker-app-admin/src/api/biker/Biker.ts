import { VoiceChatRoom } from "../voiceChatRoom/VoiceChatRoom";
import { Location } from "../location/Location";
import { InsuranceReminder } from "../insuranceReminder/InsuranceReminder";

export type Biker = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  username: string | null;
  voiceChatRoom?: VoiceChatRoom | null;
  locations?: Array<Location>;
  insuranceReminder?: InsuranceReminder | null;
  insuranceReminders?: Array<InsuranceReminder>;
  voiceChatRooms?: Array<VoiceChatRoom>;
  location?: Location | null;
};
