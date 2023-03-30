import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import List from '../../Components/List/List.jsx';
import "./Drugs.scss";
import {AuthContext} from "../../AuthContext.jsx";
import {getAllDrugTypesApi} from "../../APIs/DrugTypeCURDApis.js";


function Drugs() {

    const cartId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [drugsData, setDrugsData] = useState([]);
    const [allTypes, setAllTypes] = useState([])
    const [checks, setChecks] = useState([])
    const [search, setSearch] = useState([])
    const {authKey} = useContext(AuthContext)
    const location = useLocation()


    const [sort, setSort] = useState(null)

    function getDrugsTypeData(typeTitle) {
        getAllDrugTypesApi(authKey)
            .then(response => response.json())
            .then(result => {
                let data = []
                if (typeTitle)
                    result.forEach(type => {
                        if (type["drug_type_title"] === typeTitle)
                            if (type["drug"])
                                data.push(...type["drug"])

                    })
                if (data.length === 0)
                    result.forEach(type => {
                        if (type["drug"])
                            data.push(...type["drug"])
                    })

                setDrugsData(data)
                setAllTypes(result)
                setChecks(Array(result.length).fill(false))
            })
            .catch(error => console.log("catch error: " + error))
    }

    useEffect(() => {
        if (!authKey) return
        const id = location.pathname.split("/").reverse()[0]
        getDrugsTypeData(id)

    }, [authKey, location])


    function checksHandler(index, id) {
        setChecks(prevState => prevState.map((check, i) => i === index ? check = !check : check = false))
        if (!checks[index]) {
            setDrugsData(allTypes[index].drug)
        } else getDrugsTypeData("id")
    }

    function handleSearch(e) {
        const se = e.target.value
        setSearch(drugsData.filter(item =>
                item.drug_description.includes(se)
                || item.trade_name.includes(se)
                || item.scientific_name.includes(se)
            )
        )
    }

    return (
        <div className="drugs">
            <div className="left">
                <div className="filterItem">
                    <h2>Search</h2>
                    <input required type="text" id="search" placeholder="Search" onChange={handleSearch}/>
                    <br/>
                    {search.length > 0? "": <h6>Nothing match your search</h6>}


                    <h2>Drug Categories</h2>
                    {allTypes?.map((item, index) =>
                        <div className="inputItem">
                            <input type="checkbox" id={item.id} checked={checks[index]}
                                   onChange={() => checksHandler(index, item.id)}/>
                            <label htmlFor={item.id}>{item.drug_type_title}</label>
                        </div>
                    )}
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
                    data={search.length > 0? search : drugsData}
                    cartId={cartId}
                    maxPrice={maxPrice}
                    sort={sort}
                />
            </div>
        </div>
    )
}

export default Drugs
