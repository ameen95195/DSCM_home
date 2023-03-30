import './Checkout.css'
import {useDispatch, useSelector} from "react-redux";
import {resetCart} from "../../redux/cartReducer.js";
import {useState} from "react";

export default function Checkout(props) {

    const drugs = useSelector(state => state.cart.drugs)
    const dispatch = useDispatch();
    const [done, setDone] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (drugs.length === 0) alert("Cart is empty!!!")
        dispatch(resetCart())
        setDone("Purchase has been done successfully!!")

    }

    return (
        <div className="page-body">
            <br/> <br/>
            <form onSubmit={handleSubmit}>
                <h1>Checkout</h1>
                <h4 style={{color: "green"}}>{done}</h4>
                <label htmlFor="name">Name:</label>
                <input required type="text" id="name" name="name"/>

                <label htmlFor="email">Email:</label>
                <input required type="email" id="email" name="email"/>

                <label htmlFor="address">Address:</label>
                <textarea required id="address" name="address"></textarea>

                <label htmlFor="cardnumber">Card Number:</label>
                <input required type="text" id="cardnumber" name="cardnumber"/>

                <label htmlFor="expdate">Expiration Date:</label>
                <input required type="text" id="expdate" name="expdate"/>

                <label htmlFor="cvv">CVV:</label>
                <input required type="text" id="cvv" name="cvv"/>

                <input type="submit" value="Submit"/>
            </form>
            <br/> <br/>
        </div>
    )
}