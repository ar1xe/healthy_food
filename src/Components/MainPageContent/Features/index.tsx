import React, { FC } from "react";
import { ItemFeatures, itemsFeatures } from "./modelFeatures";
import ItemsFeaturesComponent from "../Features/ItemFeatures";
import style from "../Features/features.module.scss";

const Features: FC<ItemFeatures> = () => {
  return (
    <div className={style.page_features__wrapper}>
      <div className={style.page_features__container}>
        <div className={style.page_features__head}>
          <span>Features</span>
          <h2>Food with a New Passion</h2>
        </div>
        <div className={style.page_features__items}>
          {itemsFeatures.map((elem: ItemFeatures) => (
            <ItemsFeaturesComponent
              key={elem.id}
              src={elem.src}
              title={elem.title}
              description={elem.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
