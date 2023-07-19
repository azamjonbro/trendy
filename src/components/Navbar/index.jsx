import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";
import i18next from "i18next";
import logo from "../../assets/logo.svg";

function index() {
  const language = [
    { id: 1, value: "uz", label: "uz" },
    {
      id: 2,
      value: "en",
      label: "en",
    },
    {
      id: 3,
      value: "ru",
      label: "ru",
    },
  ];
  const { t } = useTranslation();
  const [active, setActive] = useState('#');

  return (
    <header>
      <div className="container bottom-border">
        <div className="nav">
          <div className="nav--logo">
            <a href="#" className="nav--logo-link">
              <h2 className="nav--logo--logotxt">TRENDY</h2>
            </a>
          </div>

          <div className="nav-linkbar">
            <a href="#" className="nav-linkbar-link">
              {t("navLinkA")}
            </a>
            <a href="" className="nav-linkbar-link">
              {t("navLinkB")}
            </a>
            <a href="" className="nav-linkbar-link">
              {t("navLinkC")}
            </a>
            <a href="" className="nav-linkbar-link">
              {t("navLinkD")}
            </a>
          </div>

          <div className="nav-contact-button_pg">
            <ul className="nav-language-pg">
              <li onClick={()=>setActive('#')} className={active==='#'?'active':''}>
                <button onClick={() => i18next.changeLanguage('uz')} id="lang-btn">
                  uz
                </button>
              </li>
			  <li onClick={()=>setActive('#ru')} className={active==='#ru' ? 'active':''}>
                <button onClick={() => i18next.changeLanguage('ru')} id="lang-btn">
                  ru
                </button>
              </li>
			  <li onClick={()=>setActive('#en')} className={active==='#en' ? 'active':''}>
                <button
                  onClick={() => i18next.changeLanguage('en')}
                  id="lang-btn"
                >
                  en
                </button>
              </li>
            </ul>
          </div>

          <button className="contact-btn">{t("contact")}</button>
        </div>
      </div>
    </header>
  );
}

export default index;
