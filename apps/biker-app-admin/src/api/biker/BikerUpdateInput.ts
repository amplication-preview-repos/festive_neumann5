import { VoiceChatRoomWhereUniqueInput } from "../voiceChatRoom/VoiceChatRoomWhereUniqueInput";
import { LocationUpdateManyWithoutBikersInput } from "./LocationUpdateManyWithoutBikersInput";
import { InsuranceReminderWhereUniqueInput } from "../insuranceReminder/InsuranceReminderWhereUniqueInput";
import { InsuranceReminderUpdateManyWithoutBikersInput } from "./InsuranceReminderUpdateManyWithoutBikersInput";
import { VoiceChatRoomUpdateManyWithoutBikersInput } from "./VoiceChatRoomUpdateManyWithoutBikersInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BikerUpdateInput = {
  email?: string | null;
  username?: string | null;
  voiceChatRoom?: VoiceChatRoomWhereUniqueInput | null;
  locations?: LocationUpdateManyWithoutBikersInput;
  insuranceReminder?: InsuranceReminderWhereUniqueInput | null;
  insuranceReminders?: InsuranceReminderUpdateManyWithoutBikersInput;
  voiceChatRooms?: VoiceChatRoomUpdateManyWithoutBikersInput;
  location?: LocationWhereUniqueInput | null;
};
