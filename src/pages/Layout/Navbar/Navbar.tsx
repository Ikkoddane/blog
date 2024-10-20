import React, { useRef, useState, useEffect } from "react";
import logo from "../../../assets/logo.svg";
import "./navbar.css";

const Navbar: React.FC = () => {
  const navbar_items = ["Главная", "О нас", "Интересное", "Новое"];

  const [active, setActive] = useState<number>(0);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (underlineRef.current) {
      const selectedItem = document.querySelectorAll(".navbar__option")[
        active
      ] as HTMLElement;
      if (selectedItem) {
        const itemRect = selectedItem.getBoundingClientRect();
        underlineRef.current.style.width = `${itemRect.width}px`;
        underlineRef.current.style.transform = `translateX(${
          itemRect.left -
          underlineRef.current.parentElement!.getBoundingClientRect().left
        }px)`;
      }
    }
  }, [active]);

  const handleNavigationMove = (index: number) => {
    setActive(index);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo}  />
        </div>
        <ul className="navbar__options">
          <div className="navbar__underline" ref={underlineRef}></div>
          {navbar_items.map((item, index) => {
            return (
              <li
                className="navbar__option"
                key={index}
                onClick={() => handleNavigationMove(index)}
              >
                <a href="#" className={active === index ? "active" : ""}>
                  {item}
                </a>
              </li>
            );
          })}
          <span className="navbar__telephone">
            <a href="#">+7 (702) 560-55-05</a>
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
