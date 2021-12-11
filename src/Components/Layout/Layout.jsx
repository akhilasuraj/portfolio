import Intro from "../Modules/Intro/Intro";
import Portfolio from "../Modules/Portfolio/Portfolio";
import Works from "../Modules/Works/Works";
import Experience from "../Modules/Experience/Experience";
import Contact from "../Modules/Contact/Contact";
import Topbar from "../Common/Topbar/Topbar";
import Numericalindicator from "../Common/Indiactor/Numericalindicator";
import GraphicalIndicator from "../Common/Indiactor/GraphicalIndicator";
import SocialMediaIcons from "../Common/SocialMediaIcons/SocialMediaIcons";

const Layout = ({ curentPage, setCurentPage }) => {
  return (
    <>
      <div className="relative">
        <Topbar curentPage={curentPage} setCurentPage={setCurentPage} />
        <Numericalindicator index={curentPage} />
        <div className="fixed z-50 top-1/2 right-16 transform -translate-y-1/2">
          <GraphicalIndicator
            curentPage={curentPage}
            setCurentPage={setCurentPage}
          />
        </div>
        <div className="fixed z-50 left-16 bottom-0 transform -translate-y-1/2">
          <SocialMediaIcons />
        </div>
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
