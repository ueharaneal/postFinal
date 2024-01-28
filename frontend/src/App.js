import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNavBar from "./components/MobileNavBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Register from "./pages/Register";
import ProfilePage from './pages/ProfilePage'
import SelectPostPage from "./pages/SelectPostPage";
import AppointmentPage from "./pages/AppointmentPage";

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
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/appointments' element={<AppointmentPage/>}/>
            <Route path="/selectpost" element={<SelectPostPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
