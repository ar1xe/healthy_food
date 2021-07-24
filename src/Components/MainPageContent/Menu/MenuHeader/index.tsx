import React, { FC } from "react";
import style from "../MenuHeader/menu_header.module.scss";

const MenuHeader: FC = () => {
  return (
    <div className={style.menu_header__wrapper}>
      <div className={style.menu_header__container}>
        <span>Menu</span>
        <h3>Food Full of treaty Love</h3>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
      </div>
    </div>
  );
};

export default MenuHeader;
