export const initialState = {
  basket: [
  ],
  subtotal: 0
};

const reducer = (state, action) => {
   
  switch (action.type) {
    case "ADD_TO_BASKET":

        console.log(state)
      return {
        ...state,
        basket: [...state.basket, action.item],
        subtotal: parseFloat(state.subtotal) + parseFloat(action.item.price)
      };
      

    default:
      return state;
  }
};

export default reducer;
