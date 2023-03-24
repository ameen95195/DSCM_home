import React, {useContext, useEffect, useState} from 'react'
import "./Drug.scss";

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';

import {useDispatch} from "react-redux";


import {AddShoppingCart} from '@mui/icons-material';
import {addToCart} from "../../redux/cartReducer.js";
import {AuthContext} from "../../AuthContext.jsx";
import {useLocation} from "react-router-dom";
import {showSingleDrugApi} from "../../APIs/DrugsCRUDApis.js";

const Drug = () => {

    const [selectedImage, setSelectedImage] = useState();
    const [quantity, setQuantity] = useState(1);
    const [drugData, setDrugData] = useState({})
    const {authKey} = useContext(AuthContext)
    const location = useLocation()
    const dispatch = useDispatch();

    useEffect(() => {
        const id = location.pathname.split("/").reverse()[0]
        console.log(id)
        if (!authKey) return

        showSingleDrugApi(id, authKey)
            .then(response => {
                return response.json()
            })
            .then(result => {
                if (result.length > 0){
                    setDrugData(result[0])}
                else
                    alert("something went wrong!!" + result.toString())
            })
            .catch(error => console.log("catch error: "+error))

    }, [authKey, location])



    return (
        <div className="drug">
            <div className="left">
                <div className="images">
                    <img src={drugData.image} alt="" onClick={() => setSelectedImage(drugData.image)}/>
                    {/*<img src={panadol2} alt="" onClick={e => setSelectedImage(panadol2)}/>*/}
                </div>

                <div className="mainImage">
                    <img src={selectedImage? selectedImage: drugData.image} alt=""/>
                </div>
            </div>


            <div className="right">
                <h1>{drugData.trade_name} </h1>
                <h3>{drugData.scientific_name}</h3>
                <h4>{drugData.drug_dose}</h4>
                <h4>{drugData.drug_type? drugData.drug_type.drug_type_title: "type not available"}</h4>
                {/*<h5>production date</h5>*/}
                {/*<h5>expiration date</h5>*/}
                <span className='price'>{drugData.price} <span className='price_item'>per Box</span></span>
                <p>
                    {drugData.drug_description}
                </p>
                <div className="quantity">
                    <button className='minus' onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-
                    </button>
                    {quantity}
                    <button className='plus' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className="add"
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    ...drugData,
                                    quantity,
                                })
                            )
                        }
                >
                    <AddShoppingCart/> ADD TO CART
                </button>

                <div className="info">
                    <span>Saler: Al-Jaish</span>
                    <span>Tag: Painkiller, Pills</span>
                    <hr/>
                    <div className="details">
                        <span>DESCRIPYION</span>
                        <hr/>
                        <span>ADDITIONAL INFORMATION</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drug