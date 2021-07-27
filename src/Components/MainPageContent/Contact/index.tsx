import React, { FC, useState } from "react";
import style from "../Contact/contact.module.scss";

const Contact: FC = () => {
  const [message, setMessage] = useState<string>("");

  const onChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const onSendMessage = () => {
    prompt(message, "confirmation of message sending?");
    setMessage("");
  };

  return (
    <div className={style.contact__wrapper}>
      <div className={style.contact__container}>
        <span>Contact</span>
        <h3>
          Food Stalls with Persons but also specialized equipment, Skills to
          manage.
        </h3>
        <div className={style.contact__input}>
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
      </div>
    </div>
  );
};

export default Contact;
