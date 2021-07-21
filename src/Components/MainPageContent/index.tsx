import React, { FC } from "react";
import PageFooter from "../Common/PageFooter";
import PageHeader from "../Common/PageHeader";
import AdUnit from "./AdUnit";

const MainPageContent: FC = () => {
  return (
    <>
      <PageHeader />
      <AdUnit />
      <PageFooter />
    </>
  );
};

export default MainPageContent;
