import { SortOrder } from "../../util/SortOrder";

export type InsuranceReminderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reminderDate?: SortOrder;
  bikerId?: SortOrder;
};
