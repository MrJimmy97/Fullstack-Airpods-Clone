import style from "@/app/css/components/Services&Terms/Services.module.scss";
import servicesData from "@/app/store/servicesData";
import ArrowBtn from "../UI/ArrowBtn";

const Services: React.FC = () => {
  return (
    <div>
      <div className={style.container}>
        {servicesData.map(({ img, alt, title, content, button }, index) => (
          <div className={style.service} key={index}>
            <img src={img} alt={alt} />
            <div className={style.title}>{title}</div>
            <div className={style.content}>{content}</div>
            <ArrowBtn isBlackTheme={false} className={style.arrowBtn}>
              {button}
            </ArrowBtn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
