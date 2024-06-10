"use client";
import { useState,useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";

import style from "@/app/css/components/Products/Products.module.scss";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import BtnContainer from "./BtnContainer";

const Products: React.FC = () => {
  const [isPlay, setIsplay] = useState<Boolean>(true);
   const videoRef = useRef<HTMLVideoElement>(null)

   const PlayPauseHandler = () => {
    if (isPlay) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsplay((current) => !current);
  };
  return (
    <div className={style.container}>
      <Product className={style.airpods_pro}>
        <video ref={videoRef} autoPlay muted loop>
          <source src="/products/AirPodsPro_Video.mp4" type="video/mp4" />
        </video>
        <ProductDetails
          isBlackTheme={true}
          name="AirPods Pro"
          gen="2nd generation"
          price="HK$1,849"
        />
        <BtnContainer large={true} isBlackTheme={true} />
        <div
          className={style.playBtn}
          onClick={PlayPauseHandler}
        >
          <FontAwesomeIcon icon={isPlay ? faCirclePause : faCirclePlay} />
        </div>
      </Product>
      <Product className={style.airpods_3gen}>
        <img src="/products/airpods_3rd_large.jpg" alt="airpods_3rd_large" />
        <ProductDetails
          isBlackTheme={false}
          name="AirPods Pro"
          gen="3rd generation"
          price="From HK$1,399"
        />
        <BtnContainer large={true} isBlackTheme={false} />
      </Product>
      <Product className={style.airpods_2gen}>
        <img
          className={style.left}
          src="/products/airpods_2nd_left_large.png"
          alt="airpods_2nd_left_large"
        />
        <img
          className={style.right}
          src="/products/airpods_2nd_right_large.png"
          alt="airpods_2nd_right_large"
        />
        <ProductDetails
          isBlackTheme={false}
          name="AirPods"
          gen="2nd generation"
          price="HK$1,099"
        />
        <BtnContainer large={true} isBlackTheme={false} />
      </Product>
      <Product className={style.airpods_max}>
        <ProductDetails
          isBlackTheme={false}
          name="AirPods Max"
          price="HK$4,599"
        />
        <BtnContainer large={true} isBlackTheme={false} />
        <img src="/products/airpods_max_large.png" alt="airpods_max_large" />
      </Product>
    </div>
  );
};

export default Products;
