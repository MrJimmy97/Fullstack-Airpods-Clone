"use client";

import style from "@/app/css/components/Features/FeaturesEditor.module.scss";
import { motion } from "framer-motion";

const FeaturesEditor: React.FC = () => {
  //     const initItems = () => {};
  // const deleteItem = () => {};
  // const addItem = () => {};
  // const addWrongItem = () => {};
  return (
    <div className={style.card}>
      <motion.div whileHover={{ scale: 1.2 }}>Initialization</motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>Add Items</motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>Add Error</motion.div>
    </div>
  );
};

export default FeaturesEditor;
