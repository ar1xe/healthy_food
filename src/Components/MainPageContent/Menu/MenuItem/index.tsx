import React, { FC, useCallback } from "react";
import { MenuItemI } from "./modelItemMenu";
import Image from "next/image";
import style from "../MenuItem/menu_item.module.scss";
import { addItem } from "../../../../redux/slices/cartSlice";
import { useAppDispatch } from "../../../../redux/hooks";

const MenuItem: FC<MenuItemI> = ({ id, src, title, price, description }) => {
  const dispatch = useAppDispatch();
  const onPressAddItem = useCallback(() => {
    dispatch(addItem({ id, src, title, price, description }));
  }, [id, src, title, price, description, dispatch]);

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
          <button type="button" onClick={onPressAddItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
