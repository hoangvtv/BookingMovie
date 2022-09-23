import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Form, Button, Select, DatePicker, InputNumber } from "antd";
import moment from "moment";
import { useParams } from "react-router-dom";
import { MovieTheateService } from "../../../../services/MovieTheateService";
import { useSelector } from "react-redux";

export default function ShowTime() {
  const { idPhim } = useParams();
  const { tenPhim } = useParams();

  const { filmParam } = useSelector((state) => state.FilmReducer);

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  const formik = useFormik({
    initialValues: {
      maPhim: idPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 0,
    },
    onSubmit: async (values) => {
      try {
        const result = await MovieTheateService.taoLichChieu(values);
        alert("Tạo lịch chiếu thành công");
      } catch (error) {
        console.log(error);
        alert("Tạo lịch chiếu thất bại");
      }
    },
  });

  const handleChangeHeThongRap = async (value, options) => {
    try {
      const result = await MovieTheateService.layThongTinCumRapTheoHeThong(
        value
      );

      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onchangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  const convertSelectHTR = () => {
    // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.tenHeThongRap }))
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  useEffect(() => {
    async function fetchInfoMovieTheate() {
      try {
        let result = await MovieTheateService.getInfoMovieTheate();
        setState({
          ...state,
          heThongRapChieu: result.data.content,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchInfoMovieTheate();
  }, []);

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h3 className="text-2xl">Tạo lịch chiếu - {tenPhim}</h3>
        <img src={filmParam.hinhAnh} alt="..." width={200} height={100} />
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertSelectHTR()}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap, index) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleChangeCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeDate}
            onOk={onOk}
          />
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber
            onChange={onchangeInputNumber}
            min={70000}
            max={150000}
          />
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
