import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import React from "react";
import ParticlesJS from "./Components/Particles/ParticlesJS";
import './Components/Particles/ParticlesJS'

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <ParticlesJS />
    </div>
  );
}

export default App;
