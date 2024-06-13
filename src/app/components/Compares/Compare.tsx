import style from "@/app/css/components/Compares/Compare.module.scss";
import BuyBtn from "../util/BuyBtn";
import ArrowBtn from "../util/ArrowBtn";
import {
  Airpods_2nd,
  AdaptiveAudio,
  Airpods_3rd,
  Airpods_pro,
  Airpods_max,
  Null,
  Conversation,
  NoiseCancellation,
  Hours,
  SpatialAudio,
  Sweat,
  Dust,
} from "./Spec";

const Compare: React.FC<{
  item: {
    productName: string;
    generation: string;
    price: string;
    image: string;
    description: string;
    adaptiveAudio: boolean;
    noiseCancellation: boolean;
    conversationAwareness: boolean;
    spatialAudio: boolean;
    waterResistant: string;
    case: string;
    time: number;
  };
}> = ({ item }) => {
  return (
    <div className={style.list}>
      <div className={style.product}>
        <div className={style.image}>
          <img src={item.image} alt={item.description} />
        </div>
        <div className={style.name}>
          <div className={style.title}>{item.productName}</div>
          <div className={style.gen}>{item.generation}</div>
        </div>
        <div className={style.price}>{item.price}</div>
        <BuyBtn large={false} isBlackTheme={false} className={style.buyBtn} />
        <ArrowBtn isBlackTheme={false} className={style.arrowBtn}>
          Learn more
        </ArrowBtn>
      </div>
      <div className={style.specContainer}>
        {item.adaptiveAudio ? <AdaptiveAudio /> : <Null />}
        {item.noiseCancellation ? <NoiseCancellation /> : <Null />}
        {item.noiseCancellation ? <NoiseCancellation /> : <Null />}
        {item.conversationAwareness ? <Conversation /> : <Null />}
        {item.spatialAudio ? <SpatialAudio /> : <Null />}
        {item.waterResistant !== "null" ? (
          item.waterResistant === "sweat" ? (
            <Sweat />
          ) : (
            <Dust />
          )
        ) : (
          <Null />
        )}
        {item.case === "Lighting" && <Airpods_2nd />}
        {item.case === "Lighting&MagSafe" && <Airpods_3rd />}
        {item.case === "USB-C" && <Airpods_pro />}
        {item.case === "Smart" && <Airpods_max />}
        <Hours time={item.time} />
      </div>
    </div>
  );
};

export default Compare;
