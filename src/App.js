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

export const history = createBrowserHistory();

// const CheckoutLazy = lazy(() => import("./pages/Checkout/Checkout"));

function App() {
  return (
    <div>
      <Header />

      <Routes history={history}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<HomeTempale />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Route path="/checkout" element={<CheckoutLazy />}></Route>
        </Suspense> */}
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/checkout/:id" element={<Checkout />}></Route>
        <Route path="*" element={<NotFound />} />
        {/* <CheckoutTemplate path="/checkout/:id" Element={<Checkout />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
