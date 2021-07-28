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
    prompt(message, "confirmation of message sending?");
    setMessage("");
  };

  return (
    <>
      <PageHeader />
      <div className={style.contact_us__header}>
        <h1>CONTACT US</h1>
      </div>
      <div>
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
      <div>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={onChangeMessage}
        />
        <button type="button" onClick={onSendMessage}>
          Send
        </button>
      </div>

      <PageFooter />
    </>
  );
};

export default ContactUsContent;
