import "./App.css";
import CombineComponent from "./Component";
import { Routes, Route } from "react-router-dom";
// import Card2 from "./Component/Card2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<CombineComponent />} />
        <Route path="/" element={<CombineComponent />} />
      </Routes>

      {/* <Card2 /> */}
    </>
  );
}

export default App;
