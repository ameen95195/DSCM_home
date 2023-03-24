import React from 'react';
import "./List.scss";
import Card from '../Card/Card.jsx';

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';
import solpadien from '../../assets/solpadin.jpg';
import solpadien2 from '../../assets/solpadin2.jpg';
import voltaren from '../../assets/voltaren.jpg';
import voltaren2 from '../../assets/voltaren2.jpg';


const List = (props) => {

    const {data} = props


    return (
        <div className="list">
            {data? data.map(item => (
                <Card
                    key={item.id}
                    item={item}
                />
            )): ""}
        </div>
    )
}


export default List