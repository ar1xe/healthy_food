import Head from "next/head";
import { FC } from "react";
import { ICustomHead } from "../../../types/interfaces";

const CustomHead: FC<ICustomHead> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        {title && (
          <meta name="title" property="og:title" content={title} key="title" />
        )}
        {description && (
          <meta
            name="description"
            property="og:description"
            content={description}
            key="description"
          />
        )}
        )
      </Head>
    </>
  );
};

export default CustomHead;
