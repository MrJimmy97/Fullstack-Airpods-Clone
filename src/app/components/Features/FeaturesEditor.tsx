"use client";

import style from "@/app/css/components/Features/FeaturesEditor.module.scss";
import { motion } from "framer-motion";

import { initialFeatures } from "@/app/database/featuresData";
import { useMutation } from "@tanstack/react-query";
import { initialDataFetch, addDataFetch } from "@/app/util/http";

import { queryClient } from "@/app/util/http";

const FeaturesEditor: React.FC = () => {
  const { mutate: initMutate } = useMutation({
    mutationFn: initialDataFetch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });
  const { mutate: addMutate } = useMutation({
    mutationFn: addDataFetch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });

  function getRandomInt() {
    return Math.floor(Math.random() * 5);
  }
  const initItems = () => {
    initMutate({ features: initialFeatures });
  };
  const addItem = () => {
    const newItem = initialFeatures[getRandomInt()];
    addMutate(newItem);
  };

  return (
    <div className={style.card}>
      <motion.div onClick={initItems} whileHover={{ scale: 1.2 }}>
        Initialization
      </motion.div>
      <motion.div onClick={addItem} whileHover={{ scale: 1.2 }}>
        Add Items
      </motion.div>
    </div>
  );
};

export default FeaturesEditor;
