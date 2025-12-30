import React from 'react'
import { addCart, clearALlCart, removeCart } from '../redux/action/action'
import { useDispatch } from 'react-redux'

const CartUI = () => {

    const dispatch = useDispatch();

    const product = {
        name: "Tshirt",
        ammount: "5000",
        discount: "20%",
        size: "XXL",
        count: 12,
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <button
                    className="btn btn-success mb-3"
                    style={{ width: "200px" }}
                    onClick={() => dispatch(addCart(product))}
                >
                    ADD + 1
                </button>

                <button
                    className="btn btn-danger mb-3"
                    style={{ width: "200px" }}
                    onClick={() => dispatch(removeCart(product))}
                >
                    REMOVE -1
                </button>

                <button
                    className="btn btn-warning mb-3"
                    style={{ width: "200px" }}
                    onClick={() => dispatch(clearALlCart())}
                >
                    CLEAR - ALL
                </button>
               
                
            </div>
        </>
    )
}

export default CartUI;