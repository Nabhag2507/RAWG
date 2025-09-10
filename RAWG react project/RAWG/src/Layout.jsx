import React, { useEffect, useState } from "react";

function Layout() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=097aaf59ca6740a29a2df42fb5826668")
      .then((res) => res.json())
      .then((data) => setGames(data.results || []))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="container-fluid navbar">
        <div className="row align-items-center">
          <div className="col-auto">
            <span className="navbar-brand">
              <a
                href="homepage.html"
                className="text-decoration-none text-light"
              >
                RAWG
              </a>
            </span>
          </div>
          <div className="col-auto">
            <button className="btn btn-light btn-sm btn-custom">
              🎯 Rate top games
            </button>
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <i className="fas fa-search"></i>
              <input
                className="search-bar"
                type="search"
                placeholder="🔍 Search 892,360 games"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="col-auto">
            <a href="login.html" className="nav-link d-inline">
              LOG IN
            </a>
            <a href="signup.html" className="nav-link d-inline">
              SIGN UP
            </a>
            <a href="#" className="nav-link d-inline">
              API
            </a>
            <a href="#" className="nav-link d-inline">
              ...
            </a>
          </div>
        </div>
      </div>

      {/* Page Layout */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 sidebar">
            <h2 className="fw-bolder fs-1">
              <a href="#">Home</a>
            </h2>
            <h2 className="fw-bolder">
              <a href="review.html">Reviews</a>
            </h2>
            <h6>
              <a href="#">New Releases</a>
            </h6>
            <a href="#">Last 30 days</a>
            <a href="#">This week</a>
            <a href="#">Next week</a>
            <a href="#">Release calendar</a>
            <h6>
              <a href="#">Top</a>
            </h6>
            <a href="#">Best of the year</a>
            <a href="#">Popular in 2024</a>
            <a href="#">All time top 250</a>
            <h6>
              <a href="#">All Games</a>
            </h6>
            <a href="#">Browse</a>
            <h6>
              <a href="#">Platforms</a>
            </h6>
            <a href="#">PC</a>
            <a href="#">PlayStation 4</a>
            <a href="#">Xbox One</a>
            <a href="#">Show all</a>
            <h6>
              <a href="#">Genres</a>
            </h6>
            <a href="#">Free Online Games</a>
            <a href="#">Action</a>
            <a href="#">Strategy</a>
            <a href="#">Show all</a>
          </div>

          {/* Main Content */}
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center filters">
              <h2 className="section-title">New and trending</h2>
            </div>

            {/* Game Grid */}
            <div className="row">
              {games.map((game) => (
                <div className="col-md-3 col-sm-6 mb-4" key={game.id}>
                  <div className="game-card">
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="img-fluid rounded"
                    />
                    <div className="card-body">
                      <p className="game-title">{game.name}</p>
                      {/* ⭐ Rating */}
                      <small>⭐ {game.rating}</small>
                      <br />
                      {/* Platforms */}
                      <small className="text-muted">
                        {game.parent_platforms
                          ?.map((p) => p.platform.name)
                          .join(", ")}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
