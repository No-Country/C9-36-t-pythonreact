import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import RegisterEmail from "./components/register/RegisterEmail";
import Inicio from "./components/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/inicio"} element={<Inicio />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/registerEmail"} element={<RegisterEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
