import React from 'react'
import './style.scss';
function index(props) {
    
  return (
    <div className="cart">
        <img src={props.img} alt={props.text} className="cart-img" />
        <div className="cart_body">
            <p>{props.text}</p>
        <div className="colors">
            <span className='{props.color1}'></span>
            <span className='{props.color2}'></span>
            
            <span className='{props.color3}'></span>
        </div>
        </div>
    </div>
  )
}

export default index
