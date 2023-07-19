import React from "react";
import "./style.scss";
import rightIcon from '../../assets/icon-right.png'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


function index() {
const { t } = useTranslation();

  return (
    <NavLink to='/shop' className="layout">
      <div className="container layout-container">
        <div className="layout-left">
          <img src="https://picsum.photos/id/316/320/290" alt="" />
        </div>
        <div className="layout-right">
          <h3>{t('layout-tit')}</h3>
          <div className="layout-right-box">
            <div className="layout-imgbar">
              <img src="https://picsum.photos/id/320/320/290" alt="" className="layout-imgbar-img"/>
              <img src="https://picsum.photos/id/310/320/290" alt="" className="layout-imgbar-img"/>
              <img src="https://picsum.photos/id/301/320/290" alt="" className="layout-imgbar-img"/>
            </div>
            <div className="layout-right-icon">
                <img src={rightIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default index;
