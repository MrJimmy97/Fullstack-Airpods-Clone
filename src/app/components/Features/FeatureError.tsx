import style from "@/app/css/components/Features/FeaturesError.module.scss";

const FeaturesError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className={style.card}>
      <div>Error occured</div>
      <div>{message}</div>
    </div>
  );
};

export default FeaturesError;
