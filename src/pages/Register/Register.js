import React, { useState, useEffect, Fragment } from "react";
import { Button, Layout, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { registerAction } from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

const { Header, Footer, Sider, Content } = Layout;

export default function RegisterCyberBugs() {
  const dispatch = useDispatch();

  const [{ width, height }, setSize] = useState({
    width: Math.round(window.innerWidth),
    height: Math.round(window.innerHeight),
  });

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
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
      soDt: Yup.string()
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
      dispatch(registerAction(values));

      // console.log("values", values);
    },
  });

  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: Math.round(window.innerWidth),
        height: Math.round(window.innerHeight),
      });
    };
  }, []);
  return (
    <Fragment>
      <Layout>
        <Sider
          width={width / 2}
          style={{
            height: height,
            backgroundImage: `url(https://picsum.photos/${Math.round(
              width / 2
            )}/${height})`,
            backgroundSize: "100%",
          }}
        ></Sider>
        <Content>
          <form
            className="container"
            style={{
              height: window.innerHeight,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <div
              className=""
              style={{
                height: window.innerHeight,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                className="text-center"
                style={{ fontWeight: 300, fontSize: 35 }}
              >
                REGISTER BOOKING MOVIE
              </h3>
              <div className="d-flex mt-3">
                <Input
                  style={{ width: "100%", minWidth: 300 }}
                  name="hoTen"
                  size="large"
                  placeholder="Name"
                  prefix={<UserOutlined />}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="text-red-600">{formik.errors.hoTen}</div>
              <div className="d-flex mt-3">
                <Input
                  style={{ width: "100%", minWidth: 300 }}
                  name="taiKhoan"
                  size="large"
                  placeholder="Username"
                  prefix={<UserOutlined />}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="text-red-600">{formik.errors.taiKhoan}</div>

              <div className="d-flex mt-3">
                <Input
                  style={{ width: "100%", minWidth: 300 }}
                  name="email"
                  size="large"
                  placeholder="Email"
                  prefix={<MailOutlined />}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="text-red-600">{formik.errors.email}</div>

              <div className="d-flex mt-3">
                <Input
                  style={{ width: "100%", minWidth: 300 }}
                  name="soDt"
                  size="large"
                  placeholder="Phone"
                  prefix={<PhoneOutlined />}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="text-red-600">{formik.errors.soDt}</div>

              {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
              <div className="d-flex mt-3">
                <Input
                  style={{ width: "100%", minWidth: 300 }}
                  type="password"
                  name="matKhau"
                  size="large"
                  placeholder="Password"
                  prefix={<LockOutlined />}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="text-red-600">{formik.errors.matKhau}</div>
              <Button
                size="large"
                style={{
                  minWidth: 300,
                  backgroundColor: "rgb(102,117,223)",
                  color: "#fff",
                }}
                className="mt-5"
                htmlType="submit"
              >
                Register
              </Button>
              <div className="d-flex justify-content-center mt-3 ">
                <p>
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </p>
              </div>
            </div>
          </form>
        </Content>
      </Layout>
    </Fragment>
  );
}
