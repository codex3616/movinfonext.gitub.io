import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.links}>
          Home
        </Link>
        <Link href="/about" className={styles.links}>
          About
        </Link>
        <Link href="/movie" className={styles.links}>
          Movie
        </Link>
        <Link href="/contact" className={styles.links}>
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
