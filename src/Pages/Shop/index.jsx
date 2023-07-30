import React, { useEffect } from "react";
import Cart from "../../components/cart";
import './style.scss';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import data from '../../data/data.json'
function index() {
  const { t } = useTranslation();
  
  return (
    <NavLink to='/shop' className="shop">
      <div className="shop-cont container">
        <div className="shop-top ">
          <h2 className='shop-title'>{t('shop-tit')}</h2>
        </div>
        <div className="shop-bottom">
        {
        data.rasmlar.slice(6,15).map((props)=>{
          return(
            <div className="cart">
        <img src={props.img} alt={props.title} className="cart-img" />
        <div className="cart_body">
            <p>{props.title}</p>
        <div className="colors">
            <span className='{props.color1}'></span>
            <span className='{props.color2}'></span>
            
            <span className='{props.color3}'></span>
        </div>
        </div>
    </div>
          )
        })
      }
        </div>
        <div className="shop_batafsil-box">
        <button className="cart_button">{t('batafsil')}</button>
        </div>
      </div>
    </NavLink>
  );
}

export default index;
