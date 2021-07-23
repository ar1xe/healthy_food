import React, { FC } from "react";
import Image from "next/image";
import { ItemFeatures } from "../modelFeatures";
import style from "../ItemFeatures/Itemfeatures.module.scss";

const ItemsFeaturesComponent: FC<ItemFeatures> = ({
  id,
  src,
  title,
  description,
}) => {
  return (
    <div className={style.item_features__container}>
      <Image src={src} alt="logo" width={65} height={65} />
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};
export default ItemsFeaturesComponent;
