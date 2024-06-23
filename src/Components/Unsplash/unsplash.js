const UnsplashList = () => {
  return (
    <>
      <div class="container">
        <div class="jumbotron text-center">
          <h1 class="display-4">Unslash Documentation</h1>
          <p class="lead">An open API to access information from Unsplash</p>
          <div class="d-flex justify-content-center gap-3">
            <a
              href="/unsplash/photos"
              type="button"
              class="btn btn-primary btn-lg"
            >
              Photos
            </a>
          </div>
        </div>
        <section id="introduction">
          <h2 class="section-header">Introduction</h2>
          <p class="lead">
            The Unsplash Api is a RESTFul api that gives you access to the
            unlimited number of resources that are available from the free
            unsplash photos website.
            <br></br>
            However, inorder to acccess the apis you will need to have an
            authentication key.
            <br></br>
            To get the key, you can go to unsplash developers page or simply
            click on this
            <a href="https://unsplash.com/documentation">Link</a>
            <br></br>
            Then head to the Your Apps tab and create an app.
            <br></br>
            An Authentication key should be given to you after that.
          </p>
        </section>
        <section id="endpoints">
          <h2 class="section-header">Endpoints</h2>
          <p class="lead">
            The API is available at https://api.unsplash.com/. Responses are
            sent as JSON.
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
                    <code>/photos/random</code>
                  </td>
                  <td>Get a random photo.</td>
                </tr>
                <tr>
                  <td>
                    <code>/photos/:id</code>
                  </td>
                  <td>Get specific photo.</td>
                </tr>
                <tr>
                  <td>
                    <code>/search/photos</code>
                  </td>
                  <td>Set for photos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div class="endpoint-section">
          <h2 class="endpoint-title">Random Photos</h2>
          <p class="endpoint-description">
            Retrieve a random photo from Unsplash.
          </p>

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

`}
          </pre>
        </div>

        <div class="endpoint-section">
          <h2 class="endpoint-title">Search Photos</h2>
          <p class="endpoint-description">
            Search for photos on Unsplash based on a query.
          </p>

          <h4>Endpoint:</h4>
          <pre class="code-example">GET /search/photos</pre>

          <h4>Parameters:</h4>
          <ul>
            <li>
              <code>query</code>: The search query.
            </li>
            <li>
              <code>page</code>: Page number (optional).
            </li>
            <li>
              <code>per_page</code>: Number of results per page (optional,
              default: 10).
            </li>
          </ul>

          <h4>Example Response:</h4>
          <pre class="code-example">
            {`"total": 10000,
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
          <p class="endpoint-description">
            Retrieve details of a specific photo.
          </p>

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
