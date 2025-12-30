export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_ALL = "CLEAR_ALL_CART";

export const addCart = (data) => {
    console.log(data.name + " a gya ")
    return {
        type: ADD_CART,
        data: data
    };
};

export const removeCart = (data) => {
    return {
        type: REMOVE_CART,
        data: data
    };
};

export const clearALlCart = () => {
    return {
        type: CLEAR_ALL
    }
}
