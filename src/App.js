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
import Profile from "./pages/Profile/Profile";
import AdminTemplate from "./templates/AdminTemplate/AdmimTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import Users from "./pages/Admin/Users/Users";
import AddFilm from "./pages/Admin/Films/AddFilm/AddFilm";
import EditFilm from "./pages/Admin/Films/EditFilm/EditFilm";
import ShowTime from "./pages/Admin/Films/ShowTime/ShowTime";

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
        <Route
          path="/register"
          element={
            <UserTemplate>
              <Register />
            </UserTemplate>
          }
        />

        <Route
          path="/profile"
          element={
            <HomeTempale>
              <Profile />
            </HomeTempale>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminTemplate>
              <Dashboard />
            </AdminTemplate>
          }
        />

        <Route
          path="/admin/films"
          element={
            <AdminTemplate>
              <Films />
            </AdminTemplate>
          }
        />

        <Route
          path="/admin/films/add"
          element={
            <AdminTemplate>
              <AddFilm />
            </AdminTemplate>
          }
        />
        <Route
          path="/admin/films/edit/:id"
          element={
            <AdminTemplate>
              <EditFilm />
            </AdminTemplate>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminTemplate>
              <Users />
            </AdminTemplate>
          }
        />

        <Route
          path="/admin/films/showtime/:idPhim/:tenPhim"
          element={
            <AdminTemplate>
              <ShowTime />
            </AdminTemplate>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
