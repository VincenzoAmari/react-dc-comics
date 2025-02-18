import "bootstrap/dist/css/bootstrap.min.css";


function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
        {/* Sezione link con sfondo */}
        <div className="container py-4" style={{ backgroundImage: "url('/footer-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="row">
                                            {/* Colonna DC Comics */}
                <div className="col-md-3">
                    <h5>DC COMICS</h5>
                    <ul className="list-unstyled">
                    <li><a href="#" className="text-white text-decoration-none">Characters</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Comics</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Movies</a></li>
                    <li><a href="#" className="text-white text-decoration-none">TV</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Games</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Videos</a></li>
                    <li><a href="#" className="text-white text-decoration-none">News</a></li>
                    </ul>
                </div>
    
               
            </div>
        </div>
    
        {/* Sezione Sign-Up e Social */}
        <div className="bg-black py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <button className="btn btn-outline-primary">SIGN-UP NOW!</button>
                <div className="d-flex align-items-center">
                    <span className="me-3 fw-bold">FOLLOW US</span>
                    <a href="#" className="text-white me-2"></a>
                    <a href="#" className="text-white me-2"></a>
                    <a href="#" className="text-white me-2"></a>
                    <a href="#" className="text-white me-2"></a>
                    <a href="#" className="text-white"></a>
                </div>
            </div>
        </div>
        </footer>
    );
    }
    
    export default Footer;