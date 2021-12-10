import { useState } from "react";

import Topbar from "./Components/Modules/Topbar/Topbar";
import Intro from "./Components/Modules/Intro/Intro";
import Portfolio from "./Components/Modules/Portfolio/Portfolio";
import Works from "./Components/Modules/Works/Works";
import Experience from "./Components/Modules/Experience/Experience";
import Contact from './Components/Modules/Contact/Contact'

const App = () => {
  const [curentPage, setCurentPage] = useState(0);
  return (
    <div className="relative">
      <Topbar curentPage={curentPage} setCurentPage={setCurentPage} />
      <Intro curentPage={curentPage} setCurentPage={setCurentPage} />
      <Portfolio curentPage={curentPage} setCurentPage={setCurentPage} />
      <Works curentPage={curentPage} setCurentPage={setCurentPage} />
      <Experience curentPage={curentPage} setCurentPage={setCurentPage} />
      <Contact curentPage={curentPage} setCurentPage={setCurentPage} />
    </div>
  );
};

export default App;
