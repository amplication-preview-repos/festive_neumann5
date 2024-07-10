import { SortOrder } from "../../util/SortOrder";

export type BikerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  username?: SortOrder;
  voiceChatRoomId?: SortOrder;
  insuranceReminderId?: SortOrder;
  locationId?: SortOrder;
};
