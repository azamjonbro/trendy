import React from "react";
import Cart from "../../components/cart";
import './style.scss';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function index() {
  const { t } = useTranslation();

  return (
    <NavLink to='/shop' className="shop">
      <div className="shop-cont container">
        <div className="shop-top ">
          <h2>{t('shop-tit')}</h2>
        </div>
        <div className="shop-bottom">
          <Cart
            img="https://picsum.photos/id/19/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/12/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/48/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/10/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/34/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/29/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/43/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/99/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
          <Cart
            img="https://picsum.photos/id/100/290/320"
            text="Providing intermediary services"
            color1="red"
            color2="blue"
            color3="dark"
          />
        </div>
        <button className="cart_button">{t('batafsil')}</button>
      </div>
    </NavLink>
  );
}

export default index;
