import { VoiceChatRoomWhereInput } from "./VoiceChatRoomWhereInput";
import { VoiceChatRoomOrderByInput } from "./VoiceChatRoomOrderByInput";

export type VoiceChatRoomFindManyArgs = {
  where?: VoiceChatRoomWhereInput;
  orderBy?: Array<VoiceChatRoomOrderByInput>;
  skip?: number;
  take?: number;
};
