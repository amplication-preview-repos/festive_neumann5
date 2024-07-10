import { BikerUpdateManyWithoutInsuranceRemindersInput } from "./BikerUpdateManyWithoutInsuranceRemindersInput";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";

export type InsuranceReminderUpdateInput = {
  reminderDate?: Date | null;
  bikers?: BikerUpdateManyWithoutInsuranceRemindersInput;
  biker?: BikerWhereUniqueInput | null;
};
