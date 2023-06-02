import { NavLink } from "react-router-dom";

function GalleryNavigation({galleries}) {
  console.log(galleries)
  // console.log(props, "props");
  const gal = galleries.map(gallery => {
    return <NavLink to={`/galleries/${gallery.id}`}> {gallery.name} </NavLink>
  });
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/" exact>Home</NavLink> 
      {gal}
    </nav>
  );
};


export default GalleryNavigation;
