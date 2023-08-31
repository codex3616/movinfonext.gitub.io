import homeStyles from "@/app/styles/home.module.css";
import style from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
const Error = () => {
  return (
    <>
      <section className={style.errorSection}>
        <div className={style.error}>
          <div className={style.errorText}>
            <h1>
              <span className={style.num}>404</span> something went wrong!
            </h1>
            <Link href="/">
              <button className={homeStyles.btn}> Back to homepage</button>
            </Link>
          </div>

          <div className={style.errorImg}>
            <Image
              src="/404.svg"
              width={400}
              height={350}
              alt="error"
              priority={true}
              className={style.img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
