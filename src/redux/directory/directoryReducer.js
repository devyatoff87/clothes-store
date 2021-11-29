import directoryItemsOnline from "../../data/directory-data.json";
import { directoryItemsLocal } from "../../data/directory-data.js"

const imgs = (() => {
  if (window.navigator.onLine) {
    return directoryItemsOnline
  }
  return directoryItemsLocal
})()



const init = {
  sections: imgs,
};

const direcotryReducer = (state = init, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default direcotryReducer;
