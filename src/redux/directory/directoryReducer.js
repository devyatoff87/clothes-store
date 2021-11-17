import { imgs } from "data/directory-data.js";

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
