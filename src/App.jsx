import { Routes, Route } from "react-router";
import GameOver from "./components/GameOver.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<GameOver />} path="/gameover/:result" />
      <Route element={<Home />} path="*" />
    </Routes>
  );
}

export default App;
