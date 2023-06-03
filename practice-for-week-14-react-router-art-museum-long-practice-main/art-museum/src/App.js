import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation';
import { Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import GalleryView from './components/GalleryView/GalleryView.jsx';

function App() {

  return (
    <>
    <Route path="/galleries/:galleryId">
      <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      </div>
    </Route>
    {/* <Route path="/galleries/:galleryId" > */}
      {/* <div> */}
        {/* <GalleryView galleries={harvardArt.records}/> */}
      {/* </div>
    </Route> */}
    </>
  );
}


export default App;
