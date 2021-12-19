import directoryItemsOnline from "../../data/directory-data.json";
import { directoryItemsLocal } from "../../data/directory-data.js"


const directoryItems = window.navigator.onLine ? directoryItemsOnline : directoryItemsLocal

const init = {
  sections: directoryItems,
};

const direcotryReducer = (state = init, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default direcotryReducer;
