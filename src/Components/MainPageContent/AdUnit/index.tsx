import React, { FC } from "react";
import Image from "next/image";
import startLogo from "../../../../public/startLogo.svg";
import style from "../AdUnit/adunit.module.scss";

const AdUnit: FC = () => {
  return (
    <div className={style.page_adunit__wrapper}>
      <div className={style.page_adunit__container}>
        <div>
          <div className={style.page_adunit__heading}>
            <h1>Making time a good time by making food the good food.</h1>
          </div>
          <div className={style.page_adunit__description}>
            <span>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </span>
          </div>
          <div className={style.page_adunit__btns_container}>
            <button type="button" className={style.page_adunit__btns}>
              Order Now
            </button>
            <button type="button" className={style.page_adunit__btns}>
              Food Details
            </button>
          </div>
        </div>
        <div className={style.page_adunit__logo}>
          <Image src={startLogo} alt="startLogo" width={801} height={670} />
        </div>
      </div>
    </div>
  );
};

export default AdUnit;
