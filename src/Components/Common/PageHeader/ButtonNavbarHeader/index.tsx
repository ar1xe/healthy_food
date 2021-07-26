import React, { FC } from "react";
import { BtnHeader } from "./modelBtn";
import style from "../ButtonNavbarHeader/buttonNavbarHeader.module.scss";
import Link from "next/link";

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
    <Link href={item.url}>
      <a
        type="button"
        className={`${style.page_header__navigation__item} ${
          activeId === item.id ? style.__isActive : ""
        }`}
        onClick={onPress}
        href={item.url}
      >
        {item.title}
      </a>
    </Link>
  );
};

export default ButtonNavbarHeader;
