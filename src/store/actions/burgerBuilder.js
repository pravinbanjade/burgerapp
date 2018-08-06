import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name
  }
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name
  }
};

export const setIngredients = (ingredient) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredient: ingredient
  }
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
};

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://react-burger-builder-786.firebaseio.com/ingredient.json')
      .then( res => {
        dispatch(setIngredients(res.data));
      })
      .catch( error => {
        dispatch(fetchIngredientsFailed());
      });
  }
}
