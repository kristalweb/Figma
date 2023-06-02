import React, { useContext } from "react";
import { Context } from "../../Context";

// Imgs

import img1 from "../../Imgs/mainImgs/aboutImg.png";

// React Icons

import { BiPlayCircle } from "react-icons/bi"

export function AboutUs() {
  let { lang } = useContext(Context);

  return (
    <div className="AboutUs">
      <div className="aboutUs-Before">
        <h1>{lang ? "Bizning logistika haqida" : "О нашей логистике"}</h1>
        <div className="as-Before__content-img">
          <img src={img1} alt="img" />
        </div>
      </div>
      <div className="aboutUs-After">
        <div className="aboutUs-After__video-box"><BiPlayCircle/></div>
        <div className="aboutUs-After__content">
          <h1>
            {lang
              ? "Kompaniyamiz haqida umumiy ma'lumot"
              : "Общая информация о нашей компании"}
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like n
          </p>
        </div>
      </div>
    </div>
  );
}
