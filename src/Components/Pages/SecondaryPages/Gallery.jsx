import React from "react";

// imgs

import img1 from "../../Imgs/galleryImgs/img1.png";
import img2 from "../../Imgs/galleryImgs/img2.png";
import img3 from "../../Imgs/galleryImgs/img3.png";
import img4 from "../../Imgs/galleryImgs/img4.png";
import img5 from "../../Imgs/galleryImgs/img5.png";
import img6 from "../../Imgs/galleryImgs/img6.png";
import img7 from "../../Imgs/galleryImgs/img7.png";
import img8 from "../../Imgs/galleryImgs/img8.png";

export function Gallery() {
  let galley = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="Gallery">
      <div className="gallery-Img__Box">
        <img src={galley[0]} alt="img" />
        <img src={galley[4]} alt="img" />
      </div>
      <div className="gallery-Img__Box">
        <img src={galley[1]} alt="img" />
        <img src={galley[5]} alt="img" />
      </div>
      <div className="gallery-Img__Box">
        <img src={galley[2]} alt="img" />
        <img src={galley[6]} alt="img" />
      </div>
      <div className="gallery-Img__Box">
        <img src={galley[3]} alt="img" />
        <img src={galley[7]} alt="img" />
      </div>
    </div>
  );
}
