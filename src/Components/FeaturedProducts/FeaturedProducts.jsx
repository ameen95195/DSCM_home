import React, {useEffect, useState} from 'react'
import "./FeaturedProducts.scss"

import Card from '../../Components/Card/Card'

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';
import solpadien from '../../assets/solpadin.jpg';
import solpadien2 from '../../assets/solpadin2.jpg';
import voltaren from '../../assets/voltaren.jpg';
import voltaren2 from '../../assets/voltaren2.jpg';


function FeaturedProducts(props) {
    const {data} = props
    const [dataState, setDataState] = useState([])
    useEffect(() => {
        if (data)
            if (data.length > 3)
                setDataState(data.slice(0, 3))
            else
                setDataState(data)
    }, [data])


    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>Different Kind of Drugs </h1>
                <p>
                    Choose multy drugs from diffrent opptions.
                </p>
            </div>
            <div className="bottom">

                {dataState? dataState.map(item => (
                    <Card
                        key={item.id}
                        item={item}
                    />
                )): ""}
            </div>


        </div>
    )
}

export default FeaturedProducts