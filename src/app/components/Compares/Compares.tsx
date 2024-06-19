import style from "@/app/css/components/Compares/Compares.module.scss";
import Title from "../util/Title";
import ArrowBtn from "../util/ArrowBtn";
import airpodsData from "@/app/store/airpodsData";
import Compare from "./Compare";

const Compares: React.FC = () => {
  return (
    <div>
      <Title>
        Which AirPods are
        <br />
        right for you?
      </Title>
      <div className={style.container}>
        <div className={style.lists}>
          {airpodsData.map((data, i) => (
            <Compare item={data} key={i} />
          ))}
        </div>
        <ArrowBtn className={style.btn} isBlackTheme={false}>
          Compare all AirPods models
        </ArrowBtn>
      </div>
    </div>
  );
};

export default Compares;
