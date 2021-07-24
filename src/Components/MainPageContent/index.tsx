import React, { FC } from "react";
import PageFooter from "../Common/PageFooter";
import PageHeader from "../Common/PageHeader";
import AboutUs from "./AboutUs";
import AdUnit from "./AdUnit";
import Features from "./Features";
import Menu from "./Menu";
import TakeAway from "./TakeAway";

const MainPageContent: FC = () => {
  return (
    <>
      <PageHeader />
      <AdUnit />
      <Features />
      <AboutUs />
      <Menu />
      <TakeAway />
      <PageFooter />
    </>
  );
};

export default MainPageContent;
