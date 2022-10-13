import React, { useState } from "react";
import usePaginatedFetchMovies from "../../services/PaginateMovies";
import Card, { MovieCardData } from "../../components/Card/Card";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data: movies, isLoading } = usePaginatedFetchMovies(page);
  console.log("movies =>", movies);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <div className="row">
            {movies?.map(
              ({ id, poster_path, original_title }: MovieCardData) => (
                <Card
                  id={id}
                  poster_path={poster_path}
                  original_title={original_title}
                ></Card>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
