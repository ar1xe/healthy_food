import React, { FC } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import social from "../../../../public/social.png";
import style from "../PageFooter/footer.module.scss";

const PageFooter: FC = () => {
  return (
    <div className={style.page_footer__wrapper}>
      <div className={style.page_footer__container}>
        <div className={style.page_footer__contacts}>
          <div>
            <Image src={logo} alt="logo" width={61} height={61} />
          </div>
          <span className={style.page_footer__navigation}>
            www.company name.com
          </span>
          <span className={style.page_footer__navigation}>
            companyname@gmail.com
          </span>
          <span className={style.page_footer__navigation}>
            Phone: +7 485-118-44-00
          </span>
        </div>
        <div className={style.page_footer__list}>
          <ul className={style.page_footer__ul}>
            Home
            <li>Landingpage</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>UI and UX Design</li>
            <li>Web Design</li>
          </ul>
        </div>
        <div className={style.page_footer__list}>
          <ul className={style.page_footer__ul}>
            Menu
            <li>Landingpage</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>UI and UX Design</li>
            <li>Web Design</li>
          </ul>
        </div>
        <div className={style.page_footer__list}>
          <ul className={style.page_footer__ul}>
            Company
            <li>Landingpage</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>
              <Image src={social} alt="social" width={150} height={32} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
