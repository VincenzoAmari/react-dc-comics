import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/dc-logo.png" alt="DC Logo" width="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Comics</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
              <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Games</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;