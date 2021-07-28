import React, { FC } from "react";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import { MenuItemI } from "./MenuItem/modelItemMenu";
import style from "../Menu/menu.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Menu: FC = () => {
  const menuItems: MenuItemI[] = useSelector<RootState, MenuItemI[]>(
    (state) => state.menuItems.items
  );

  return (
    <>
      <div>
        <MenuHeader />
      </div>
      <div className={style.page_menu__wrapper}>
        <div className={style.page_menu__container}>
          {menuItems?.map((elem: MenuItemI) => (
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
