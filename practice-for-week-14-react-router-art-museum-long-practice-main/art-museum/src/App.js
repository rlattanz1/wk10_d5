import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation';

function App() {
  // const art = Object.values(harvardArt)
  console.log(harvardArt);
  return (
    <GalleryNavigation />
  );
}

export default App;
