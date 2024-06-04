'use client'

import style from "@/app/css/components/util/ArrowButton.module.scss";

const ArrowButton: React.FC<{
  className: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <span className={`${style.btn} ${props.className}`}>
      <span>{props.children}</span>
      <span className={style.arrow}>{" >"}</span>
    </span>
  );
};

export default ArrowButton;
