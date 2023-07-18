import React from "react";
import "./style.scss";
import Card from "../../components/card";
import { NavLink } from "react-router-dom";
import image from "../../assets/updoticon.png";
function index() {
  return (
    <div className="servis">
      <div className="servis-cont container">
        <div className="service-top bruto-top">
          <h2>Providing intermediary services freelanc</h2>
        </div>
        <div className="service_box">
          <Card title="Man" img="https://picsum.photos/id/2/290/320" />
          <Card title="Man" img="https://picsum.photos/id/3/290/320" />
          <Card title="Man" img="https://picsum.photos/id/4/290/320" />
          <Card title="Man" img="https://picsum.photos/id/5/290/320" />
          <Card title="Man" img="https://picsum.photos/id/6/290/320" />
          <NavLink className="shop-navlink">
            <div className="shop-navlink-imgbox">
              <div className="shop-navlink-imgbox-item">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="props-card-titlebox">
              <h5 className="props-card-titlebox-title">Providing intermediary services and talented freelancers</h5>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default index;
