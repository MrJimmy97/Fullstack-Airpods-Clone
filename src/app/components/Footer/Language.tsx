import style from "@/app/css/components/Footer/Language.module.scss";

const Language: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.group}>
        <div className={style.btn}>Hong Kong</div>
        <div className={style.separator}>|</div>
        <div className={style.btn}>繁體中文</div>
      </div>
      <div className={style.group}>
        Copyright © 2024 Apple Inc. All rights reserved.
      </div>
      <div className={style.group}>
        <div className={style.btn}>Privacy Policy</div>
        <div className={style.separator}>|</div>
        <div className={style.btn}>Terms of Use</div>
        <div className={style.separator}>|</div>
        <div className={style.btn}>Sales Policy</div>
        <div className={style.separator}>|</div>
        <div className={style.btn}>Legal</div>
        <div className={style.separator}>|</div>
        <div className={style.btn}>Site Map</div>
      </div>
    </div>
  );
};

export default Language;
