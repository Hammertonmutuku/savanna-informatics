import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../../Redux/Actions/Rick_AndMorty/action";

const EpisodesList1 = () => {
  const dispatch = useDispatch();
  const { episodes, loading, error, pageInfo } = useSelector((state) => {
   
    return state.episodes;
  });

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  const handlePreviousPage = () => {
    if (pageInfo.currentPage > 1) {
      dispatch(fetchEpisodes(pageInfo.currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (pageInfo.currentPage < pageInfo.totalPages) {
      dispatch(fetchEpisodes(pageInfo.currentPage + 1));
    }
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!episodes || !episodes.results) return <p>No episodes found</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {episodes.results.map((episode) => (
          <div className="col-md-4" key={episode.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={pageInfo.currentPage === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        <span>
          Page {pageInfo.currentPage} of {pageInfo.totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={pageInfo.currentPage === pageInfo.totalPages}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EpisodesList1;
