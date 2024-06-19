"use client";
import { useState } from "react";
import dictionaryData from "@/app/store/dictionaryData";
import { AnimatePresence, motion } from "framer-motion";

import style from "@/app/css/components/Footer/AppleSites.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const MobileListItem: React.FC<{
  title: string;
  directoryLink: { title: string }[];
  index: string;
}> = ({ title, directoryLink, index }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div className={style.box}>
      <div className={style.title} onClick={() => setIsOpened((prev) => !prev)}>
        <div>{title}</div>
        <motion.div
          className={style.titleBtn}
          animate={{ rotateX: isOpened ? 180 : 0, y: isOpened ? 4 : 0 }}
          transition={{ type: "sping" }}
        >
          <svg width="11" height="6" viewBox="0 0 11 6">
            <polyline
              data-footer-icon-shape=""
              stroke="currentColor"
              fill="none"
              points="10.075 0.675 5.5 5.323 0.925 0.675"
            >
              <animate
                data-footer-animate="expand"
                attributeName="points"
                values="10.075 0.675 5.5 5.323 0.925 0.675;
					10.075 3 5.5 3 0.925 3;
					10.075 5.325 5.5 0.676 0.925 5.325"
                dur="320ms"
                begin="indefinite"
                fill="freeze"
                keyTimes="0;
					0.5;
					1"
                calcMode="spline"
                keySplines="0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1"
              ></animate>
              <animate
                data-footer-animate="collapse"
                attributeName="points"
                values="10.075 5.325 5.5 0.676 0.925 5.325;
					10.075 3 5.5 3 0.925 3;
					10.075 0.675 5.5 5.323 0.925 0.675"
                dur="320ms"
                begin="indefinite"
                fill="freeze"
                keyTimes="0;
					0.5;
					1"
                calcMode="spline"
                keySplines="0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1"
              ></animate>
            </polyline>
          </svg>
        </motion.div>
      </div>
      <motion.div
        className={style.list}
        layout
        animate={{ height: isOpened ? "auto" : 0 }}
      >
        <AnimatePresence>
          {isOpened &&
            directoryLink.map((directoryLinkTitle, i) => (
              <motion.div
                key={`${index}b${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {directoryLinkTitle.title}
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const DesktopListItem: React.FC<{
  title: string;
  directoryLink: { title: string }[];
}> = ({ title, directoryLink }) => {
  return (
    <div>
      <div className={style.desktopTitle}>{title}</div>
      {directoryLink.map((data, i) => {
        return (
          <div className={style.desktopList} key={i}>
            {data.title}
          </div>
        );
      })}
    </div>
  );
};

const AppleSites: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.btn}>
          <FontAwesomeIcon icon={faAppleWhole} />
        </div>
        <div className={style.arrow}>&#x203A;</div>
        <div className={style.locaiton}>AirPods</div>
      </div>
      <div className={style.mobileContainer}>
        {dictionaryData.map(({ title, directoryLink }, i) => (
          <MobileListItem
            title={title}
            directoryLink={directoryLink}
            index={`a${i}`}
            key={`a${i}`}
          />
        ))}
      </div>
      <div className={style.desktopContainer}>
        <div>
          <DesktopListItem
            title={dictionaryData[0].title}
            directoryLink={dictionaryData[0].directoryLink}
          />
        </div>
        <div>
          <DesktopListItem
            title={dictionaryData[1].title}
            directoryLink={dictionaryData[1].directoryLink}
          />
          <DesktopListItem
            title={dictionaryData[2].title}
            directoryLink={dictionaryData[2].directoryLink}
          />
        </div>
        <div>
          <DesktopListItem
            title={dictionaryData[3].title}
            directoryLink={dictionaryData[3].directoryLink}
          />
        </div>
        <div>
          <DesktopListItem
            title={dictionaryData[4].title}
            directoryLink={dictionaryData[4].directoryLink}
          />
          <DesktopListItem
            title={dictionaryData[5].title}
            directoryLink={dictionaryData[5].directoryLink}
          />
          <DesktopListItem
            title={dictionaryData[6].title}
            directoryLink={dictionaryData[6].directoryLink}
          />
        </div>
        <div>
          <DesktopListItem
            title={dictionaryData[7].title}
            directoryLink={dictionaryData[7].directoryLink}
          />
          <DesktopListItem
            title={dictionaryData[8].title}
            directoryLink={dictionaryData[8].directoryLink}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleSites;
