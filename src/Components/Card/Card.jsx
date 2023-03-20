import React from 'react'
import "./Card.scss";

import { Link } from 'react-router-dom';



function Card({item}) {
  return (
    <Link to={`/drug/${item.id}`} className="block rounded-lg p-4 shadow-sm shadow-gray-300">
     
        <div className="h-[400px] w-[400px] align-middle justify-center rounded-md object-center  overflow-hidden image">
          {item.isNew && <span className="roubded-md text-teal-500 ">New</span>}
          <img src={item.img} alt="" className="mainImage" />
          <img src={item.img2} alt="" className="subImage" />
        </div>


        <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Subtitle</dt>

        <dd className="text-sm text-gray-500">{item.subtitle}</dd>
      </div>

      <div>
        <dt className="sr-only">Title</dt>

        <dd className="font-medium">{item.title}</dd>
      </div>

      <div>
        <dt className="sr-only">Description</dt>

        <dd className="font-thin">{item.disc}</dd>
      </div>
    </dl>
</div>

    <div>
        <dt className="sr-only">Price</dt>

        <dd className="font-bold">{item.price} YER</dd>

      </div>
    


    
  

  


        

  
        

        

        
      


    </Link>
    
  )
}

export default Card