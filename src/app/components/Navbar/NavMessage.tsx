'use client'

import ArrowButton from "../util/ArrowButton";
import style from "@/app/css/components/Navbar/NavMessage.module.scss";

const NavMessage: React.FC = () => {
  return (
    <div className={style.message}>
      Get 6 months of Apple Music free with your AirPods.* 
      <ArrowButton className={style.btn}>Learn more</ArrowButton>
    </div>
  );
};

export default NavMessage;
