"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import style from "@/app/css/components/Navbar/MainNavbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faShoppingBag,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const navBarLink: string[] = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Only On Apple",
  "Accessories",
  "Support",
];

const MainNavbar: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const menuClickHandler = () => {
    setIsClicked((prev) => {
      if (prev) document.body.style.overflow = "scroll";
      else document.body.style.overflow = "hidden";
      return !prev;
    });
  };
  return (
    <div className={style.navbar} style={{ backgroundColor: "transparent" }}>
      <div className={style.navContent}>
        <FontAwesomeIcon
          icon={faAppleWhole}
          style={{ display: isClicked ? "none" : "block" }}
        />
        {navBarLink.map((data, i) => (
          <div key={i} className={style.navLink}>
            {data}
          </div>
        ))}
        <FontAwesomeIcon
          style={{ display: isClicked ? "none" : "block" }}
          className={style.magnify}
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon
          style={{ display: isClicked ? "none" : "block" }}
          icon={faShoppingBag}
        />
        <div
          className={style.hamburger}
          style={{ marginLeft: isClicked ? "auto" : "0" }}
          onClick={menuClickHandler}
        >
          <motion.div
            animate={{ rotate: isClicked ? 45 : 0, y: isClicked ? 5 : 0 }}
          ></motion.div>
          <motion.div
            animate={{ rotate: isClicked ? -45 : 0, y: isClicked ? -5 : 0 }}
          ></motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className={style.navMenu}
            animate={{
              height: "calc(100% - 48px)",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={style.navLinks}>
              {navBarLink.map((data, i) => (
                <div key={i} className={style.navLink}>
                  {data}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbar;
