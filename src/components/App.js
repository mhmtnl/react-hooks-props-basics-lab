import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import Links from "./Links";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city}/>
      <About links={user.links} bio={user.bio} />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
