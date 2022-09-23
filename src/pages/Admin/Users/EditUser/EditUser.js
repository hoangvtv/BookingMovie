import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editUserActionAPI } from "../../../../redux/actions/UserAction";

export default function EditUser(props) {
  const dispatch = useDispatch();

  const { editUser } = useSelector((state) => state.UserReducer);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: editUser?.taiKhoan,
      hoTen: editUser?.hoTen,
      email: editUser?.email,
      soDt: editUser?.soDt,
      maLoaiNguoiDung: editUser?.maLoaiNguoiDung,
    },
    onSubmit: (values) => {
      //gọi API
      dispatch(editUserActionAPI(formik.values));
    },
  });

  const handleSelect = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };
  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <h3 className="text-4xl">
        Cập nhập tài khoản: {formik.values?.taiKhoan}{" "}
      </h3>
      <Form.Item label="Họ tên">
        <Input
          name="hoTen"
          onChange={formik.handleChange}
          value={formik.values.hoTen}
          disabled
        />
      </Form.Item>
      <Form.Item label="Tài khoản">
        <Input
          name="taiKhoan"
          onChange={formik.handleChange}
          value={formik.values.taiKhoan}
          disabled
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          disabled
        />
      </Form.Item>

      <Form.Item label="Phone">
        <Input
          name="soDt"
          onChange={formik.handleChange}
          value={formik.values.soDt}
          disabled
        />
      </Form.Item>

      <Form.Item label="Loại người dùng">
        <Select
          defaultValue={formik.values.maLoaiNguoiDung}
          onChange={handleSelect}
        >
          <Select.Option value="KhachHang">Khách Hàng</Select.Option>
          <Select.Option value="QuanTri">Quản Trị</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-white p-2">
          Cập nhập người dùng
        </button>
      </Form.Item>
    </Form>
  );
}
