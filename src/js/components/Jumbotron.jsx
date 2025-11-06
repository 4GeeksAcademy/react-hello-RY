const Jumbotron = () => {
  return (
    <div className="container my-5">
      <div className=" relative p-5 text-center bg-light custom-jumbotron p-5 p-md-5 mb-4 bg-dark text-white rounded-3 position-relative overflow-hidden">
        <img src="https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w1024/mlb/bt3jwrurrtb8qseqkjnu" alt="" className="img-banner position-absolute top-0 start-0 img-cover-absolute" />
        <div className="banner-text position-relative px-4 px-md-5 py-5 mb-4 rounded-3">
          <h1 className="display-4 fw-bold mb-3 text-light">
            A Grand Slam Welcome!
          </h1>
          <p className="banner-info col-lg-8 mx-auto lead mb-4 text-light">
            Welcome to the premier destination for Major League Baseball analysis. Dive into deep insights on player performance, team dynamics, and the race to the World Series. Everything you need to know about the diamond is here.
          </p>
          <button className="btn btn-danger btn-lg px-4 fw-bold">
            Read Today's Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

