import contactStyles from "@/app/styles/contact.module.css";
import { MdEmail } from "react-icons/md";
import { MdForum } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import Link from "next/link";
const contactCards = () => {
  return (
    <>
      <div className={contactStyles.container}>
        <div className={contactStyles.card}>
          <MdEmail className={contactStyles.icon} />
          <h1>Email</h1>
          <p>Monday to Friday Expected</p>
          <p>Response time : 72 hours</p>
          <Link href="/" className={contactStyles.link}>
            Send Email -&gt;
          </Link>
        </div>
        <div className={contactStyles.card}>
          <BsFillChatDotsFill className={contactStyles.icon} />
          <h1>Live Chat</h1>
          <p>Weekdays 9 AM -- 6 AM</p>
          <p>Weekends 9 AM -- 5 AM</p>
          <Link href="/" className={contactStyles.link}>
            Chat Now -&gt;
          </Link>
        </div>
        <div className={contactStyles.card}>
          <MdForum className={contactStyles.icon} />
          <h1>Community form</h1>
          <p>Monday to Friday Expected</p>
          <p>Response time : 72 hours</p>
          <Link href="/" className={contactStyles.link}>
            Ask The Community -&gt;
          </Link>
        </div>
      </div>
    </>
  );
};

export default contactCards;
