import { Biker as TBiker } from "../api/biker/Biker";

export const BIKER_TITLE_FIELD = "username";

export const BikerTitle = (record: TBiker): string => {
  return record.username?.toString() || String(record.id);
};
