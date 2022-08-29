import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  editInfoFilmAction,
  getInfoFilmAction,
} from "../../../../redux/actions/FilmAction";
const parse = require("html-react-parser");

export default function EditFilm() {
  const { id } = useParams();

  const { infoFilm } = useSelector((state) => state.FilmReducer);

  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: infoFilm?.maPhim,
      tenPhim: infoFilm?.tenPhim,
      trailer: infoFilm?.trailer,
      moTa: infoFilm?.moTa,
      ngayKhoiChieu: infoFilm?.ngayKhoiChieu,
      dangChieu: infoFilm?.dangChieu,
      sapChieu: infoFilm?.sapChieu,
      hot: infoFilm?.hot,
      danhGia: infoFilm?.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      //tạo đối tuợng form data
      let formData = new FormData();
      for (let key in values) {
        if (key === "hinhAnh") {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        } else {
          formData.append(key, values[key]);
        }
      }

      //gọi API
      dispatch(editInfoFilmAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    formik.setFieldValue("ngayKhoiChieu", moment(value));
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      //Đem dữ liệu file lưu vào formik
      await formik.setFieldValue("hinhAnh", file);

      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result); //Hình base 64
      };
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(() => {
    dispatch(getInfoFilmAction(id));
  }, []);

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
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3 className="text-4xl">Cập nhập phim </h3>
      <Form.Item label="Tên phim">
        <Input
          name="tenPhim"
          onChange={formik.handleChange}
          value={formik.values.tenPhim}
        />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input
          name="trailer"
          onChange={formik.handleChange}
          value={formik.values.trailer}
        />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input
          name="moTa"
          onChange={formik.handleChange}
          value={formik.values.moTa}
          // parse(film.moTa)
        />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker
          onChange={handleChangeDatePicker}
          format="DD/MM/YYYY"
          value={moment(formik.values.ngayKhoiChieu)}
        />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch
          onChange={handleChangeSwitch("dangChieu")}
          checked={formik.values.dangChieu}
        />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch
          onChange={handleChangeSwitch("sapChieu")}
          checked={formik.values.sapChieu}
        />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch
          onChange={handleChangeSwitch("hot")}
          checked={formik.values.hot}
        />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          min={1}
          max={10}
          value={formik.values.danhGia}
        />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg,image/gif,image/png"
        />
        <br />
        <img
          style={{ width: 150, height: 150 }}
          src={imgSrc === "" ? infoFilm.hinhAnh : imgSrc}
          alt="..."
        />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-white p-2">
          Cập nhập phim
        </button>
      </Form.Item>
    </Form>
  );
}
