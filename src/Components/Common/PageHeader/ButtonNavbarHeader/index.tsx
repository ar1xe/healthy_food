import React, { FC } from "react";
import { BtnHeader } from "./modelBtn";
import style from "../ButtonNavbarHeader/buttonNavbarHeader.module.scss";

interface ButtonNavbarHeaderProps {
  item: BtnHeader;
  activeId: string;
  clickHandle: (id: string) => void;
}

const ButtonNavbarHeader: FC<BtnHeader> = ({ id, title }) => {
  return (
    <button type="button" className={style.page_header__navigation__item}>
      {title}
    </button>
  );
};

export default ButtonNavbarHeader;
