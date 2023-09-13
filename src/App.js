import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
