"use client";
import style from "@/app/css/components/Compares/Spec.module.scss";
import { useContext } from "react";
import { ElementContext } from "@/app/store/getTermsYPosition-context";

const Spec: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={style.spec}>{children}</div>;
};
const Sup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { element } = useContext(ElementContext);

  const scrollToTerms = () => {
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return <sup onClick={scrollToTerms}>{children}</sup>;
};
const Null: React.FC = () => {
  return <Spec>&#8212;</Spec>;
};
const AdaptiveAudio: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.adaptive}
        src="./compares/adaptiveAudio.png"
        alt="adaptive audio"
      />
      <div className={style.content}>
        Adaptive Audio<Sup>◊</Sup>
      </div>
    </Spec>
  );
};
const NoiseCancellation: React.FC = () => {
  return (
    <Spec>
      <div className={style.noise}>
        <img src="./compares/noiseCancellation.png" alt="noise cancellation" />
        <img src="./compares/noiseTransparency.png" alt="noise transparency" />
      </div>
      <div className={style.content}>
        Active Noise Cancellation and Transparency mode
      </div>
    </Spec>
  );
};
const Conversation: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.conversation}
        src="./compares/conversationAwareness.png"
        alt="Conversation Awareness"
      />
      <div className={style.content}>
        Conversation Awareness<Sup>◊</Sup>
      </div>
    </Spec>
  );
};
const SpatialAudio: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.spatial}
        src="./compares/spatialAudio.png"
        alt="Spatial Audio"
      />
      <div className={style.content}>
        Personalized Spatial Audio with dynamic head tracking<Sup>◊◊</Sup>
      </div>
    </Spec>
  );
};
const Dust: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.water}
        src="./compares/waterResistant.png"
        alt="water resistant"
      />
      <div className={style.content}>
        Dust, sweat, and water resistant<Sup>Δ</Sup>
      </div>
    </Spec>
  );
};
const Sweat: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.water}
        src="./compares/waterResistant.png"
        alt="water resistant"
      />
      <div className={style.content}>
        Sweat and water resistant<Sup>◊◊◊</Sup>
      </div>
    </Spec>
  );
};
const Airpods_2nd: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.case}
        src="./compares/AirPods2nd_specCharging.png"
        alt="Lightning Charging Case"
      />
      <div className={style.content}>Lightning Charging Case</div>
    </Spec>
  );
};
const Airpods_3rd: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.case}
        src="./compares/AirPods3rd_specCharging.png"
        alt="Lightning Charging Case or MagSafe Charging Case"
      />
      <div className={style.content}>
        Lightning Charging Case or MagSafe Charging Case<Sup>ΔΔ</Sup>
      </div>
    </Spec>
  );
};
const Airpods_pro: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.case}
        src="./compares/AirPodsPro_specCharging.png"
        alt="MagSafe Charging Case "
      />
      <div className={style.content}>
        MagSafe Charging Case (USB‑C) with speaker and lanyard loop<Sup>ΔΔ</Sup>
      </div>
    </Spec>
  );
};
const Airpods_max: React.FC = () => {
  return (
    <Spec>
      <img
        className={style.case}
        src="./compares/AirPodsMax_specCharging.png"
        alt="Smart Case"
      />
      <div className={style.content}>Smart Case</div>
    </Spec>
  );
};
const Hours: React.FC<{ time: number }> = ({ time }) => {
  return (
    <Spec>
      <div className={style.time}>{time} hrs</div>
      <div className={style.content}>
        Up to {time} hours of listening time with a single charge<Sup>ΔΔΔ</Sup>
      </div>
    </Spec>
  );
};

export {
  Airpods_2nd,
  AdaptiveAudio,
  Airpods_3rd,
  Airpods_pro,
  Airpods_max,
  Null,
  NoiseCancellation,
  Hours,
  SpatialAudio,
  Sweat,
  Dust,
  Conversation,
};
