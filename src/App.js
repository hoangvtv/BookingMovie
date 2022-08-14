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

export const history = createBrowserHistory();

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
