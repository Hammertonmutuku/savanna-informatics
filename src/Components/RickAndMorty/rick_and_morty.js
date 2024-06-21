import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../Redux/Actions/Rick_AndMorty/action';

const CharactersList = () => {
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!characters || !characters.results) return <p>No characters</p>;

  return (
    <>
      <div class="container">
        <div class="jumbotron text-center">
          <h1 class="display-4">Rick and Morty API Documentation</h1>
          <p class="lead">An open API to access information from the Rick and Morty universe</p>
        </div>

        <section id="introduction">
          <h2 class="section-header">Introduction</h2>
          <p>The Rick and Morty API is a RESTful and GraphQL API based on the television show Rick and Morty. 
            You will have access to about hundreds of characters, images, locations, and episodes. 
            The API is free to use and does not require authentication.
          </p>
        </section>

        <section id="endpoints">
          <h2 class="section-header">Endpoints</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>/character</code></td>
                  <td>Get all characters.</td>
                </tr>
                <tr>
                  <td><code>/character/:id</code></td>
                  <td>Get a single character by id.</td>
                </tr>
                <tr>
                  <td><code>/location</code></td>
                  <td>Get all locations.</td>
                </tr>
                <tr>
                  <td><code>/location/:id</code></td>
                  <td>Get a single location by id.</td>
                </tr>
                <tr>
                  <td><code>/episode</code></td>
                  <td>Get all episodes.</td>
                </tr>
                <tr>
                  <td><code>/episode/:id</code></td>
                  <td>Get a single episode by id.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="examples">
          <h2 class="section-header">Examples</h2>
          <h3>Get All Characters</h3>
          <pre><code>GET https://rickandmortyapi.com/api/character</code></pre>
          <h3>Get Character by ID</h3>
          <pre><code>GET https://rickandmortyapi.com/api/character/1</code></pre>
          <h3>Get All Locations</h3>
          <pre><code>GET https://rickandmortyapi.com/api/location</code></pre>
          <h3>Get Location by ID</h3>
          <pre><code>GET https://rickandmortyapi.com/api/location/1</code></pre>
          <h3>Get All Episodes</h3>
          <pre><code>GET https://rickandmortyapi.com/api/episode</code></pre>
          <h3>Get Episode by ID</h3>
          <pre><code>GET https://rickandmortyapi.com/api/episode/1</code></pre>
        </section>

        <section id="json-response">
          <h2 class="section-header">JSON Response</h2>
          <p>The JSON response has nested items in them. Therefore one might be required to use "." to access some of the items that are nested. 
            Here is an example of how the response looks like
          </p>
          <pre style={{ textAlign: 'left' }}>
            {`
GET /location
{
  "info": {
    "count": 126,
    "pages": 7,
    "next": "https://rickandmortyapi.com/api/location?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Earth",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45"
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    }
  ]
}
            `}
          </pre>
        </section>
      </div>
    </>
  );
};

export default CharactersList;
