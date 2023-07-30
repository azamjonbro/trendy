import React from "react";
import "./style.scss";
import Card from "../../components/card";
import { NavLink } from "react-router-dom";
import image from "../../assets/updoticon.png";
import { useTranslation } from "react-i18next";
import data from '../../data/data.json'
import images from'../../assets/updoticon.png'



function index() {
  const { t } = useTranslation();
  const shopCard = document.querySelector('.props-card')
  const shopCardimg = document.querySelector('.shop-img1')
  const shopCardimg2 = document.querySelector('.shop-img2')

  
  
  return (
    <div className="servis">
      <div className="servis-cont container">
        <div className="service-top ">
          <h3 className="servis-titl">{t('about-tit')}</h3>
        </div>
        <div className="service_box">

          {data.rasmlar.slice(0,6).map((props)=>{
            return(
              <NavLink to='/shop' className="props-card" key={props.id}>
              <div className="props-card-imgbox">
                  <img src={props.img} alt={props.title} className="shop-img1" />
                  <img src={props.img2} alt=""  className="shop-img2"/>
      
              </div>
              <div className="props-card-titlebox">
                  <h4>
                      {props.title}
                  </h4>
                  <div className="tepaga_icon"><img src={images} alt={props.title} /></div>
              </div>
          </NavLink>
              )
          })}

          {/* <Card title="Man" img="https://picsum.photos/id/2/290/320" />
          <Card title="WOMan" img="https://picsum.photos/id/3/290/320" />
          <Card title="kids" img="https://picsum.photos/id/4/290/320" />
          <Card title="Man" img="https://picsum.photos/id/5/290/320" />
          <Card title="Woman" img="https://picsum.photos/id/6/290/320" />
          <Card  title='All' img='https://picsum.photos/id/334/290/320' /> */}
        </div>
      </div>
    </div>
  );
}

export default index;
