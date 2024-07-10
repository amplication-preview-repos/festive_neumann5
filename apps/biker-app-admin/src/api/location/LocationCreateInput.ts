import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";
import { BikerCreateNestedManyWithoutLocationsInput } from "./BikerCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  biker?: BikerWhereUniqueInput | null;
  bikers?: BikerCreateNestedManyWithoutLocationsInput;
};
