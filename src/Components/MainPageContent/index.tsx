import React, { FC } from "react";
import PageFooter from "../Common/PageFooter";
import PageHeader from "../Common/PageHeader";
import AboutUs from "./AboutUs";
import AdUnit from "./AdUnit";
import Contact from "./Contact";
import Features from "./Features";
import Menu from "./Menu";
import TakeAway from "./TakeAway";
import Testimonail from "./Testimonial";

const MainPageContent: FC = () => {
  return (
    <>
      <PageHeader />
      <AdUnit />
      <Features />
      <AboutUs />
      <Menu />
      <TakeAway />
      <Testimonail />
      <Contact />
      <PageFooter />
    </>
  );
};

export default MainPageContent;
