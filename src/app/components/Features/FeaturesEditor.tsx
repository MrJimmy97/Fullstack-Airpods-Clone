import style from "@/app/css/components/Features/FeaturesEditor.module.scss";

const FeaturesEditor: React.FC = () => {
  //     const initItems = () => {};
  // const deleteItem = () => {};
  // const addItem = () => {};
  // const addWrongItem = () => {};
  return (
    <div className={style.card}>
      <div>Initialization</div>
      <div>Add Items</div>
      <div>Add Error</div>
    </div>
  );
};

export default FeaturesEditor;
