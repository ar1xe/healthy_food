import React, { FC } from "react";
import sprite from "../../../../public/sprite.svg";
import Image from "next/dist/client/image";
import startLogo from "../../../../public/vercel.svg";

const AdUnit: FC = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Making time a good time by making food the good food.</h1>
        </div>
        <div>
          <span>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </span>
        </div>
        <div>
          <button type="button">Order Now</button>
          <button type="button">Food Details</button>
        </div>
      </div>
      <div>
        <Image src={startLogo} alt="startLogo" />
      </div>
    </div>
  );
};

export default AdUnit;
