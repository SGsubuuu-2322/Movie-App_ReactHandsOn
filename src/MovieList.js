import MovieCards from "./MovieCards";

export default function MovieList(props) {
  const { movies, addStars, minusStars, favBtn, cartBtn } = props;
  return (
    <>
      {movies.map((data) => {
        return (
          <MovieCards
            key={data.id}
            movies={data}
            addStars={addStars}
            minusStars={minusStars}
            favBtn={favBtn}
            cartBtn={cartBtn}
          />
        );
      })}
    </>
  );
}
