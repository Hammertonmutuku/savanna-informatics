const HomePage = () => {
  return (
    <>
      <div class="container">
        <div class="jumbotron text-center">
          <h1 class="display-4"> Savannah Informatics Api Assessment</h1>
          <p class="lead">
            This is a web application that documents and consumes both the
            unsplash and rick and Morty Restful Api's.<br></br>
            The Application has been build using ReactJs and redux for statemanagement.
          </p>
          <p class="lead">
            Click on the below buttons to view the Documentation.
          </p>
          <div class="d-flex justify-content-center gap-3">
            <a
              href="/rick_and_morty/"
              type="button"
              class="btn btn-primary btn-lg"
            >
              Rick And Morty
            </a>
            <a
              href="/unsplash"
              type="button"
              class="btn btn-primary btn-lg"
            >
              Unsplash
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
