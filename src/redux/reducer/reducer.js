import { ADD_CART, REMOVE_CART, CLEAR_ALL } from "../action/action";

const initialState = [];

export const cartData = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CART:
            return [action.data, ...state];

        case REMOVE_CART:
            return state.length > 0 ? state.slice(0, -1) : state;

        case CLEAR_ALL:
            return [];

        default:
            return state;
    }
};
