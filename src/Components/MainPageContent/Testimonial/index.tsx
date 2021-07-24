import React, { FC } from "react";
import style from "../Testimonial/testimonial.module.scss";
import Image from "next/image";
import face from "../Testimonial/img/face.png";

const Testimonail: FC = () => {
  return (
    <div className={style.testimonial__wrapper}>
      <div className={style.testimonial__container}>
        <span>Testimonial</span>
        <h3>Making Food great again and again</h3>
        <p>
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          to make your.
        </p>
        <div className={style.testimonial_logo__wrapper}>
          <Image
            src={face}
            alt="alt face"
            className={style.testimonial__logo}
            width={60}
            height={60}
          />
        </div>
        <p>
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          very successful to make your.
        </p>
        <h4>Augusta W. Reynoso</h4>
        <p>UI & UX DeSIGNER</p>
      </div>
    </div>
  );
};

export default Testimonail;
