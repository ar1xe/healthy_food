import React, { FC } from "react";
import PageHeader from "../Common/PageHeader";
import PageFooter from "../Common/PageFooter";
import { ItemAbout, itemAbout } from "./ItemAboutUs/modelItemAboutUs";
import ItemAboutUs from "./ItemAboutUs";
import style from "../AboutUsContent/about_us.module.scss";

const AboutUsContent: FC = () => {
  return (
    <>
      <PageHeader />
      <div className={style.about_us__header}>
        <h1>ABOUT OUR RESTAURANT</h1>
      </div>
      <div className={style.about_us__wrapper}>
        <div className={style.about_us__container}>
          {itemAbout.map((item: ItemAbout) => (
            <ItemAboutUs
              key={item.id}
              src={item.src}
              head={item.head}
              discription={item.discription}
            />
          ))}
        </div>
      </div>
      <PageFooter />;
    </>
  );
};

export default AboutUsContent;
