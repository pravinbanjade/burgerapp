import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredient : null,
  totalPrice: 30,
  error: false
};

const INGREDIENT_PRICE = {
  salad: 30,
  cheese: 40,
  meat: 50,
  bacon: 35
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
      }
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredient: {
          salad: action.ingredient.salad,
          bacon: action.ingredient.bacon,
          cheese: action.ingredient.cheese,
          meat: action.ingredient.meat
        },
        error: false
      }
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;
