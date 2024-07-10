import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoiceChatRoomWhereUniqueInput } from "../voiceChatRoom/VoiceChatRoomWhereUniqueInput";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { InsuranceReminderWhereUniqueInput } from "../insuranceReminder/InsuranceReminderWhereUniqueInput";
import { InsuranceReminderListRelationFilter } from "../insuranceReminder/InsuranceReminderListRelationFilter";
import { VoiceChatRoomListRelationFilter } from "../voiceChatRoom/VoiceChatRoomListRelationFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BikerWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  username?: StringNullableFilter;
  voiceChatRoom?: VoiceChatRoomWhereUniqueInput;
  locations?: LocationListRelationFilter;
  insuranceReminder?: InsuranceReminderWhereUniqueInput;
  insuranceReminders?: InsuranceReminderListRelationFilter;
  voiceChatRooms?: VoiceChatRoomListRelationFilter;
  location?: LocationWhereUniqueInput;
};
