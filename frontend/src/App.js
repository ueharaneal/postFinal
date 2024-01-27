import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SelectPost from "./pages/SelectPost";
import Register from "./pages/Register";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="md:hidden">
          <MobileNavBar />
        </div>
        <div className="hidden md:block">
          {" "}
          {/* Show on medium and larger screens (hidden on small screens) */}
          <NavBar />
        </div>

        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/selectpost" element={<SelectPost />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
