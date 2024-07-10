import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BikerListRelationFilter } from "../biker/BikerListRelationFilter";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";

export type InsuranceReminderWhereInput = {
  id?: StringFilter;
  reminderDate?: DateTimeNullableFilter;
  bikers?: BikerListRelationFilter;
  biker?: BikerWhereUniqueInput;
};
