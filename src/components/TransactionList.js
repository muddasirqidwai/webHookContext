import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // we are forced to pass[] else it will perform infinete loop
  useEffect(() => {
    console.log("call api");
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} Transact={transaction} />
        ))}
      </ul>
    </div>
  );
};
