import { BikerUpdateManyWithoutVoiceChatRoomsInput } from "./BikerUpdateManyWithoutVoiceChatRoomsInput";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";

export type VoiceChatRoomUpdateInput = {
  name?: string | null;
  bikers?: BikerUpdateManyWithoutVoiceChatRoomsInput;
  biker?: BikerWhereUniqueInput | null;
};
