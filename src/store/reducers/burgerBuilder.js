import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

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
      const updatedIngredient = { [action.ingredientName]: state.ingredient[action.ingredientName] + 1 };
      const updatedIngredients = updateObject(state.ingredient, updatedIngredient);
      const updatedState = {
        ingredient: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
      }
      return updateObject(state, updatedState);
    case actionTypes.REMOVE_INGREDIENTS:
      const updatedIng = { [action.ingredientName]: state.ingredient[action.ingredientName] - 1 };
      const updatedIngs = updateObject(state.ingredient, updatedIng);
      const updatedSt = {
        ingredient: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
      }
      return updateObject(state, updatedSt);
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredient: {
          salad: action.ingredient.salad,
          bacon: action.ingredient.bacon,
          cheese: action.ingredient.cheese,
          meat: action.ingredient.meat
        },
        totalPrice: 30,
        error: false
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
}

export default reducer;
