import logo from "./logo.svg";
import "./App.css";
import "./App.css";

import { createBrowserHistory } from "history";
import { Route, Routes } from "react-router-dom";
import HomeTempale from "./templates/HomeTemplate/HomeTempale";

export const history = createBrowserHistory();

function App() {
  return (
    <Routes history={history}>
      <Route path="/" element={<HomeTempale />}></Route>
    </Routes>
  );
}

export default App;
