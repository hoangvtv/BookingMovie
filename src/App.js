import logo from "./logo.svg";
import "./App.css";
import "./App.css";

import { createBrowserHistory } from "history";
import { Route, Routes } from "react-router-dom";
import HomeTempale from "./templates/HomeTemplate/HomeTempale";
import Header from "./templates/HomeTemplate/Layout/Header/Header";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Footer from "./templates/HomeTemplate/Layout/Footer/Footer";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";
import { Suspense, lazy } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";

export const history = createBrowserHistory();

// const CheckoutLazy = lazy(() => import("./pages/Checkout/Checkout"));

function App() {
  return (
    <div>
      <Loading />
      <Routes history={history}>
        <Route
          path="/"
          element={
            <HomeTempale>
              <Home />
            </HomeTempale>
          }
        />
        <Route
          path="/contact"
          element={
            <HomeTempale>
              <Contact />
            </HomeTempale>
          }
        />

        <Route
          path="/news"
          element={
            <HomeTempale>
              <News />
            </HomeTempale>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <HomeTempale>
              <Detail />
            </HomeTempale>
          }
        />

        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout/:id"
          element={
            <CheckoutTemplate>
              <Checkout />
            </CheckoutTemplate>
          }
        />
        <Route
          path="/login"
          element={
            <UserTemplate>
              <Login />
            </UserTemplate>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
