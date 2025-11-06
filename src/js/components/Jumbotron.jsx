const Jumbotron = () => {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-light custom-jumbotron">
        <h1 className="display-4 fw-bold mb-3 text-dark">
          A Grand Slam Welcome!
        </h1>
        <p className="col-lg-8 mx-auto lead text-muted mb-4">
          Welcome to the premier destination for Major League Baseball analysis. Dive into deep insights on player performance, team dynamics, and the race to the World Series. Everything you need to know about the diamond is here.
        </p>
        <button className="btn btn-danger btn-lg px-4 fw-bold">
          Read Today's Analysis
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;

