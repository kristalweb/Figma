// Imgs

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";

// React Icons

import { AiOutlineMenu } from "react-icons/ai"
import { GrClose } from "react-icons/gr"

export function Navbar() {
  let { lang, setLang } = useContext(Context);

  let langFunc = () => {
    setLang(!lang);
  };

  let [open, setOpen] = useState(false)

  let openFunc = () => {
    setOpen(!open)
  }

  return (
    <div className="Navbar">
      <div className="nav__Router">
        <NavLink to={"/"}>{lang ? "BOSH SAHIFA" : "домашняя страница"}</NavLink>
        <NavLink to={"/bizhaqimizda"}>{lang ? "BIZ HAQIMIZDA" : "о нас"}</NavLink>
        <NavLink to={"/xizmatlar"}>{lang ? "XIZMATLAR" : "услуги"} </NavLink>
        <NavLink to={"/galereya"}>{lang ? "GALEREYA" : "галерея"} </NavLink>
        <NavLink to={"/murojatuchun"}>{lang ? "MUROJAT UCHUN" : "для справки"}</NavLink>
      </div>
      <div className={open ? "nav__Router-phone-mode active" : "nav__Router-phone-mode"}>
        <button className={open ? "phone-mode__nav-btn active" : "phone-mode__nav-btn"} onClick={openFunc}>{open ? <GrClose /> : <AiOutlineMenu />}</button>
        <div className="nav__Router-phone__mode">
          <NavLink to={"/"}>{lang ? "BOSH SAHIFA" : "домашняя страница"}</NavLink>
          <NavLink to={"/bizhaqimizda"}>{lang ? "BIZ HAQIMIZDA" : "о нас"}</NavLink>
          <NavLink to={"/xizmatlar"}>{lang ? "XIZMATLAR" : "услуги"} </NavLink>
          <NavLink to={"/galereya"}>{lang ? "GALEREYA" : "галерея"} </NavLink>
          <NavLink to={"/murojatuchun"}>{lang ? "MUROJAT UCHUN" : "для справки"}</NavLink>
        </div>
      </div>
      <div onClick={langFunc} className="nav__Language-Btn">
        {lang ? "uz" : "ru"}
      </div>
    </div>
  );
}
