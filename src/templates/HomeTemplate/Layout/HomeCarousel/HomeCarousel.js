import React, { useEffect } from "react";
import { Carousel } from "antd";
import "./HomeCarousel.css";
import bg1 from "../../../../assets/img/bg1.png";
import bg2 from "../../../../assets/img/bg2.png";
import bg3 from "../../../../assets/img/bg3.png";

const contentStyle = {
  height: "780px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

const carouselList = [
  {
    maBanner: 1,
    maPhim: 1282,
    hinhAnh: bg1,
  },
  {
    maBanner: 2,
    maPhim: 1282,
    hinhAnh: bg2,
  },
  {
    maBanner: 1,
    maPhim: 1282,
    hinhAnh: bg3,
  },
];

export default function HomeCarousel() {
  const renderImgae = () => {
    return carouselList.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        autoplay
        effect="fade"
        style={{ width: "100%", padding: 0, margin: 0 }}
      >
        {renderImgae()}
      </Carousel>
      <div
        className="modal__ticket"
        style={{
          position: "absolute",
          left: "20% ",
          bottom: "10px",
          width: "900px",
        }}
      >
        <div
          className="modal__ticket--title"
          style={{
            fontFamily: " Be Vietam Pro",
            fontSize: " 24px",
            fontWeight: " 400",
            lineHeight: " 30px",
            letterSpacing: " 0em",
            textAlign: " left",
            padding: "15px",
            backgroundColor: "#FFFFFFB2",
            borderRadius: " 30px 30px 0 0",
            width: "430px",
            display: "flex",
            gap: "10px",
            position: "relative",
            left: "2%",
          }}
        >
          <span
            style={{
              backgroundColor: "#177BA5",
              padding: "8px 16px 8px 16px",
              borderRadius: "40px",
              display: "flex",
              color: " white",
              gap: "10px ",
            }}
          >
            <img
              src={require("../../../../assets/img/icon__plane.png")}
              style={{ width: "24px", height: "24px" }}
            />
            Chuyến bay
          </span>
          <span
            style={{
              display: "flex",
              padding: "8px 16px 8px 16px",
              width: "200px",
              gap: "10px ",
            }}
          >
            <img
              src={require("../../../../assets/img/icon__hotel.png")}
              style={{ width: "24px", height: "24px" }}
            />
            Khách sạn
          </span>
        </div>
        <img src={require("../../../../assets/img/ticket.png")} />
      </div>
    </div>
  );
}
