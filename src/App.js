import logo from "./logo.svg";
import "./App.css";

import { createBrowserHistory } from "history";
import { Route, Routes } from "react-router-dom";
import HomeTempale from "./templates/HomeTemplate/HomeTempale";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import Discovery from "./pages/Discovery/Discovery";
import Flight from "./pages/Flight/Flight";
import Hotel from "./pages/Hotel/Hotel";

export const history = createBrowserHistory();

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
          path="/hotel"
          element={
            <HomeTempale>
              <Hotel />
            </HomeTempale>
          }
        />
        <Route
          path="/flights"
          element={
            <HomeTempale>
              <Flight />
            </HomeTempale>
          }
        />

        <Route
          path="/discovery"
          element={
            <HomeTempale>
              <Discovery />
            </HomeTempale>
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

        <Route
          path="/register"
          element={
            <UserTemplate>
              <Register />
            </UserTemplate>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
