import React, { useContext } from "react";

// Imgs

import calcIcon from "../../Imgs/secondaryImgs/calcIcon.png";
import fromIcon from "../../Imgs/secondaryImgs/fromIcon.png";
import toIcon from "../../Imgs/secondaryImgs/toIcon.png";
import weightIcon from "../../Imgs/secondaryImgs/weightIcon.png";
import { Context } from "../../Context";

export function Home() {
  let { lang } = useContext(Context);

  return (
    <div className="Home">
      <div className="home__Left">
        {lang
          ? "Sizning mahsulotingiz dunyoning istalgan nuqtasida."
          : "Ваш продукт в любой точке мира."}
      </div>
      <div className="home__Right">
        <div className="home-calcIcon">
          <img src={calcIcon} alt="calcIcon" />
        </div>
        <div className="home__Inputs-box">
          <div className="home-input">
            <label htmlFor="from">
              <img src={fromIcon} alt="fromIcon" />{" "}
            </label>
            <input
              id="from"
              type="text"
              placeholder={lang ? "Qayerdan" : "Откуда"}
            />
          </div>
          <div className="home-input">
            <label htmlFor="to">
              <img src={toIcon} alt="fromIcon" />
            </label>
            <input
              id="to"
              type="text"
              placeholder={lang ? "Qayerga" : "куда"}
            />
          </div>
          <div className="home-input">
            <label htmlFor="weight">
              <img src={weightIcon} alt="fromIcon" />
            </label>
            <input
              id="weight"
              type="text"
              placeholder={lang ? "Vazni" : "масса"}
            />
          </div>
          <div className="home__secondaryInputs">
            <div className="home-input__secondary">
              <input
                type="number"
                placeholder={lang ? "Uzunligi (sm)" : "Длина (см)"}
              />
            </div>
            <div className="home-input__secondary">
              <input
                type="number"
                placeholder={lang ? "Kengligi (sm)" : "Ширина (см)"}
              />
            </div>
            <div className="home-input__secondary">
              <input
                type="number"
                placeholder={lang ? "Balandligi (sm)" : "высота (см)"}
              />
            </div>
          </div>
          <button className="home__right-btn">{lang ? "HISOBLASH" : "РАСЧЕТ"}</button>
        </div>
      </div>
    </div>
  );
}
