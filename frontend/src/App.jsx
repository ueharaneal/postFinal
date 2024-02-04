import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import AboutPage from "./pages/AboutPage";
import FindPostPage from './pages/FindPostPage'

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/findapost' element={<FindPostPage/>}/>
          <Route path="/signin" element={<SignInPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
