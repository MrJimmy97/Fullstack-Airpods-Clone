"use client";

import ArrowBtn from "../UI/ArrowBtn";
import style from "@/app/css/components/Navbar/NavMessage.module.scss";

const NavMessage: React.FC = () => {
  return (
    <div className={style.message}>
      Get 6 months of Apple Music free with your AirPods.*
      <ArrowBtn className={style.btn} isBlackTheme={false}>
        Learn more
      </ArrowBtn>
    </div>
  );
};

export default NavMessage;
