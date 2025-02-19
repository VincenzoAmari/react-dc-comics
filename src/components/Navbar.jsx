
function Navbar({ links }) {
  return (
    <header className="bg-light p-3">
      <div className="d-flex justify-content-between align-items-center">
        <img src="src/assets/img/dc-logo.png" alt="DC Logo" className="img-fluid" style={{height: '50px'}} />
        <nav>
          {links.map((link, index) => (
            <a key={index} href={link.url} className="mx-2 text-decoration-none text-dark font-weight-bold">{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
  
  export default Navbar;