import React from "react";
import { useState } from "react";
import "./body.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";

const Body = () => {
  const [money, setmoney] = useState(0);
  const handleAmount = (e) => {
    setmoney(e.target.value);
  };
  const balance = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { Withdraw, Deposite } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <div className="column">
        <button
          onClick={() => {
            Deposite(money);
          }}
        >
          Deposite
        </button>
        <button
          onClick={() => {
            Withdraw(money);
          }}
        >
          Withdraw
        </button>
        <div>
          <input
            placeholder="Enter Amount"
            onChange={(e) => handleAmount(e)}
          ></input>
        </div>
      </div>
      <div className="column.side">Balance:{balance}</div>
    </div>
  );
};

export default Body;
