import BuyBtn from "../util/BuyBtn";
import ArrowBtn from "../util/ArrowBtn";
import style from "@/app/css/components/Products/BtnContainer.module.scss";

const BtnContainer: React.FC<{
  className?: string | null;
  large: boolean;
  isBlackTheme: boolean;
}> = (props) => {
  return (
    <div className={`${props.className ?? ""} ${style.box}`}>
      <BuyBtn large={props.large} isBlackTheme={props.isBlackTheme} />
      <ArrowBtn className={style.arrowBtn} isBlackTheme={props.isBlackTheme}>
        Learn More
      </ArrowBtn>
    </div>
  );
};

export default BtnContainer;
