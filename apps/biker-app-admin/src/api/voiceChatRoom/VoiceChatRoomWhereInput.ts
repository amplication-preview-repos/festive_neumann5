import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BikerListRelationFilter } from "../biker/BikerListRelationFilter";
import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";

export type VoiceChatRoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  bikers?: BikerListRelationFilter;
  biker?: BikerWhereUniqueInput;
};
