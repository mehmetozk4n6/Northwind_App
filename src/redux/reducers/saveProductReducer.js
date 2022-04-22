import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCTS_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
