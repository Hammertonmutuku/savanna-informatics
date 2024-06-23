import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../../../Redux/Actions/Rick_AndMorty/action";

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { character, loading, error } = useSelector((state) => {
    console.log(state.characters); // Logs the state of episodes
    return state.characters
    // (state) => state.characters;
  });

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!character) return <p>No character data</p>;

  return (
    <div className="container mt-4">
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
          <p className="card-text">
            <strong>Gender:</strong> {character.gender}
          </p>
          <p className="card-text">
            <strong>Location:</strong> {character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
