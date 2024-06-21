// src/UserDetail.js
import React, { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisode } from '../../Redux/Actions/Rick_AndMorty/action';
import { useParams } from 'react-router-dom';

const EpisodeDetail = ({ match }) => {
  const dispatch = useDispatch();

const { id } = useParams();
const episode = useSelector(state => state.episodes.episode);
 const isLoading = useSelector(state => state.episodes.loading);


  useEffect(() => {
    if (!episode) {
      dispatch(fetchEpisode(id));
    }
  }, [dispatch, episode, id]);

//   if (isLoading) return <p>Loading...</p>;
  if (!episode) return <p>User Not found</p>;

  return (
    <ul>
    {episode.map(episode => (
      <li key={episode.id}>{episode.name}</li>
    ))}
  </ul>
  );
};

export default EpisodeDetail;