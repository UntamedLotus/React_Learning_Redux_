import { BUY_CAKE } from "./cakeTypes";

// Action creator
export const buyCake = (number = 1) => {
  return {
    // action
    type: BUY_CAKE,
    payload: number,
  };
};
