import React, { FC } from "react";
import Image from "next/image";
import mask from "../AboutUs/img/Mask Group.png";
import style from "../AboutUs/aboutus.module.scss";

const AboutUs: FC = () => {
  return (
    <div className={style.about_us__wrapper}>
      <div className={style.about_us__container}>
        <div className={style.about_us__logo}>
          <Image src={mask} alt="mask logo" width={560} height={500} />
        </div>
        <div className={style.about_us__content}>
          <span>About us</span>
          <h3>
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.
          </h3>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
          <button type="button" className={style.about_us_content__btn}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
