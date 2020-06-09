import React from 'react';
import { withRouter } from "react-router-dom";
import { paint } from "./Paint"
import "./show.css";


const Show= (props) => {
  const show = props.match.params.Painttime;
  const find = paint.find(paints =>
    paints.name === show) 
  console.log(find)
  return (
    <div className="app">
      <div className="layout">
    <div className="layout-children">
    <div className="context">
       <img className="imagePaint" src={find.imgURL} />
      <h1 className="name">{find.name}</h1>
      <p className="price">${find.price}</p>
      <p className="description">{find.description}</p>
    </div>
        </div>
        </div>
    </div>
    )
}
export default withRouter(Show); 