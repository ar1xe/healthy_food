import React, { FC } from "react";
import { ItemAbout } from "./modelItemAboutUs";
import Image from "next/image";
import style from "../ItemAboutUs/about_us_item.module.scss";

const ItemAboutUs: FC<ItemAbout> = ({ id, src, head, discription }) => {
  return (
    <div className={style.item_about_us__wrapper}>
      <div className={style.item_about_us__container}>
        <Image
          src={src}
          alt="alt logo"
          width={350}
          height={250}
          className={style.item_about_us__logo}
        />
      </div>
      <div className={style.item_about_us__discription}>
        <h3>{head}</h3>
        <span>{discription}</span>
      </div>
    </div>
  );
};

export default ItemAboutUs;
