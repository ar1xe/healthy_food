import React, { FC } from "react";
import style from "../TakeAway/take_away.module.scss";
import Image from "next/image";
import phone from "../TakeAway/img/phone.png";
import Link from "next/link";

const TakeAway: FC = () => {
  return (
    <div className={style.take_away__wrapper}>
      <div className={style.take_away__container}>
        <div className={style.take_away__description}>
          <div>
            <span>Take away</span>
            <h3>Food Stalls with Persons but to Product marketing plane.</h3>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipmentwith Persons but also Just Food Stalls with
              Persons.
            </p>
          </div>
          <div className={style.take_away__btns}>
            <Link href="https://apps.apple.com/ru/app/%D0%B4%D0%BE%D0%BC/id1110145103">
              <a type="button" className={style.take_away_btns__app}>
                App Store
              </a>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.nordcurrent.canteenhd">
              <a type="button" className={style.take_away_btns__google}>
                Google Play
              </a>
            </Link>
          </div>
        </div>

        <div>
          <Image src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default TakeAway;
