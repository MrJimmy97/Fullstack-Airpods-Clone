"use client";

import style from "@/app/css/components/util/ArrowBtn.module.scss";

const ArrowBtn: React.FC<{
  className?: string;
  isBlackTheme: boolean;
  children: React.ReactNode;
}> = (props) => {
  let isBlackTheme = props.isBlackTheme ? style.blackTheme : style.whiteTheme;
  return (
    <span className={`${style.btn} ${props.className ?? ""} ${isBlackTheme}`}>
      <span>{props.children}</span>
      <span className={style.arrow}>{" >"}</span>
    </span>
  );
};

export default ArrowBtn;
