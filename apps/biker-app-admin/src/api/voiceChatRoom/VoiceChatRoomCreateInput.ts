import { BikerCreateNestedManyWithoutVoiceChatRoomsInput } from "./BikerCreateNestedManyWithoutVoiceChatRoomsInput";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";

export type VoiceChatRoomCreateInput = {
  name?: string | null;
  bikers?: BikerCreateNestedManyWithoutVoiceChatRoomsInput;
  biker?: BikerWhereUniqueInput | null;
};
