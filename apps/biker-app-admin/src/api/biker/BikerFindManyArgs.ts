import { BikerWhereInput } from "./BikerWhereInput";
import { BikerOrderByInput } from "./BikerOrderByInput";

export type BikerFindManyArgs = {
  where?: BikerWhereInput;
  orderBy?: Array<BikerOrderByInput>;
  skip?: number;
  take?: number;
};
