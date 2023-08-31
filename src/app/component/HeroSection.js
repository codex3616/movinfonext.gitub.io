import Image from "next/image";
import homeStyles from "@/app/styles/home.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
const HeroSection = (props) => {
  return (
    <>
      <div className={homeStyles.container}>
        <div className={homeStyles.bg}>
          <div className={homeStyles.main}>
            <div className={homeStyles.text}>
              <h1>{props.title}</h1>
              <p>
                Discover the magic of cinema with our movies info site. Immerse
                yourself in trailers, reviews, and behind-the-scenes insights.
                Your cinematic journey starts here!
              </p>
              <Link href="/movie">
                <button className={homeStyles.btn}> explore movies</button>
              </Link>
            </div>
            <div className={homeStyles.imgDiv}>
              <Image
                className={homeStyles.img}
                src={props.imgUrl}
                alt="watching..."
                layout="responsive"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>

        {/* ################## WAVY SVG ############# */}
        <div className={homeStyles.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fcde67"
              fill-opacity="1"
              height={100}
              d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
