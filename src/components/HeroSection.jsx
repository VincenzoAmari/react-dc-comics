function HeroSection({ comics }) {
  return (
    <div>
      
      <div 
        className="bg-dark" 
        style={{ 
          backgroundImage: "url(src/assets/img/jumbotron.jpg)", 
          backgroundSize: 'cover', 
          backgroundPosition: 'top', 
          height: '400px' 
        }}
      ></div>

      
      <div className="bg-dark text-white py-5">
        <div className="container">
          
          <div className="d-flex justify-content-start mb-4">
            <div 
              className="px-3 py-2" 
              style={{ 
                backgroundColor: '#007bff', 
                color: '#fff', 
                borderRadius: '4px', 
                fontWeight: 'bold' 
              }}
            >
              <h2>CURRENT SERIES</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
            {comics.map((comic) => (
              <div key={comic.id} className="col">
                <div className="card bg-dark text-white border-0">
                  <img 
                    src={comic.thumb} 
                    className="card-img-top" 
                    alt={comic.title} 
                    style={{ objectFit: 'cover', height: '300px' }} 
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{comic.title}</h5>
                    <p className="card-text">{comic.series}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;