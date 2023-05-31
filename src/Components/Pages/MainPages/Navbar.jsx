// Imgs

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";

export function Navbar() {
  let { lang, setLang } = useContext(Context);

  let langFunc = () => {
    setLang(!lang);
  };

  return (
    <div className="Navbar">
      <div className="nav__Router">
        <NavLink to={"/"}>{lang ? "BOSH SAHIFA" : "домашняя страница"}</NavLink>
        <NavLink to={"/bizhaqimizda"}>{lang ? "BIZ HAQIMIZDA" : "о нас"}</NavLink>
        <NavLink to={"/xizmatlar"}>{lang ? "XIZMATLAR" : "услуги"} </NavLink>
        <NavLink to={"/galereya"}>{lang ? "GALEREYA" : "галерея"} </NavLink>
        <NavLink to={"/murojatuchun"}>{lang ? "MUROJAT UCHUN" : "для справки"}</NavLink>
      </div>
      <div onClick={langFunc} className="nav__Language-Btn">
        {lang ? "uz" : "ru"}
      </div>
    </div>
  );
}
