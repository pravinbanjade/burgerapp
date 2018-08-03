import * as actionTypes from './actions';

const initialState = {
  ingredient : {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 30,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] + 1
        }
      }
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] - 1
        }
      }
    default:
      return state;
  }
}

export default reducer;
