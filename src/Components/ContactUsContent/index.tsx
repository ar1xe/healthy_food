import React, { FC, useState } from "react";
import PageFooter from "../Common/PageFooter";
import PageHeader from "../Common/PageHeader";
import Image from "next/image";
import twitter from "./img/twitter.png";
import instagram from "./img/inst.png";
import style from "../ContactUsContent/contact_us.module.scss";

const ContactUsContent: FC = () => {
  const [message, setMessage] = useState<string>("");

  const onChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const onSendMessage = () => {
    prompt(message, "confirm sending the question");
    setMessage("");
  };

  return (
    <>
      <PageHeader />
      <div className={style.contact_us__wrapper}>
        <div className={style.contact_us__header}>
          <h1>CONTACT US</h1>
        </div>
        <div className={style.contact_us__input_btn}>
          <input
            type="text"
            placeholder="Enter your question"
            value={message}
            onChange={onChangeMessage}
          />
          <button type="button" onClick={onSendMessage}>
            Send
          </button>
        </div>
        <div className={style.contact_us_logos__wrapper}>
          <div className={style.contact_us__logos}>
            <Image
              src={twitter}
              alt="alt logo"
              width={130}
              height={100}
              onClick={() =>
                (location.href = "https://twitter.com/?logout=1627486036279")
              }
            />
            <Image
              src={instagram}
              alt="alt inst"
              width={200}
              height={100}
              onClick={() =>
                (location.href = "https://www.instagram.com/ivlevchef/")
              }
            />
          </div>
        </div>
        <div className={style.contact_us_contact__wrapper}>
          <div className={style.contact_us_contact}>
            <span>phone +7 999 123 66 00</span>
            <span>
              <a href="https://mail.ru/"> mail mail@mail.ru</a>
            </span>
            <span>
              <a href="http://localhost:3000/mainPage"> www.website.com</a>
            </span>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
};

export default ContactUsContent;
