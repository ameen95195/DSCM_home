import React, {useContext, useEffect, useState} from 'react'

import Hero from '../../Components/Hero/Hero'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import FeaturedStores from '../../Components/Featured_Stores/FeaturedStores'
import Categories from '../../Components/Categories/Categories'
import {AuthContext} from "../../AuthContext.jsx";
import {useNavigate } from "react-router-dom";
import {getAllDrugsApi} from "../../APIs/DrugsCRUDApis.js";

function Home() {
    const {authKey} = useContext(AuthContext)
    const navigate = useNavigate()
    const [data, setData] = useState()

    useEffect(() => {
        if(authKey)  return
        navigate("/login")
    }, [authKey])

    useEffect(() => {
        if (!authKey) return

        getAllDrugsApi(authKey)
            .then(response => response.json())
            .then(result => {
                if (result["message"]) return
                setData(result)
            })
    }, [])

    return (
        <div>
            <div className="gradient-06 z-[0]"/>
            <Hero/>

            <div className="gradient-04 z-[-1]"/>
            <h1>
            </h1>
            <FeaturedProducts data={data}/>
            <Categories/>
            <FeaturedStores/>
        </div>
    )
}

export default Home
