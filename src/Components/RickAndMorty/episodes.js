import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../Redux/Actions/Rick_AndMorty/action';

const EpisodesList = () => {
  const dispatch = useDispatch();
  const { episodes, loading, error } = useSelector(state => {
    console.log(state.episodes); // Logs the state of characters
    return state.episodes; // Ensure this matches the reducer state shape
  });

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!episodes || !episodes.results) return <p>No Episodes</p>;

  return (
    <ul>
      {episodes.results.map(episode => (
        <li key={episode.id}>{episode.name}</li>
      ))}
    </ul>
  );
};

export default EpisodesList;
