import React from "react";
import "./footer.css";
import Logo from "../../../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={Logo} />
        </div>

        <div className="footer__information">
          <a href="#">О нас</a>
          <a href="#">Галерея</a>
          <a href="#">Новости</a>
          <a href="#">Контакты</a>
        </div>

        <div className="footer__credits">
            <p>ООО “Организация” 2020. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
