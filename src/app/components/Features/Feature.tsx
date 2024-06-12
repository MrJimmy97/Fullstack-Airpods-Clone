"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import style from "@/app/css/components/Features/Feature.module.scss";

const Feature: React.FC<{
  image: string;
  description: string;
  content: React.ReactNode;
  title: string;
  sup?: string;
}> = (props) => {
  const [isFliped, setIsFliped] = useState<boolean>(false);
  return (
    <div className={style.card}>
      {isFliped ? (
        <div className={style.flipedContent}>
          <h4>{props.title}</h4>
          <p className={style.content}>
            {props.content}
            <sup>{props.sup}</sup>
          </p>
        </div>
      ) : (
        <>
          <div className={style.imgContainer}>
            <img src={props.image} alt={props.description} />
          </div>
          <div className={style.title}>{props.title}</div>
        </>
      )}
      <div className={style.deleteBtn}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <motion.div
        className={style.flipBtn}
        onClick={() => setIsFliped((prev) => !prev)}
        animate={{ rotate: isFliped ? 90 : 45 }}
        initial={{ rotate: 45 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </motion.div>
    </div>
  );
};

export default Feature;
