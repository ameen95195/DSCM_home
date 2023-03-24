import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import List from '../../Components/List/List.jsx';
import "./Drugs.scss";
import {getAllDrugsApi, showSingleDrugApi} from "../../APIs/DrugsCRUDApis.js";
import {AuthContext} from "../../AuthContext.jsx";


function Drugs() {

    const cartId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [drugsData, setDrugsData] = useState();
    const {authKey} = useContext(AuthContext)


    const [sort, setSort] = useState(null)

    useEffect(() => {
        if (!authKey) return

        getAllDrugsApi(authKey)
            .then(response => {
                return response.json()
            })
            .then(result => {
                if (result.length > 0){
                    setDrugsData(result)}
                else
                    alert("something went wrong!!" + result.toString())
            })
            .catch(error => console.log("catch error: "+error))

    }, [authKey, location])

    function changeHandler(e) {

    }

    return (
        <div className="drugs">
            <div className="left">
                <div className="filterItem">
                    <h2>Drug Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} onChange={changeHandler}/>
                        <label htmlFor="1">Pills</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='2' value={2} onChange={changeHandler}/>
                        <label htmlFor="2">Syrup Medicine</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='3' value={3} onChange={changeHandler}/>
                        <label htmlFor="3">Vitamins</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='4' value={4} onChange={changeHandler}/>
                        <label htmlFor="4">Medication Needle</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='5' value={5} onChange={changeHandler}/>
                        <label htmlFor="5">Skin Care</label>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={100000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="InputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="InputItem">
                        <input type="radio" id="dsc" value="dsc" name="price" onChange={(e) => setSort("dsc")}/>
                        <label htmlFor="dsc">Price (Highest first)</label>
                    </div>
                </div>
            </div>


            <div className="right">
                <List
                    data={drugsData}
                    cartId={cartId}
                    maxPrice={maxPrice}
                    sort={sort}
                />
            </div>
        </div>
    )
}

export default Drugs
