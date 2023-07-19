import React from "react";
import Cart from "../../components/cart";
import './style.scss';
function index() {
  return (
    <div className="shop">
      <div className="shop-cont container">
        <div className="shop-top bruto-top">
          <h2>Providing intermediary services freelanc</h2>
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
        <button className="cart_button">batafsil</button>
      </div>
    </div>
  );
}

export default index;
