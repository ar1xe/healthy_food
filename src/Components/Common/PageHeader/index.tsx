import React, { FC } from "react";
import style from "../PageHeader/header.module.scss";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { BtnHeader, buttonsHeader } from "./ButtonNavbarHeader/modelBtn";
import ButtonNavbarHeader from "./ButtonNavbarHeader";

const PageHeader: FC<BtnHeader> = () => {
  return (
    <div className={style.page_header__wrapper}>
      <div className={style.page_header__container}>
        <div>
          <Image src={logo} alt="logo" width={46} height={46} />
        </div>
        <div className={style.page_header__navigation}>
          {buttonsHeader.map((elem: BtnHeader) => (
            <ButtonNavbarHeader key={elem.id} title={elem.title} />
          ))}

          {/* <span className={style.page_header__navigation__item}>Home</span>
          <span className={style.page_header__navigation__item}>About us</span>
          <span className={style.page_header__navigation__item}>
            Contact us
          </span> */}
        </div>
        <div>
          <button type="button" className={style.page_header__navigation__btn}>
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
