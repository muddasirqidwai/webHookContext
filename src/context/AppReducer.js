export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_TRANSACTIONS":
      console.log(action.type);
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case "DELETE_TRANSACTION":
      console.log("preState", state);
      let result = {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload
        )
      };
      console.log("postState", result);
      return result;
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
