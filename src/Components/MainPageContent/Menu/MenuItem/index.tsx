import React, { FC } from "react";
import { MenuItemsBar } from "./modelItemMenu";
import Image from "next/image";
import style from "../MenuItem/menu_item.module.scss";

const MenuItem: FC<MenuItemsBar> = ({ id, src, title, price, description }) => {
  return (
    <div className={style.menu_item__wrapper}>
      <div className={style.menu_item__container}>
        <div>
          <Image
            src={src}
            alt="alt logo menu"
            className={style.menu_item__logo}
          />
        </div>
        <div className={style.menu_item__description}>
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <button type="button">+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
