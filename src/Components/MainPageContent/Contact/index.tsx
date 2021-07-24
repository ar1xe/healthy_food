import React, { FC } from "react";
import style from "../Contact/contact.module.scss";

const Contact: FC = () => {
  return (
    <div className={style.contact__wrapper}>
      <div className={style.contact__container}>
        <span>Contact</span>
        <h3>
          Food Stalls with Persons but also specialized equipment, Skills to
          manage.
        </h3>
        <div className={style.contact__input}>
          <input type="text" placeholder="Enter your message" />
          <button type="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
