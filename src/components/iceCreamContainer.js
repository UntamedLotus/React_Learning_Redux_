import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>NUMBER_OF_ICE_CREAM - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
