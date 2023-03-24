import React from 'react'

import "./Categories.scss";

import pills from '../../assets/pills.jpeg';
import syrb from '../../assets/ssyrub.jpg';
import vitamen from '../../assets/vita.jpeg';
import vaseline from '../../assets/vaseline.jpeg';
import needle from '../../assets/neadle.jpeg';
import Serum from '../../assets/gotar.jpeg';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="categories">
        
        <div className="col">
            <div className="row">
                <img src={pills} alt="" />
                <button>
                    <Link className='link' to="/drugs/pills">
                        Pills
                    </Link>
                </button>
            </div>
            <div className="row">
            <img src={syrb} alt="" />
                <button>
                    <Link className='link' to="/drugs/syrup">
                    Syrup Medicine
                    </Link>
                </button>
            </div>
        </div>

        <div className="coll">
            <div className="row">
            <img src={vitamen} alt="" />
                <button>
                    <Link className='link' to="/drugs/vitamins">
                    Vitamins
                    </Link>
                </button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src={Serum} alt="" />
                <button>
                    <Link className='link' to="/drugs/serum">
                    Serum
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src={vaseline} alt="" />
                <button>
                    <Link className='link' to="/drugs/skin">
                     Skin Care
                    </Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src={needle} alt="" />
                <button>
                    <Link className='link' to="/drugs/needle">
                    Medication Needle
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories