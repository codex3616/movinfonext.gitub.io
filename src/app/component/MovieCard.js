import movieStyles from "@/app/styles/movie.module.css";
import homeStyles from "@/app/styles/home.module.css";
import Link from "next/link";
import Image from "next/image";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <>
      <div className="col-lg-3 col-md-4 col-xxl-3 col-10 col-sm-6 mx-auto">
        <div className={movieStyles.card}>
          <div className="card ">
            <Image
              src={curElem.jawSummary.backgroundImage.url}
              className="card-img-top"
              alt="..."
              width={250}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{`${synopsis.substring(0, 66)} ...`}</p>
              <Link href={`/movie/${id}`}>
                <button className={homeStyles.btn}> read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
