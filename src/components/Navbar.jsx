import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="src/assets/img/dc-logo.png" alt="DC Logo" width="50" />
        </a>
         
       
       
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Characters</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Comics</a></li> 
              <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
              <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Games</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Collectibles</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Videos</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Fans</a></li>
              <li className="nav-item"><a className="nav-link" href="#">News</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;