import movieStyles from "@/app/styles/movie.module.css";
import homeStyles from "@/app/styles/home.module.css";
import Link from "next/link";
import Image from "next/image";

const dynamicPages = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3e593c3102mshe837d011546759ep122b3fjsnc277f13533ea",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data[0].details;

  return (
    <>
      <div className={movieStyles.dynamicHero}>
        <h2>
          netflix \ <span className={movieStyles.span}>{mainData.type}</span>
        </h2>
        <div className={movieStyles.imgDiv}>
          <Image
            className={movieStyles.img}
            src={mainData.backgroundImage.url}
            alt="..."
            width={350}
            height={300}

            // layout="responsive"
          />
        </div>
        <h1>{mainData.title}</h1>
        <p>{mainData.synopsis}</p>
        <Link href="/movie">
          <button className={homeStyles.btn}> Go back</button>
        </Link>
      </div>
    </>
  );
};

export default dynamicPages;
