import MovieCard from "@/app/component/MovieCard";
import movieStyles from "@/app/styles/movie.module.css";
const Movie = async () => {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3e593c3102mshe837d011546759ep122b3fjsnc277f13533ea",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data.titles;
  // console.log(mainData);

  return (
    <>
      <div className={movieStyles.movieSection}>
        <h1 className="text-center my-5">Series & Movies</h1>
        <div className="row gx-3">
          {mainData.map((curElem) => {
            return <MovieCard key={curElem} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
