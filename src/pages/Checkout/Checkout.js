import React from "react";
import { USER_LOGIN } from "../../util/config";
import { Navigate } from "react-router-dom";

export default function Checkout() {
  if (localStorage.getItem(USER_LOGIN)) {
    return <div>Profile</div>;
  } else {
    alert("vui lòng đăng nhập để vào trang này ");
    return <Navigate to="/login" />;
  }
}
