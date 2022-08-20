import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/UserAction";

export default function Login() {
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.UserReducer.userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Required"),
      matKhau: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="lg:w-1/2 xl:max-w-screen-sm"
      style={{ margin: " auto" }}
    >
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
          style={{
            marginTop: "100px",
          }}
        >
          Đăng nhập
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
              <div className="text-red-600 text-right">
                {formik.errors.taiKhoan}
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
              <div className="text-red-600 text-right">
                {formik.errors.matKhau}
              </div>

              <NavLink
                to=""
                className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                  cursor-pointer"
              >
                Quên mật khẩu ?
              </NavLink>
            </div>
            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg"
              >
                Đăng nhập
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center mb-10">
            Bạn chưa có tài khoản ?{" "}
            <NavLink
              to="register"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng ký
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
