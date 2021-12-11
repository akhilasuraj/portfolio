import { useState } from "react";

import Intro from "../Modules/Intro/Intro";
import Portfolio from "../Modules/Portfolio/Portfolio";
import Works from "../Modules/Works/Works";
import Experience from "../Modules/Experience/Experience";
import Contact from "../Modules/Contact/Contact";
import Topbar from "../Common/Topbar/Topbar";
import Numericalindicator from "../Common/Indiactor/Numericalindicator";

const Layout = ({ curentPage, setCurentPage }) => {
  return (
    <>
      <div className="relative">
        <Topbar curentPage={curentPage} setCurentPage={setCurentPage} />
        <Numericalindicator index={curentPage} />
        <Intro curentPage={curentPage} setCurentPage={setCurentPage} />
        <Portfolio curentPage={curentPage} setCurentPage={setCurentPage} />
        <Works curentPage={curentPage} setCurentPage={setCurentPage} />
        <Experience curentPage={curentPage} setCurentPage={setCurentPage} />
        <Contact curentPage={curentPage} setCurentPage={setCurentPage} />
      </div>
    </>
  );
};

export default Layout;
