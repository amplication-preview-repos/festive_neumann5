import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";
import { BikerListRelationFilter } from "../biker/BikerListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  biker?: BikerWhereUniqueInput;
  bikers?: BikerListRelationFilter;
};
