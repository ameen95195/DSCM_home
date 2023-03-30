import React from 'react';


import {useDispatch, useSelector} from "react-redux";



import { DeleteOutline } from '@mui/icons-material';

import "./Cart.scss";
import {removeItem, resetCart} from "../../redux/cartReducer.js";
import {useNavigate} from "react-router-dom";

function Cart(props) {

    const drugs = useSelector((state) => state.cart.drugs);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const totalPrice = () => {
        let total = 0;
        drugs.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };

    function handleDelete(id) {
        dispatch(removeItem(id))
    }


    function handleCheckout() {
        navigate("/checkout")
    }

    return (
    <div className="cart">
        <h1>Drugs in your cart</h1>
        {drugs?.map(item =>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.drugName}</h1>
                    <p>{item.disc?.substring(0, 100)}</p>
                    <div className="price">
                        {item.quantity} x ${item.price}
                    </div>
                    <DeleteOutline onClick={() => handleDelete(item.id)} className="delete"/>
                </div>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>{totalPrice()}YER</span>
        </div>
        <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart