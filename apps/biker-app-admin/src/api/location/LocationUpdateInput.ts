import { BikerWhereUniqueInput } from "../biker/BikerWhereUniqueInput";
import { BikerUpdateManyWithoutLocationsInput } from "./BikerUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  biker?: BikerWhereUniqueInput | null;
  bikers?: BikerUpdateManyWithoutLocationsInput;
};
