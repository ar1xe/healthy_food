import React, { FC } from "react";
import { BtnHeader } from "./modelBtn";
import style from "../ButtonNavbarHeader/buttonNavbarHeader.module.scss";

export interface ButtonNavbarHeaderProps {
  item: BtnHeader;
  activeId: string;
  clickHandle: (id: string) => void;
}

const ButtonNavbarHeader: FC<ButtonNavbarHeaderProps> = ({
  item,
  activeId,
  clickHandle,
}) => {
  const onPress = () => {
    clickHandle(item.id);
  };
  return (
    <button
      type="button"
      className={`${style.page_header__navigation__item} ${
        activeId === item.id ? style.__isActive : ""
      }`}
      onClick={onPress}
    >
      {item.title}
    </button>
  );
};

export default ButtonNavbarHeader;
