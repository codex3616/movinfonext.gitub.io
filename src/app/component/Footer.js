import footerStyle from "@/app/styles/footer.module.css";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className={footerStyle.footer}>
        <p className="text-center">
          created with <FaHeart /> by akash
        </p>
      </footer>
    </>
  );
};

export default Footer;
