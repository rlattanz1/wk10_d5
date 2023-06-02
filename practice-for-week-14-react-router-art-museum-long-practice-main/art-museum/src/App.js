import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {

  return (
    <>
    <Route path="/"> 
      <GalleryNavigation galleries={harvardArt.records}/>
    </Route>
    <Route path="/galleries/:galleryId" >
      <NavLink to="/galleries"> </NavLink>
    </Route>
    </>
  );
}


export default App;
