"use client";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { fetchFeatures } from "@/app/util/http";
import { featuresData } from "@/app/database/featuresData";
import style from "@/app/css/components/Features/Features.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

import Title from "../UI/Title";
import Feature from "./Feature";
import FeaturesEditor from "./FeaturesEditor";
import FeaturesError from "./FeatureError";
import FeaturesLoading from "./FeaturesLoading";

const Features: React.FC = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["features"],
    queryFn: fetchFeatures,
  });

  const featuresBarRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBoxWidth, setBoxWidth] = useState(330);
  const [maxScrolledFeatures, setMaxScrolledFeatures] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let content;

  if (isPending) {
    content = <FeaturesLoading />;
  }
  if (isError) {
    content = <FeaturesError message={error?.message || "Failed to fetch"} />;
  }
  if (data && data.features && data.features.length > 0) {
    content = data.features.map((feature: featuresData & { _id: string }) => {
      return (
        <Feature
          key={feature._id}
          _id={feature._id}
          className={feature.className}
          image={feature.image}
          description={feature.description}
          title={feature.title}
          content={feature.content}
          sup={feature?.sup || undefined}
        />
      );
    });
  }

  useEffect(() => {
    if (data && data.features && data.features.length > 0) {
      const numberOfFeatures = data.features.length;

      setMaxScrolledFeatures(numberOfFeatures - 1);

      if (currentIndex > maxScrolledFeatures) {
        setCurrentIndex(maxScrolledFeatures);
      }
    }
  }, [maxScrolledFeatures, windowWidth, data]);

  useEffect(() => {
    if (windowWidth < 980) {
      setBoxWidth(330);
    } else {
      setBoxWidth(380);
    }
    const scrollElement = featuresBarRef.current;

    if (scrollElement) {
      featuresBarRef.current.scrollLeft = (currentBoxWidth + 20) * currentIndex;
    }
  }, [currentIndex, windowWidth, currentBoxWidth]);

  return (
    <div>
      <Title>
        A magical connection to
        <br /> your devices.
      </Title>
      <div className={style.scrollBar} ref={featuresBarRef}>
        {content}
        <FeaturesEditor />
        <div style={{ minWidth: "1200px", color: "transparent" }}></div>
      </div>
      <div className={style.scrollBtn}>
        <button
          disabled={currentIndex === 0}
          style={{ cursor: currentIndex === 0 ? "auto" : "pointer" }}
          onClick={() => setCurrentIndex((prev) => prev - 1)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <button
          disabled={currentIndex === maxScrolledFeatures}
          style={{
            cursor: currentIndex === maxScrolledFeatures ? "auto" : "pointer",
          }}
          onClick={() => setCurrentIndex((prev) => prev + 1)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
    </div>
  );
};

export default Features;
