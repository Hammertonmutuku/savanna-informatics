import './App.css';
import React from 'react';
import CharactersList from './Components/RickAndMorty/rick_and_morty'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EpisodesList from './Components/RickAndMorty/episodes';
import EpisodeDetail from './Components/RickAndMorty/episode';
import UnsplashList from './Components/Unsplash/unsplash';

function App() {
  return (
    <div className="App">

       <Router>
        <Routes>
        <Route path="/" element={<CharactersList/>} />
        <Route path ="/unsplash" element={<UnsplashList/>} />
        <Route path="/episodes" element={<EpisodesList/>} />
        {/* <Route path="/character/:id" element={<UserDetail />} /> */}
        <Route path="/episodes/:id" element={<EpisodeDetail />} />
        </Routes>
         

        </Router>
    
    </div>
    
  );
}

export default App;
