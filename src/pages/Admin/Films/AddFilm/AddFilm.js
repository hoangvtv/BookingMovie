import { useFormik } from "formik";
import React, { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";
import { createFilmAction } from "../../../../redux/actions/FilmAction";

export default function AddFilm() {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      //tạo đối tuợng form data
      let formData = new FormData();
      for (let key in values) {
        if (key === "hinhAnh") {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        } else {
          formData.append(key, values[key]);
        }
      }

      //gọi API
      dispatch(createFilmAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    formik.setFieldValue("ngayKhoiChieu", moment(value).format("DD/MM/YYYY"));
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

  const handleChangeFile = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result); //Hình base 64
      };
      //Đem dữ liệu file lưu vào formik
      formik.setFieldValue("hinhAnh", file);
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3 className="text-4xl">Thêm mới phim </h3>
      <Form.Item label="Tên phim">
        <Input name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch onChange={handleChangeSwitch("dangChieu")} />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch onChange={handleChangeSwitch("sapChieu")} />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch onChange={handleChangeSwitch("hot")} />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          min={1}
          max={10}
        />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg,image/gif,image/png"
        />
        <br />
        <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-white p-2">
          Thêm phim
        </button>
      </Form.Item>
    </Form>
  );
}
