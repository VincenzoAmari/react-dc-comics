


function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>DC COMICS</h5>
                        <ul className="list-unstyled">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>DC</h5>
                        <ul className="list-unstyled">
                            <li>Terms Of Use</li>
                            <li>Privacy policy(New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>SITES</h5>
                        <ul className="list-unstyled">
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>SHOP</h5>
                        <ul className="list-unstyled">
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <button className="btn btn-outline-primary">SIGN-UP NOW!</button>
                        <div className="follow-us text-primary d-flex align-items-center">
                            <span>FOLLOW US</span>
                            <div className="social-icons d-flex">
                                <a href="#"><img src="src/assets/img/footer-facebook.png" alt="Facebook" className="img-fluid mx-2" style={{height: '20px'}} /></a>
                                <a href="#"><img src="src/assets/img/footer-twitter.png" alt="Twitter" className="img-fluid mx-2" style={{height: '20px'}} /></a>
                                <a href="#"><img src="src/assets/img/footer-youtube.png" alt="YouTube" className="img-fluid mx-2" style={{height: '20px'}} /></a>
                                <a href="#"><img src="src/assets/img/footer-pinterest.png" alt="Pinterest" className="img-fluid mx-2" style={{height: '20px'}} /></a>
                                <a href="#"><img src="src/assets/img/footer-periscope.png" alt="Periscope" className="img-fluid mx-2" style={{height: '20px'}} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
    }
    
    export default Footer;