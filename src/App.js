import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/index.js";
import UserProfile from "./pages/UsersProfile/index.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";

export function links() {
  return [
    {
      title: "User Profile",
      id: "UserProfile",
      path: "/userProfile",
      element: <UserProfile />,
      inMenu: true,
    },
  ];
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className={classes.App}>
          <div className={classes.Navbar}>
            <Navbar />
          </div>
          <div className={classes.mainContainer}>
            <Routes>
              <Route path="/" element={<LandingPage />} /> {/* Home Route */}
              {links().map((link, idx) => (
                <Route key={idx} path={link.path} element={link.element} />
              ))}
            </Routes>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          pauseOnHover
          theme="light"
          style={{ fontSize: "14px" }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
