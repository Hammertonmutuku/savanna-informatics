// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCharacters } from '../../Redux/Actions/Rick_AndMorty/action';

const UnsplashList = () => {
//   const dispatch = useDispatch();
//   const { characters, loading, error } = useSelector(state => state.characters);

//   useEffect(() => {
//     dispatch(fetchCharacters());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!characters || !characters.results) return <p>No characters</p>;

  return (
    <>
     <div class="container">
    <h1 class="mt-5 mb-4 text-center">Unsplash API Documentation</h1>

  
    <div class="endpoint-section">
      <h2 class="endpoint-title">Random Photos</h2>
      <p class="endpoint-description">Retrieve a random photo from Unsplash.</p>

      <h4>Endpoint:</h4>
      <pre class="code-example">GET /photos/random</pre>

      <h4>Example Response:</h4>
      <pre class="code-example">
{`
  "id": "LUkAe6l6Khw",
  "urls": {
    "raw": "https://example.com/photo.jpg"
  },
  "user": {
    "username": "username",
    "name": "John Doe"
  }

`  }
      </pre>
    </div>

    <div class="endpoint-section">
      <h2 class="endpoint-title">Search Photos</h2>
      <p class="endpoint-description">Search for photos on Unsplash based on a query.</p>

      <h4>Endpoint:</h4>
      <pre class="code-example">GET /search/photos</pre>

      <h4>Parameters:</h4>
      <ul>
        <li><code>query</code>: The search query.</li>
        <li><code>page</code>: Page number (optional).</li>
        <li><code>per_page</code>: Number of results per page (optional, default: 10).</li>
      </ul>

      <h4>Example Response:</h4>
      <pre class="code-example">
{
  `"total": 10000,
  "results": [
    {
      "id": "LUkAe6l6Khw",
      "urls": {
        "raw": "https://example.com/photo.jpg"
      },
      "user": {
        "username": "username",
        "name": "John Doe"
      }
    },
    {
      "id": "abcdef12345",
      "urls": {
        "raw": "https://example.com/another-photo.jpg"
      },
      "user": {
        "username": "anotheruser",
        "name": "Jane Smith"
      }
    }
  ]
`}
      </pre>
    </div>


    <div class="endpoint-section">
      <h2 class="endpoint-title">Get a Photo</h2>
      <p class="endpoint-description">Retrieve details of a specific photo.</p>

      <h4>Endpoint:</h4>
      <pre class="code-example">GET /photos/:id</pre>

      <h4>Example Response:</h4>
      <pre class="code-example">
{`
  "id": "LUkAe6l6Khw",
  "urls": {
    "raw": "https://example.com/photo.jpg"
  },
  "user": {
    "username": "username",
    "name": "John Doe"
  }
`}
      </pre>
    </div>

  </div> 
    </>
  );
};

export default UnsplashList;
