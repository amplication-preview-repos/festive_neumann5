import { InsuranceReminderWhereInput } from "./InsuranceReminderWhereInput";
import { InsuranceReminderOrderByInput } from "./InsuranceReminderOrderByInput";

export type InsuranceReminderFindManyArgs = {
  where?: InsuranceReminderWhereInput;
  orderBy?: Array<InsuranceReminderOrderByInput>;
  skip?: number;
  take?: number;
};
