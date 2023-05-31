import React, { useContext } from "react";

// Ims
import logoComp from "../../Imgs/mainImgs/logoComp.png";

import instagram from "../../Imgs/secondaryImgs/Instagram.png";
import facebook from "../../Imgs/secondaryImgs/Facebook.png";
import twitter from "../../Imgs/secondaryImgs/Twitter.png";
import linkdin from "../../Imgs/secondaryImgs/Linkdin.png";
import { Context } from "../../Context";

export function Footer() {
  let { lang } = useContext(Context);
  return (
    <footer className="Footer">
      <div className="footer__left">
        <img src={logoComp} alt="img" />
        <p className="footer__left-adress">
          {lang
            ? "Manzil: Namangan Shahar Kosonsoy ko’cha"
            : "Адрес: город Наманган, улица Косонсой"}
        </p>
      </div>
      <div className="footer__right">
        <div className="footer__right-number">
          <p>+998 69 210 10 30</p>
          <p>+998 91 177 10 30</p>
        </div>
        <div className="footer__right-follow">
          <img src={instagram} alt="icon" />
          <img src={facebook} alt="icon" />
          <img src={twitter} alt="icon" />
          <img src={linkdin} alt="icon" />
        </div>
      </div>
    </footer>
  );
}
