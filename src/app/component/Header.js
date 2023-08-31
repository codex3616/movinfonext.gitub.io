import Navbar from "./Navbar";
import styles from "@/app/styles/navbar.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.head}>
        <div className={styles.container}>
          <div className={styles.brand}>MovInfo</div>
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
