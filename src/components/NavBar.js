import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements = links.map((link) => {
    return <a href={`#${link}`} key={link}> {link} </a>;
  });

  return (
  <nav>
    {linksElements}
    {/* display an  tag for each link here */}
  </nav>
  )
}
  

export default NavBar;
