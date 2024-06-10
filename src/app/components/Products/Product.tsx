import style from "@/app/css/components/Products/Product.module.scss";

const Product: React.FC<{
  className: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div className={`${props.className} ${style.box}`}>
      {props.children}
    </div>
  );
};

export default Product;
