import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./style.scss";

var telegram_bot_id = ""; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id

const sendtelegram = (e) => {
  e.preventDefault()
  var botToken = "6347914753:AAH3LUaJv6L794F92CzKOIDs_iVKUc-Dc38";
  var chatId = 103508974;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  var messageText = "Ism :  " + name + "\ntel:   " + phone;
  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  var requestBody = {
    chat_id: chatId,
    text: messageText,
  };
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Xabar yuborildi:", data);
      document.getElementById('name').value=''
      document.getElementById('phone').value=''
    
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
    });
};

function index() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact-cont container">
        <div className="contact-left">
          <div className="contact-left-top">
            <h3>{t("contact-title")}</h3>
          </div>
          <form className="contact-left-bottom" onSubmit={sendtelegram}>
            <input
              type="text"
              placeholder="Ism"
              required
              className="name"
              id="name"
            />
            <input
              type="phone"
              placeholder="phone"
              required
              pattern="^\+\d{1,3}\s?\(\d{1,}\)\s?\d{1,}[-\s]?\d{1,}[-\s]?\d{1,}$"
              className="phone"
              id="phone"
            />
            <button className="form-submit" id="submit">
              {t("send")}
            </button>
          </form>
        </div>
        <div className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.1922191100513!2d72.1596620161934!3d40.73340771102308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc9126f57ef613%3A0xf67b6f6af65a1409!2sShahrixon%20yengil%20sanoat%20kasb%20xunar%20kolleji!5e0!3m2!1sru!2s!4v1689742231927!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default index;

// var settings = {
//   "async": true,
//   "crossDomain": true,

//   "method": "POST",
//   "headers": {
//       "Content-Type": "application/json",
//       "cache-control": "no-cache"
//   },
//   "data": JSON.stringify({
//
//   })
// }
