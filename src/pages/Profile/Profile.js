import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Login/Login.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, updateUserAction } from "../../redux/actions/UserAction";

export default function Profile() {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);

  const userLogin = useSelector((state) => state.UserReducer.userLogin);

  const formik = useFormik({
    initialValues: {
      hoTen: userLogin?.hoTen,
      taiKhoan: userLogin?.taiKhoan,
      email: userLogin?.email,
      soDT: userLogin?.soDT,
      matKhau: userLogin?.matKhau,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Username is equired"),
      matKhau: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters"),
      email: Yup.string()
        .required(" Email is required")
        .email("Email is not valid"),
      soDT: Yup.string()
        .required("Phone is required!")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone Number is not invalid!"
        ),
      hoTen: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
    }),
    onSubmit: (values) => {
      dispatch(updateUserAction(values));
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
      <div className="px-12 sm:px-24 md:px-48 lg:px-12  xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
          Profile
        </h2>
        <div>
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Name
              </div>
              <input
                name="hoTen"
                type="text"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={formik.values?.hoTen}
              />
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Username
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={formik.values?.taiKhoan}
                disabled
              />
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
              </div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={formik.values?.email}
              />
              <div className="text-red-600 text-right">
                {formik.errors.email}
              </div>
            </div>

            <div className="my-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Phone
                </div>
              </div>
              <input
                type="phone"
                name="soDt"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={formik.values?.soDT}
              />
              <div className="text-red-600 text-right">
                {formik.errors.soDT}
              </div>
            </div>

            {update === true ? (
              <Fragment>
                {" "}
                <div className="">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>
                  <input
                    type="password"
                    name="matKhau"
                    onChange={formik.handleChange}
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Enter new password"
                  />
                  <div className="text-red-600 text-right">
                    {formik.errors.matKhau}
                  </div>
                </div>
                <div className="my-10">
                  <button
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg"
                  >
                    Cập nhập
                  </button>
                </div>
              </Fragment>
            ) : (
              <div className="my-8">
                <span> Bạn có muốn cập nhập thông tin không? </span>{" "}
                <button
                  onClick={() => {
                    setUpdate(true);
                  }}
                  className="text-red-600"
                >
                  {" "}
                  Click tại đây{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
