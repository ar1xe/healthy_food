import React, { FC } from "react";
import style from "../Testimonial/testimonial.module.scss";
import Image from "next/image";
import face from "../Testimonial/img/face.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonail: FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className={style.testimonial__wrapper}>
        <div className={style.testimonial__container}>
          <span>Testimonial</span>
          <h3>Making Food great again and again</h3>
          <p>
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc to make your.
          </p>
        </div>
      </div>
      <div className={style.carousel__wrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className={style.carousel__item}>
            <Image
              src={face}
              alt="alt face"
              width={60}
              height={60}
              className={style.testimonial__logo}
            />
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <h4>Augusta W. Reynoso</h4>
            <span>UI & UX DeSIGNER</span>
          </div>
          <div className={style.carousel__item}>
            <Image
              src={face}
              alt="alt face"
              width={60}
              height={60}
              className={style.testimonial__logo}
            />
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <h4>Augusta W. Reynoso</h4>
            <span>UI & UX DeSIGNER</span>
          </div>
          <div className={style.carousel__item}>
            <Image
              src={face}
              alt="alt face"
              width={60}
              height={60}
              className={style.testimonial__logo}
            />
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <h4>Augusta W. Reynoso</h4>
            <span>UI & UX DeSIGNER</span>
          </div>
          <div className={style.carousel__item}>
            <Image
              src={face}
              alt="alt face"
              width={60}
              height={60}
              className={style.testimonial__logo}
            />
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <h4>Augusta W. Reynoso</h4>
            <span>UI & UX DeSIGNER</span>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonail;
