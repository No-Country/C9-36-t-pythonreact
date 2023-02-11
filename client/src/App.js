import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import RegisterEmail from "./components/register/RegisterEmail";
import Inicio from "./components/Inicio";
import RegisterCodigo from "./components/register/RegisterCodigo";
import RegisterSpinner from "./components/register/RegisterSpinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/inicio"} element={<Inicio />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/registerEmail"} element={<RegisterEmail />} />
          <Route path={"/registerCodigo"} element={<RegisterCodigo />} />
          <Route path={"/registerSpinner"} element={<RegisterSpinner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
