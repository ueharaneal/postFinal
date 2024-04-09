import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import MainLayout from "./components/hoc/MainLayout";
import { RootState, AppDispatch } from "@/store/index";

import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "./store/actions/users";
import { LargeLoader } from "./components/common/utils";

import Home from "./pages/Home";
import Auth from "./components/auth";
import Header from "./components/navigation/Header";
import About from "./pages/About";
import Footer from "./components/navigation/Footer";

import DashboardMain from "./components/dashboard/DashboardMain";
import AuthGuard from "./components/hoc/AuthGuard";
import ScheduleSession from "./components/dashboard/ScheduleSession";
import Overview from "./components/dashboard/Overview";
import Profile from "./components/dashboard/Profile";
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(isAuth() as any);
  }, []);
  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        {loading ? (
          <LargeLoader />
        ) : (
          <>
            <Header />
            <MainLayout>
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <AuthGuard>
                      <DashboardMain />
                    </AuthGuard>
                  }
                >
                  <Route
                    path="schedulesession"
                    element={<ScheduleSession />}
                  />
                  <Route path="/dashboard/overview" element={<Overview />} />
                  <Route path="/dashboard/profile" element={<Profile />} />
                </Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </MainLayout>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
