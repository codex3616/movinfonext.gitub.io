import homestyle from "@/app/styles/home.module.css";
import HeroSection from "@/app/component/HeroSection";
const Home = () => {
  return (
    <>
      <section>
        <HeroSection title="lets watch movie together" imgUrl="/home.svg" />
      </section>
    </>
  );
};

export default Home;
