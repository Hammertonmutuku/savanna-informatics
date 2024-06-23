

const RickAndMorty = () => {
  return (
    <>
      <div class="container">
        <div class="jumbotron text-center">
          <h1 class="display-4">Rick and Morty API Documentation</h1>
          <p class="lead">
            An open API to access information from the Rick and Morty universe
          </p>
          <p class="lead">
            Click on the below buttons to view the consumed apis.
          </p>
          <div class="d-flex justify-content-center gap-3">
            <a
              href="/rick_and_morty/characters"
              type="button"
              class="btn btn-primary btn-lg"
            >
              Characters
            </a>
            <a
              href="/rick_and_morty/episodes"
              type="button"
              class="btn btn-primary btn-lg"
            >
              Episodes
            </a>
          </div>
        </div>

        <section id="introduction">
          <h2 class="section-header">Introduction</h2>
          <p class= "lead">
            The Rick and Morty API is a RESTful and GraphQL API based on the
            television show Rick and Morty.
            <br></br>
             You will have access to about
            hundreds of characters, images, locations, and episodes.
            <br></br>
             The API is
            free to use and does not require authentication.
          </p>
        </section>

        <section id="endpoints">
          <h2 class="section-header">Endpoints</h2>
          <p class="lead">
            The API is available at https://rickandmortyapi.com/api/. Responses
            are sent as JSON.
            <br></br>
            Here Are a few of the endpoints
          </p>
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
                  <td>
                    <code>/character</code>
                  </td>
                  <td>Get all characters.</td>
                </tr>
                <tr>
                  <td>
                    <code>/character/:id</code>
                  </td>
                  <td>Get a single character by id.</td>
                </tr>
                <tr>
                  <td>
                    <code>/location</code>
                  </td>
                  <td>Get all locations.</td>
                </tr>
                <tr>
                  <td>
                    <code>/location/:id</code>
                  </td>
                  <td>Get a single location by id.</td>
                </tr>
                <tr>
                  <td>
                    <code>/episode</code>
                  </td>
                  <td>Get all episodes.</td>
                </tr>
                <tr>
                  <td>
                    <code>/episode/:id</code>
                  </td>
                  <td>Get a single episode by id.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="examples">
          <h2 class="section-header">Examples</h2>
          <h3>Get All Characters</h3>
          <pre>
            <code>GET https://rickandmortyapi.com/api/character</code>
          </pre>
          <h4>Example Response:</h4>
          <pre class="code-example" style={{ textAlign: "left" }}>
            {`
  {
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },

`}
          </pre>
          <h3>Get Character by ID</h3>
          <pre>
            <code>GET https://rickandmortyapi.com/api/character/1</code>
          </pre>
          <h4>Example Response:</h4>
          <pre class="code-example" style={{ textAlign: "left" }}>
            <code>
              {`
  {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
}
`}
            </code>
          </pre>

          <h3>Get All Locations</h3>
          <pre>
            <code>GET https://rickandmortyapi.com/api/location</code>
          </pre>
          <h4>Example Response:</h4>
          <pre class="code-example" style={{ textAlign: "left" }}>
            {`
    "info": {
    "count": 126,
    "pages": 7,
    "next": "https://rickandmortyapi.com/api/location?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Earth (C-137)",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
        "https://rickandmortyapi.com/api/character/71",
        "https://rickandmortyapi.com/api/character/82",
        "https://rickandmortyapi.com/api/character/83",
        "https://rickandmortyapi.com/api/character/92",
        "https://rickandmortyapi.com/api/character/112",
        "https://rickandmortyapi.com/api/character/114",
        "https://rickandmortyapi.com/api/character/116",
        "https://rickandmortyapi.com/api/character/117",
        "https://rickandmortyapi.com/api/character/120",
        "https://rickandmortyapi.com/api/character/127",
        "https://rickandmortyapi.com/api/character/155",
        "https://rickandmortyapi.com/api/character/169",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/186",
        "https://rickandmortyapi.com/api/character/201",
        "https://rickandmortyapi.com/api/character/216",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/302",
        "https://rickandmortyapi.com/api/character/303",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/343",
        "https://rickandmortyapi.com/api/character/356",
        "https://rickandmortyapi.com/api/character/394"
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    },

`}
          </pre>

          <h3>Get Location by ID</h3>
          <pre>
            <code>GET https://rickandmortyapi.com/api/location/1</code>
          </pre>
          <h4>Example Response:</h4>
          <pre class="code-example" style={{ textAlign: "left" }}>
            {`
  {
  "id": 1,
  "name": "Earth (C-137)",
  "type": "Planet",
  "dimension": "Dimension C-137",
  "residents": [
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/45",
    "https://rickandmortyapi.com/api/character/71",
    "https://rickandmortyapi.com/api/character/82",
    "https://rickandmortyapi.com/api/character/83",
    "https://rickandmortyapi.com/api/character/92",
    "https://rickandmortyapi.com/api/character/112",
    "https://rickandmortyapi.com/api/character/114",
    "https://rickandmortyapi.com/api/character/116",
    "https://rickandmortyapi.com/api/character/117",
    "https://rickandmortyapi.com/api/character/120",
    "https://rickandmortyapi.com/api/character/127",
    "https://rickandmortyapi.com/api/character/155",
    "https://rickandmortyapi.com/api/character/169",
    "https://rickandmortyapi.com/api/character/175",
    "https://rickandmortyapi.com/api/character/179",
    "https://rickandmortyapi.com/api/character/186",
    "https://rickandmortyapi.com/api/character/201",
    "https://rickandmortyapi.com/api/character/216",
    "https://rickandmortyapi.com/api/character/239",
    "https://rickandmortyapi.com/api/character/271",
    "https://rickandmortyapi.com/api/character/302",
    "https://rickandmortyapi.com/api/character/303",
    "https://rickandmortyapi.com/api/character/338",
    "https://rickandmortyapi.com/api/character/343",
    "https://rickandmortyapi.com/api/character/356",
    "https://rickandmortyapi.com/api/character/394"
  ],
  "url": "https://rickandmortyapi.com/api/location/1",
  "created": "2017-11-10T12:42:04.162Z"
}
`}
          </pre>
        </section>
      </div>
    </>
  );
};

export default RickAndMorty;
