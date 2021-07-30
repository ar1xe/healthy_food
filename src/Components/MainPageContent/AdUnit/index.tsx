import React, { FC, useState } from "react";
import Image from "next/image";
import startLogo from "../../../../public/startLogo.svg";
import style from "../AdUnit/adunit.module.scss";
import Popup from "reactjs-popup";
import Link from "next/link";

const AdUnit: FC = () => {
  const onPressSubmit = () => {
    setName("");
    setPhone("");
  };

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

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
            <Popup
              trigger={
                <button type="button" className={style.page_adunit__btns}>
                  Order Now
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className={style.modal}>
                  <button className={style.close} onClick={close}>
                    &times;
                  </button>
                  <div className={style.header}>About order</div>
                  <div className={style.content}>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={onChangeName}
                    />
                    <input
                      type="text"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={onChangePhone}
                    />
                    <button type="button" onClick={onPressSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            <Link href="/foodDetails">
              <a type="button" className={style.page_adunit__btns}>
                Make An Order
              </a>
            </Link>
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
