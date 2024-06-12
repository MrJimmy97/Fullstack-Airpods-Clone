import style from "@/app/css/components/Features/Features.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import Title from "../util/Title";
import Feature from "./Feature";
import FeaturesEditor from "./FeaturesEditor";

let data = {
  key: "n1",
  title: "One-tap setup",
  image: "/features/tile_onetap_setup_large.jpg",
  image_s: "",
  description: "onetap_setup",
  css: "width: 274px;height: 338pxs;@media (min-width:980px){width: 343px;height: 376px;transform: translateY(-40px)}",
  content: "Connect immediately to your iPhone or iPad.",
  sup: "1",
};

const Features: React.FC = () => {
  return (
    <div>
      <Title>
        A magical connection to
        <br /> your devices.
      </Title>
      <div className={style.scrollBar}>
        <Feature
          image={data.image}
          description={data.description}
          title={data.title}
          content={data.content}
          sup={data.sup}
        />
        <FeaturesEditor />
      </div>
      <div className={style.scrollBtn}>
        <button>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <button>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
    </div>
  );
};

export default Features;
