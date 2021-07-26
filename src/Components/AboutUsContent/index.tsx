import React, { FC } from "react";
import PageHeader from "../Common/PageHeader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import face from "../MainPageContent/Testimonial/img/face.png";

const AboutUsContent: FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      <PageHeader />
      <Carousel responsive={responsive} draggable={false}>
        <div>
          <Image src={face} alt="alt face" width={500} height={500} />
        </div>
        <div>
          <Image src={face} alt="alt face" width={500} height={500} />
        </div>
        <div>
          <Image src={face} alt="alt face" width={500} height={500} />
        </div>
        <div>
          <Image src={face} alt="alt face" width={500} height={500} />
        </div>
      </Carousel>
      ;
    </>
  );
};

export default AboutUsContent;
