import { useState } from "react";

import Layout from "./Components/Layout/Layout";

const App = () => {
  const [curentPage, setCurentPage] = useState(0);

  return (
    <>
      <Layout curentPage={curentPage} setCurentPage={setCurentPage} />
    </>
  );
};

export default App;
