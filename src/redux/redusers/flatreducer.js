import { FLAT_INIT } from "../types/types";

export default function flatReducer(state = [], action) {
  const { type } = action;
  switch (type) {
    case FLAT_INIT: {
      return action.payload;
    }
    default:
      return state;
  }
}
