export const initialState = {
  basket: [
  ],
  subtotal: 0
};

export const getSutbtotal = basket => 
  basket?.reduce((amount, item) => 
  // Item comes from 'Product.js' --> reducer
    item.price + amount, 0
  )

const reducer = (state, action) => {
   
  switch (action.type) {
    case "ADD_TO_BASKET":
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
