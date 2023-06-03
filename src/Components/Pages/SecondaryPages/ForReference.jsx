import React, { useContext } from "react";

// Imgs

import icon1 from "../../Imgs/mainImgs/massageIcon.png";
import icon2 from "../../Imgs/mainImgs/callIcon.png";
import icon3 from "../../Imgs/mainImgs/clockIcon.png";
import { Context } from "../../Context";
export function ForReference() {
  let { lang } = useContext(Context);

  return (
    <div className="ForReference">
      <div className="ForReference-Left">
        <div className="ForReference-left__content">
          <h1>{lang ? `Biz bilan bog'laning` : `Связаться с нами`}</h1>
          <p>
            {lang
              ? `Strategiya uchun ishonchli konspektni taqdim etish uchun tezkor
            ramkalardan foydalaning, umumiy qiymatni oshirish uchun hamkorlikda
            fikrlashni rivojlantiradi.`
              : `Быстрый, чтобы обеспечить твердый план для стратегии
            использовать фреймворки совместно для увеличения общей ценности
            развивает мышление.`}
          </p>
        </div>
        <div className="ForReference-left__contacts">
          <div className="ForReference-contact">
            <img src={icon1} alt="img" />
            <div>
              <h1>Email</h1>
              <p>contact@logistics.com</p>
            </div>
          </div>
          <div className="ForReference-contact">
            <img src={icon2} alt="img" />
            <div>
              <h1>Call Us</h1>
              <p>91-177-10-30</p>
            </div>
          </div>
          <div className="ForReference-contact">
            <img src={icon3} alt="img" />
            <div>
              <h1>Mon-Sat 9.00 - 18.00</h1>
              <p>Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ForReference-Right">
        <div className="ForReference-Right__two-inputs">
          <input type="text" placeholder="Your name*" />
          <input type="text" placeholder="Email*" />
        </div>
        <div className="ForReference-Right__two-inputs">
          <input type="number" placeholder="Phone Number*" />
          <input type="text" placeholder="City*" />
        </div>
        <div className="massage-Input">
          <input type="text" placeholder="Your Massage" />
        </div>
        <button>{lang ? `JONATISH` : `ОТПРАВКА`}</button>
      </div>
    </div>
  );
}
