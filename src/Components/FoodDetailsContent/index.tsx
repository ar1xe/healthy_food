import React, { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import MenuItem from "../MainPageContent/Menu/MenuItem";

const FoodDetailsContent: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  if (!cartItems.length) {
    return <div>Cart is empty</div>;
  }

  return (
    <div>
      {cartItems.map((item) => {
        const { id, src, title, price, description } = item.item;
        return (
          <MenuItem
            key={id}
            id={id}
            src={src}
            title={title}
            price={price}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default FoodDetailsContent;
