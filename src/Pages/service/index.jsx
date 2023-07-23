import React from "react";
import "./style.scss";
import Card from "../../components/card";
import { NavLink } from "react-router-dom";
import image from "../../assets/updoticon.png";
import { useTranslation } from "react-i18next";


function index() {
  const { t } = useTranslation();

  return (
    <div className="servis">
      <div className="servis-cont container">
        <div className="service-top ">
          <h3 className="servis-titl">{t('about-tit')}</h3>
        </div>
        <div className="service_box">
          <Card title="Man" img="https://picsum.photos/id/2/290/320" />
          <Card title="WOMan" img="https://picsum.photos/id/3/290/320" />
          <Card title="kids" img="https://picsum.photos/id/4/290/320" />
          <Card title="Man" img="https://picsum.photos/id/5/290/320" />
          <Card title="Woman" img="https://picsum.photos/id/6/290/320" />
          <Card  title='All' img='https://picsum.photos/id/334/290/320' />
        </div>
      </div>
    </div>
  );
}

export default index;
