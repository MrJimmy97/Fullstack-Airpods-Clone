import style from "@/app/css/components/UI/Title.module.scss";

const Title: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={style.title}>{props.children}</div>;
};

export default Title;
