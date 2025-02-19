import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const navbarLinks = [
    { label: 'CHARACTERS', url: '#' },
    { label: 'COMICS', url: '#' },
    { label: 'MOVIES', url: '#' },
    { label: 'TV', url: '#' },
    { label: 'GAMES', url: '#' },
    { label: 'COLLECTIBLES', url: '#' },
    { label: 'VIDEOS', url: '#' },
    { label: 'FANS', url: '#' },
    { label: 'NEWS', url: '#' },
    { label: 'SHOP', url: '#' },
  ];
  
  return (
      <div className="App">
        <Navbar links={navbarLinks} />
        <HeroSection/>
        <Main />
        <Footer />
      </div>
  )
}

export default App
