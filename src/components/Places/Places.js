import React from "react";
import styled from "styled-components";
import { Col, Divider, Row } from "antd";
import Slider from "react-slick";

const style: React.CSSProperties = { padding: "8px 0" };

export default function Places() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="container" style={{ margin: "80px 0" }}>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <h5
              style={{
                color: " #177BA5",
                fontFamily: " Be Vietnam Pro",
                fontSize: " 48px",
                fontStyle: " normal",
                fontWeight: " 600",
                lineHeight: " normal",
                textransform: " capitalize",
              }}
            >
              Các địa điểm không thể bỏ lỡ
            </h5>
            <p
              style={{
                color: " #292D32",
                textAlign: " justify",
                fontFamily: " Be Vietnam Pro",
                fontSize: " 24px",
                fontStyle: " normal",
                fontWeight: " 400",
                lineHeight: " normal",
                textTransform: " capitalize",
              }}
            >
              Chọn một nơi bạn hứng thú và liên hệ với chúng tôi để có trải
              nghiệm tốt nhất
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <Slider {...settings}>
            <div>
              <h3>
                <img
                  style={{
                    maxHeight: "350px",
                    maxWidth: "300px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                  }}
                  src={require("../../assets/img/pl__1.png")}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  style={{
                    maxHeight: "350px",
                    maxWidth: "300px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                  }}
                  src={require("../../assets/img/pl__2.png")}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  style={{
                    maxHeight: "350px",
                    maxWidth: "300px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                  }}
                  src={require("../../assets/img/pl__3.png")}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  style={{
                    maxHeight: "350px",
                    maxWidth: "300px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                  }}
                  src={require("../../assets/img/pl__1.png")}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  style={{
                    maxHeight: "350px",
                    maxWidth: "300px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                  }}
                  src={require("../../assets/img/pl__2.png")}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  style={{
                    maxHeight: "350px",
                    maxWidth: "300px",
                    borderTop: "8px solid #FFBC3A",
                    borderRight: "8px solid #FFBC3A",
                    borderRadius: "54px",
                  }}
                  src={require("../../assets/img/pl__3.png")}
                />
              </h3>
            </div>
            {/* <div>
              <h3>
                <img src={require("../../assets/img/comments.png")} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={require("../../assets/img/comment1.png")} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={require("../../assets/img/comment2.png")} />
              </h3>
            </div> */}
          </Slider>
        </Col>
      </Row>
    </div>
  );
}
