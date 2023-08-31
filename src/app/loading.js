import style from "@/app/styles/common.module.css";

const loading = () => {
  return (
    <>
      <section className={style.loadingSection}>
        <div className={style.loading}></div>
      </section>
    </>
  );
};

export default loading;
