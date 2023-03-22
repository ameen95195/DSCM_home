import React from 'react'


import { Link } from 'react-router-dom';

function Card({item}) {
  return (
    <Link to={`/store/${item.id}`} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      
        
          
          <img src={item.img2} alt="" className="h-56 w-full rounded-md object-fit" />

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Address</dt>

        <dd className="text-sm text-gray-500">{item.address}</dd>
      </div>

      <div>
        <dt className="sr-only">Name</dt>

        <dd className="font-medium">{item.name}</dd>
      </div>

      <div>
        <dt className="sr-only">Description</dt>

        <dd className="font-thin">{item.disc}</dd>
      </div>
    </dl>


    
  </div> 

  <div class="mt-6 flex items-center gap-8 text-xs">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-teal-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Branch</p>

          <p class="font-medium">2 branches</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-teal-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Open</p>

          <p class="font-medium">8 AM</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-teal-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Close</p>

          <p class="font-medium">7 pm</p>
        </div>
      </div>
    </div>
    
      
    </Link>
    
  )
}

export default Card