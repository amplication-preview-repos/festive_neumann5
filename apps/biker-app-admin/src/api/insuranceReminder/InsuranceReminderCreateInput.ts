import { BikerCreateNestedManyWithoutInsuranceRemindersInput } from "./BikerCreateNestedManyWithoutInsuranceRemindersInput";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";

export type InsuranceReminderCreateInput = {
  reminderDate?: Date | null;
  bikers?: BikerCreateNestedManyWithoutInsuranceRemindersInput;
  biker?: BikerWhereUniqueInput | null;
};
