import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number_Of_Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;

// useSelector hook accepts a function as it's parameter this particular function is called selector function.
// This selector function receives the redux state as it's argument.
// It's similar to the mapStateToProps function

// useDispatch hook returns a reference to the dispatch function from the Redux store.
