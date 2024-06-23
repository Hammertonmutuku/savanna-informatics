import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnsplashList from "./Components/Unsplash/unsplash";
import RickAndMorty from "./Components/RickAndMorty/rick_and_morty";
import CharactersList from "./Components/RickAndMorty/Characters/characters";
import EpisodesList1 from "./Components/RickAndMorty/Episodes/episodes";
import CharacterDetail from "./Components/RickAndMorty/Characters/charactersDetails";
import PhotoList from "./Components/Unsplash/Photos/photos";
import HomePage from "./Components/HomePage/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rick_and_morty" element={<RickAndMorty />} />
          <Route
            path="/rick_and_morty/characters"
            element={<CharactersList />}
          />
          <Route
            path="/rick_and_morty/characters/:id"
            element={<CharacterDetail></CharacterDetail>}
          />
          <Route path="/rick_and_morty/episodes" element={<EpisodesList1 />} />
          <Route path="/unsplash" element={<UnsplashList />} />
          <Route path="/unsplash/photos" element={<PhotoList />} />

          {/* <Route path="/character/:id" element={<UserDetail />} /> */}
          {/* <Route path="/episodes/:id" element={<EpisodeDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
