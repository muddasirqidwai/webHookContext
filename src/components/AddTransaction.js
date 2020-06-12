import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Expense</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button
          className="btn"
          onClick={e => {
            e.preventDefault();

            addTransaction({
              id: Math.floor(Math.random() * 100000000),
              text: text,
              amount: +amount
            });
            setText("");
            setAmount(0);
          }}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};
