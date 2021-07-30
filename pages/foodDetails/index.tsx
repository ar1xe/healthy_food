import React, { FC } from "react";
import PageFooter from "../../src/Components/Common/PageFooter";
import PageHeader from "../../src/Components/Common/PageHeader";
import MenuItem from "../../src/Components/MainPageContent/Menu/MenuItem";
import { useAppSelector } from "../../src/redux/hooks";
import style from "../foodDetails/food_detail.module.scss";

const FoodDetails: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  if (!cartItems.length) {
    return (
      <div>
        <PageHeader />
        <div className={style.food_details_cart_empty__wrapper}>
          <div className={style.food_details_cart_empty__container}>
            <h1>Cart is empty</h1>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
  const totalPrice = cartItems.reduce((sum, currentItem) => {
    return sum + currentItem.count * currentItem.item.price;
  }, 0);
  return (
    <>
      <PageHeader />
      <div className={style.food_details__wrapper}>
        <div className={style.food_details__container}>
          {cartItems.map((item) => {
            const { id, src, title, price, description } = item.item;
            return (
              <>
                <MenuItem
                  key={id}
                  id={id}
                  src={src}
                  title={title}
                  price={price}
                  description={description}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className={style.food_details__totalprice}>
        <span>Total price{totalPrice}$</span>
      </div>
      <PageFooter />
    </>
  );
};

export default FoodDetails;
