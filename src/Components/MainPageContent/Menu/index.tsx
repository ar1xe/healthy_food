import React, { FC } from "react";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import { menuItem, MenuItemsBar } from "./MenuItem/modelItemMenu";
import style from "../Menu/menu.module.scss";

const Menu: FC = () => {
  return (
    <>
      <div>
        <MenuHeader />
      </div>
      <div className={style.page_menu__wrapper}>
        <div className={style.page_menu__container}>
          {menuItem.map((elem: MenuItemsBar) => (
            <MenuItem
              key={elem.id}
              src={elem.src}
              title={elem.title}
              price={elem.price}
              description={elem.description}
            />
          ))}
        </div>
      </div>
      <div className={style.page_menu__button}>
        <div>
          <button type="button">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Menu;
