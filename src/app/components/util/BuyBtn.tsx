import style from "@/app/css/components/util/BuyBtn.module.scss";

const BuyBtn: React.FC<{
  large: boolean;
  isBlackTheme: boolean;
  className?: string;
}> = (props) => {
  let isLarge: string = props.large ? style.large : style.small;
  let isBlackTheme: string = props.isBlackTheme
    ? style.blackTheme
    : style.whiteTheme;

  return (
    <div className={`${isLarge} ${isBlackTheme} ${props.className}`}>Buy</div>
  );
};

export default BuyBtn;
