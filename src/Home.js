import React from 'react'
import "./home.css";

export default function Home(props) {

  return (
    <>
      <div className='products'>
        <img className='productimg' src={props.setPaint} alt="Paint/" /> 
        <h1 className="productname">{props.setPainters}</h1>
        <p className="productprice">${props.setPaintPrice}</p>
      </div>
      </>
    )
  }