import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../../../Redux/Actions/Rick_AndMorty/action";

const CharactersList = () => {
  const dispatch = useDispatch();
  const { characters, loading, error, pageInfo } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handlePreviousPage = () => {
    if (pageInfo.currentPage > 1) {
      dispatch(fetchCharacters(pageInfo.currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (pageInfo.currentPage < pageInfo.totalPages) {
      dispatch(fetchCharacters(pageInfo.currentPage + 1));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!characters || !characters.results) return <p>No characters</p>;

  return (
    <div className="container mt-4">
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
      <br></br>
      <div className="row">
        {characters.results.map((character) => (
          <div className="col-md-4" key={character.id}>
            <Link to={`/rick_and_morty/characters/${character.id}`}>
              <div className="card mb-4">
                <img
                  src={character.image}
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    <strong>Origin:</strong> {character.origin.name}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {character.status}
                  </p>
                  <p className="card-text">
                    <strong>Species:</strong> {character.species}
                  </p>
                </div>
              </div>
            </Link>
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

export default CharactersList;
