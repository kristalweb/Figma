import React, { useContext } from 'react'
import { Context } from "../../Context";


import cardlogo from "../../Imgs/secondaryImgs/xizmatlarcardlogo.png"
import hamkor1 from "../../Imgs/secondaryImgs/logoipsum.png"
import hamkor2 from "../../Imgs/secondaryImgs/hamkor2.png"
import hamkor3 from "../../Imgs/secondaryImgs/hamkor3.png"
import hamkor4 from "../../Imgs/secondaryImgs/hamkor4.png"
import hamkor5 from "../../Imgs/secondaryImgs/hamkor5.png"
import hamkor6 from "../../Imgs/secondaryImgs/hamkor6.png"
import hamkor7 from "../../Imgs/secondaryImgs/hamkor7.png"
import hamkor8 from "../../Imgs/secondaryImgs/hamkor8.png"

export function Xizmatlar() {
<<<<<<< HEAD

    let { lang } = useContext(Context);
=======
>>>>>>> f11889fa39e2bba9e78011cab4f6f9832798b0c3
    return (
        <>
            <div className="hizmatlar_ota">
                <div className="xizmatlar_ortaga">
                    <div className="hizmatlar_top">
                        <h1> {lang ? "Bizning xizmatlar" : "Наши сервисы"} </h1>
                    </div>
                    <div className="hizmatlar_cards">
                        <div className="hizmatlar_card">
                            <div className="hizmatlar_card_top">
                                <h3> {lang ? "Mahalliy yuk tashish, xizmatlari" : "Местные службы доставки"} </h3>
                                <img src={cardlogo} alt="cardlogo" />
                            </div>
                            <div className="hizmatlar_card_text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                        <div className="hizmatlar_card">
                            <div className="hizmatlar_card_top">
                                <h3>{lang ? "Mahalliy yuk tashish, xizmatlari" : "Местные службы доставки"}</h3>
                                <img src={cardlogo} alt="cardlogo" />
                            </div>
                            <div className="hizmatlar_card_text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                        <div className="hizmatlar_card">
                            <div className="hizmatlar_card_top">
                                <h3>{lang ? "Mahalliy yuk tashish, xizmatlari" : "Местные службы доставки"}</h3>
                                <img src={cardlogo} alt="cardlogo" />
                            </div>
                            <div className="hizmatlar_card_text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </div>
                    <div className="xizmatlar_bottom">
                        <h1> {lang ? "Bizning hamkorlar" : "Наши партнеры"} </h1>
                        <div className="hamkorlar_bottom">
                            <img src={hamkor1} alt="hamkor" />
                            <img src={hamkor2} alt="hamkor" />
                            <img src={hamkor3} alt="hamkor" />
                            <img src={hamkor4} alt="hamkor" />
                            <img src={hamkor5} alt="hamkor" />
                            <img src={hamkor6} alt="hamkor" />
                            <img src={hamkor7} alt="hamkor" />
                            <img src={hamkor8} alt="hamkor" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
