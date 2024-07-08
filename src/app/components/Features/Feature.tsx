"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/util/http";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faTrashCan,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { featuresData } from "@/app/database/featuresData";
import { deleteItem, updateDataFetch } from "@/app/util/http";

import style from "@/app/css/components/Features/Feature.module.scss";

const Feature: React.FC<featuresData> = ({
  image,
  description,
  content,
  title,
  sup,
  className,
  _id,
}) => {
  const [isFliped, setIsFliped] = useState<boolean>(false);
  const { mutate: updateMutate } = useMutation({
    mutationFn: updateDataFetch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });

  const handleUpdate = () => {
    updateMutate({
      _id,
      image,
      description,
      content,
      title: "Updated!",
      sup,
      className,
    });
  };
  const handleDelete = () => {
    deleteMutate(_id);
  };

  return (
    <div className={`${style.card} ${className}`}>
      {isFliped ? (
        <div className={style.flipedContent}>
          <h4 style={{ color: title === "Updated!" ? "green" : "black" }}>
            {title}
          </h4>
          <p className={style.content}>
            {content}
            <sup>{sup}</sup>
          </p>
        </div>
      ) : (
        <>
          <div className={style.imgContainer}>
            <img src={image} alt={description} />
          </div>
          <div
            style={{ color: title === "Updated!" ? "green" : "black" }}
            className={style.title}
          >
            {title}
          </div>
        </>
      )}
      <div className={style.deleteBtn} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <div className={style.updateBtn} onClick={handleUpdate}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
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
