import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ Transact }) => {
  const sign = Transact.amount < 0 ? "-" : "+";
  const cssClassname = Transact.amount < 0 ? "minus" : "plus";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className={cssClassname} key={Transact.id}>
        {Transact.text}{" "}
        <span>
          {sign}${Math.abs(Transact.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(Transact._id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Transaction;
