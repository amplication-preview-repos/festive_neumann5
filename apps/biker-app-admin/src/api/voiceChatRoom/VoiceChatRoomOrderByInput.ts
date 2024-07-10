import { SortOrder } from "../../util/SortOrder";

export type VoiceChatRoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  bikerId?: SortOrder;
};
