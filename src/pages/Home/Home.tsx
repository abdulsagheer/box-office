import React, { useState } from "react";
import usePaginatedFetchMovies from "../../services/PaginateMovies";
import Card, { MovieCardData } from "../../components/Card/Card";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data: movies, isLoading } = usePaginatedFetchMovies(page);
  console.log("movies =>", movies);
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_API);

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
      <footer style={{ margin: "10px" }}>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <p style={{ display: "inline", margin: "10px" }}>{page}</p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </footer>
    </>
  );
};

export default Home;
