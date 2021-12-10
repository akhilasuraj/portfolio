import Topbar from "./Components/Modules/Topbar/Topbar";
import Intro from "./Components/Modules/Intro/Intro";
import Portfolio from "./Components/Modules/Portfolio/Portfolio";

const App = () => {
  return (
    <div className="relative">
      <Topbar />
      <Intro />
      <Portfolio />
    </div>
  );
};

export default App;
