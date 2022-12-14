import React, { Fragment, useEffect } from "react";
import { TOKEN, USER_LOGIN } from "../../util/config";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import {
  bookTicketAction,
  bookTicketAPIAction,
  getDetaiBookTicketAction,
  setGheKhachDangDatAction,
} from "../../redux/actions/BookTicketAction";
import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./Checkout.css";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";

import { Tabs } from "antd";
import { getInfoUserAction } from "../../redux/actions/UserAction";
import moment from "moment";
import { CHANGE_TAB } from "../../redux/types/BookTicketType";
import { connection } from "../../index";
import { history } from "../../App";
import { t } from "i18next";

import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";

function Checkout() {
  const { userLogin } = useSelector((state) => state.UserReducer);

  const { detailTicket, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(
    (state) => state.BookTicketReducer
  );
  const { thongTinPhim, danhSachGhe } = detailTicket;

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetaiBookTicketAction(id));

    //có 1 client đặt vé thành công, get lại danh sách ghế  đã được đặt
    // connection.invoke("datVeThanhCong", () => {
    //   dispatch(getDetaiBookTicketAction(id));
    // });

    //Vừa vào trang load tất cả ghế của các người khác đang đặt
    connection.invoke("loadDanhSachGhe", id); //invoke('hàm ở server', 'truyền tham số cho server')

    //load danh sách ghế  khách đang đặt từ server về
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDatReturn) => {
      //Bước 1: loại mình ra khỏi danh sách ghế  khách đặt
      dsGheKhachDatReturn = dsGheKhachDatReturn.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );

      //Bước 2: gộp danh sách ghế  khách đạt thành arr
      let arrGheKhachDat = dsGheKhachDatReturn.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);

        return [...result, ...arrGhe];
      }, []);

      //đưa lên reducer ghế khách đặt
      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");
      dispatch(setGheKhachDangDatAction(arrGheKhachDat));

      // cài đặt sự kiện reload trang
      window.addEventListener("beforeunload", clearGhe);

      return () => {
        //return tương dương unmount
        clearGhe();
        window.removeEventListener("beforeunload", clearGhe);
      };
    });
  }, []);
  const clearGhe = function (event) {
    //invoke là hàm gọi API của connection WB SignalR
    connection.invoke("huyDat", userLogin.taiKhoan, id);
  };

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      //Kiểm tra từng ghế render có phải ghế khách đặt hay không
      let classGheKhachDat = "";
      let indexGheKhachDat = danhSachGheKhachDat.findIndex(
        (gheKD) => gheKD.maGhe == ghe.maGhe
      );

      if (indexGheKhachDat !== -1) {
        classGheKhachDat = "gheKhachDat";
      }

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      if (indexGheDD != -1) {
        classGheDaDat = "gheDangDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              // dispatch({
              //   type: DAT_VE,
              //   gheDuocChon: ghe,
              // });
              // const action = bookTicketAction(ghe, id);
              dispatch(bookTicketAction(ghe, id));
            }}
            disabled={ghe.daDat | (classGheKhachDat !== "")}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat != "" ? (
                <UserOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              ) : (
                <CloseOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              )
            ) : classGheKhachDat !== "" ? (
              <UserOutlined style={{ marginBottom: 7.5, fontWeight: "bold" }} />
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className=" h-min-screen  mt-5">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className="manHinh">
              <div
                className="bg-black "
                style={{ width: "80%", height: 15 }}
              ></div>
              <div className={`${style["trapezoid"]} text-center`}>
                <h3 className=" text-black text-center">Màn hình</h3>
              </div>
              <div> {renderSeats()} </div>
            </div>

            <div className="mt-5 flex justify-center">
              <table className=" divide-y divide-gray-200 w-2/3">
                <thead className="bg-gray-50 p-5">
                  <tr>
                    <th>Ghế chưa đặt</th>
                    <th>Ghế đang đặt</th>
                    <th>Ghế vip</th>
                    <th>Ghế đã đặt</th>
                    <th>Ghế mình đặt</th>
                    <th>Ghế khách đang đặt</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td>
                      <button className="ghe text-center">
                        {" "}
                        <CheckOutlined
                          style={{ marginBottom: 7.5, fontWeight: "bold" }}
                        />{" "}
                      </button>{" "}
                    </td>
                    <td>
                      <button className="ghe gheDangDat text-center">
                        {" "}
                        <CheckOutlined
                          style={{ marginBottom: 7.5, fontWeight: "bold" }}
                        />
                      </button>{" "}
                    </td>
                    <td>
                      <button className="ghe gheVip text-center">
                        <CheckOutlined
                          style={{ marginBottom: 7.5, fontWeight: "bold" }}
                        />
                      </button>{" "}
                    </td>
                    <td>
                      <button className="ghe gheDaDat text-center">
                        {" "}
                        <CloseOutlined
                          style={{ marginBottom: 7.5, fontWeight: "bold" }}
                        />{" "}
                      </button>{" "}
                    </td>
                    <td>
                      <button className="ghe gheDaDuocDat text-center">
                        {" "}
                        <UserOutlined
                          style={{ marginBottom: 7.5, fontWeight: "bold" }}
                        />{" "}
                      </button>{" "}
                    </td>

                    <td>
                      <button className="ghe gheKhachDat text-center">
                        {" "}
                        <UserOutlined
                          style={{ marginBottom: 7.5, fontWeight: "bold" }}
                        />{" "}
                      </button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-center text-xl text-green-400">
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              VND
            </h3>
            <hr />
            <h3 className="text-xl mt-2 ">
              {detailTicket.thongTinPhim.tenPhim}
            </h3>
            <p>
              Địa điểm: {detailTicket.thongTinPhim.tenCumRap} -{" "}
              {detailTicket.thongTinPhim.tenRap}
            </p>
            <p>
              Ngày chiếu: {detailTicket.thongTinPhim.ngayChieu} -{" "}
              {detailTicket.thongTinPhim.gioChieu}
            </p>
            <hr />
            <div className="flex flex-row my-5">
              <div className="w-4/5">
                <span className="text-red-400 text-lg">Ghế</span>

                {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                  return (
                    <span key={index} className="text-green-500 text-xl">
                      {" "}
                      {gheDD.stt}
                    </span>
                  );
                })}
              </div>
              <div className="text-right col-span-1">
                <span className="text-green-800 text-lg">
                  {danhSachGheDangDat
                    .reduce((tongTien, ghe, index) => {
                      return (tongTien += ghe.giaVe);
                    }, 0)
                    .toLocaleString()}{" "}
                  VND
                </span>
              </div>
            </div>
            <hr />
            <div className="my-5">
              <i> Email: </i> <br />
              {userLogin.email}
            </div>
            <div className="my-5">
              <i> Phone: </i> <br />
              {userLogin.soDT}
            </div>
            <hr />
            <div className="mb-0 flex flex-col justify-center">
              <button
                className="bg-green-400 mt-10  text-white py-2 px-4 rounded-lg text-xl  "
                onClick={() => {
                  const thongTinDatVe = new ThongTinDatVe();
                  thongTinDatVe.maLichChieu = id;
                  thongTinDatVe.danhSachVe = danhSachGheDangDat;

                  dispatch(bookTicketAPIAction(thongTinDatVe));
                }}
              >
                Đặt vé
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const { TabPane } = Tabs;

export default function (props) {
  const { tabActive } = useSelector((state) => state.BookTicketReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.UserReducer);

  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          {" "}
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            {" "}
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-2xl ml-5 rounded-full bg-red-200"
            >
              {userLogin.taiKhoan.substr(0, 1).toUpperCase()}
            </div>
            {t("hello.1")} ! {userLogin.taiKhoan}
          </button>{" "}
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              navigate.push("/");
              window.location.reload();
            }}
            className="text-blue-800"
          >
            Đăng xuất
          </button>{" "}
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  const { detailTicket, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(
    (state) => state.BookTicketReducer
  );
  const { thongTinPhim, danhSachGhe } = detailTicket;

  useEffect(() => {
    return () => {
      dispatch({
        type: "CHANGE_TAB_ACTIVE",
        number: "1",
      });
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${thongTinPhim.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CustomCard
        style={{ minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="p-5">
          <Tabs
            tabBarExtraContent={operations}
            defaultActiveKey="1"
            activeKey={tabActive.toString()}
            onChange={(key) => {
              dispatch({
                type: "CHANGE_TAB_ACTIVE",
                number: key,
              });
            }}
          >
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
              <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
              <KetQuaDatVe {...props} />
            </TabPane>
            <TabPane
              tab={
                <div
                  className="text-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NavLink to="/">
                    <HomeOutlined style={{ marginLeft: 10, fontSize: 25 }} />
                  </NavLink>
                </div>
              }
              key="3"
            ></TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();

  const { infoUser } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(getInfoUserAction());
  }, []);

  const renderTicket = () => {
    return infoUser.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-white title-font font-medium text-2xl">
                {ticket.tenPhim}
              </h2>
              <p className="text-white">
                <span className="font-bold">Giờ chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
                <span className="font-bold">Ngày chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
              </p>
              <p>
                <span className="font-bold">Địa điểm:</span>{" "}
                {seats.tenHeThongRap}{" "}
              </p>
              <p>
                <span className="font-bold">Tên rạp:</span> {seats.tenCumRap} -{" "}
                <span className="font-bold">Ghế:</span>{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="text-white text-xl" key={index}>
                      {" "}
                      [ {ghe.tenGhe} ]
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      {" "}
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-red-600 ">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicket()}</div>
        </div>
      </section>{" "}
    </div>
  );
}
