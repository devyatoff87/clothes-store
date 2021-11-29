import { createSelector } from "reselect";

const layout = (state) => {
  return state.layout
}

export const selectClickByOutside = createSelector([layout], (layout) => layout.clickOutside);