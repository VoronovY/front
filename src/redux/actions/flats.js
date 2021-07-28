import { FLAT_INIT } from "../types/types";

export const initialFlat = (flatlist) => ({
  type: FLAT_INIT,
  payload: flatlist,
});
