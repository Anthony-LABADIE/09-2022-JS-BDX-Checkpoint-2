import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CupcakeList from "./pages/CupcakeList";
import Instructions from "./pages/Instructions";
import CupcakeDetails from "./pages/CupcakeDetails";

import "./App.css";

function App() {
  return (
    <>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cupcakes" element={<CupcakeList />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/CupcakeDetails/:id" element={<CupcakeDetails />} />
        </Routes>
      </main>
      <NavBar />
    </>
  );
}

export default App;
