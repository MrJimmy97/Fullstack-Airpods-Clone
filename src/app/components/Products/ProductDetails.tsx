import style from "@/app/css/components/Products/ProductDetails.module.scss";

const ProductDetails: React.FC<{
  isBlackTheme: boolean;
  name: string;
  gen?: string;
  price: string;
}> = (props) => {
  return (
    <div
      className={style.container}
      style={{ color: props.isBlackTheme ? "white" : "black" }}
    >
      <h2>{props.name}</h2>
      {props.gen && <h3>{props.gen}</h3>}
      <div>{props.price}</div>
    </div>
  );
};

export default ProductDetails;
