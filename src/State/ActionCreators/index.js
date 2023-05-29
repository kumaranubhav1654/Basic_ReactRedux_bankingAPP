//import React from "react";
//import dispatch from "react";

export const Deposite = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposite",
      payload: amount
    });
  };
};

export const Withdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount
    });
  };
};

// export const enterAmount = (enterAmount) => {
//   return (dispatch) => {
//     dispatch({
//       type: "Enter",
//       payload: enterAmount
//     });
//   };
// };
