import { Fragment, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { USER_LOGIN } from "../../util/config";

const CheckoutTemplate = ({ children }) => {
  //path, exact, Component
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/login" />;
  }

  return <Fragment>{children}</Fragment>;
};

export default CheckoutTemplate;
