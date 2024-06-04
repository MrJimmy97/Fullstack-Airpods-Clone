"use client";
import Image from "next/image";

import style from "@/app/css/components/Navbar/ProductBar.module.scss";

const imgData: {
  image: string;
  description: string;
  title: JSX.Element;
}[] = [
  {
    image: "/header_navbar/airpods_2gen.svg",
    description: "AirPods2nd",
    title: (
      <div>
        AirPods
        <br />
        2nd Generation
      </div>
    ),
  },
  {
    image: "/header_navbar/airpods_3gen.svg",
    description: "AirPods3rd",
    title: (
      <div>
        AirPods <br />
        3rd Generation
      </div>
    ),
  },
  {
    image: "/header_navbar/airpods_pro.svg",
    description: "AirPodsPro2nd",
    title: (
      <div>
        AirPods Pro
        <br />
        2nd Generation
      </div>
    ),
  },
  {
    image: "/header_navbar/airpods_max.svg",
    description: "AirPodsMax",
    title: <div>AirPods Max</div>,
  },
  {
    image: "/header_navbar/airpods_compare.svg",
    description: "Compare",
    title: <div>Compare</div>,
  },
  {
    image: "/header_navbar/apple_music.svg",
    description: "AppleMusic",
    title: <div>Apple Music</div>,
  },
];

const ProductBar: React.FC = () => {
  return (
    <div className={style.productBar}>
      {imgData.map(({ image, description, title }, i) => (
        <div key={i} className={style.btn}>
          <Image src={image} alt={description} width={35} height={55} />
          {title}
        </div>
      ))}
    </div>
  );
};

export default ProductBar;
