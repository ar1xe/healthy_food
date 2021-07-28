import React, { FC, useState } from "react";
import style from "../PageHeader/header.module.scss";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { BtnHeader, buttonsHeader } from "./ButtonNavbarHeader/modelBtn";
import ButtonNavbarHeader from "./ButtonNavbarHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const PageHeader: FC<BtnHeader> = () => {
  const [activeId, setActiveId] = useState<string>("1");
  const clickHandle = (id: string) => {
    setActiveId(id);
  };

  const isDisabled = useSelector<RootState, boolean>((state) =>
    Boolean(state.cart.items.length)
  );

  return (
    <div className={style.page_header__wrapper}>
      <div className={style.page_header__container}>
        <div>
          <Image src={logo} alt="logo" width={46} height={46} />
        </div>
        <div className={style.page_header__navigation}>
          {buttonsHeader.map((elem: BtnHeader) => (
            <ButtonNavbarHeader
              key={elem.id}
              item={elem}
              activeId={activeId}
              clickHandle={clickHandle}
            />
          ))}
        </div>
        <div>
          <button
            type="button"
            disabled={!isDisabled}
            className={`
            ${style.page_header__navigation__btn}
            ${!isDisabled ? style._disabled : ""}`}
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
