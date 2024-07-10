import { VoiceChatRoomWhereUniqueInput } from "../voiceChatRoom/VoiceChatRoomWhereUniqueInput";
import { LocationCreateNestedManyWithoutBikersInput } from "./LocationCreateNestedManyWithoutBikersInput";
import { InsuranceReminderWhereUniqueInput } from "../insuranceReminder/InsuranceReminderWhereUniqueInput";
import { InsuranceReminderCreateNestedManyWithoutBikersInput } from "./InsuranceReminderCreateNestedManyWithoutBikersInput";
import { VoiceChatRoomCreateNestedManyWithoutBikersInput } from "./VoiceChatRoomCreateNestedManyWithoutBikersInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BikerCreateInput = {
  email?: string | null;
  username?: string | null;
  voiceChatRoom?: VoiceChatRoomWhereUniqueInput | null;
  locations?: LocationCreateNestedManyWithoutBikersInput;
  insuranceReminder?: InsuranceReminderWhereUniqueInput | null;
  insuranceReminders?: InsuranceReminderCreateNestedManyWithoutBikersInput;
  voiceChatRooms?: VoiceChatRoomCreateNestedManyWithoutBikersInput;
  location?: LocationWhereUniqueInput | null;
};
