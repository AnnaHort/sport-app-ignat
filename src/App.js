import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./components/scss/main.scss";
import { Header } from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
