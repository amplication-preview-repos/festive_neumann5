import { VoiceChatRoom as TVoiceChatRoom } from "../api/voiceChatRoom/VoiceChatRoom";

export const VOICECHATROOM_TITLE_FIELD = "name";

export const VoiceChatRoomTitle = (record: TVoiceChatRoom): string => {
  return record.name?.toString() || String(record.id);
};
