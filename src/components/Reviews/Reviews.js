import styled from "styled-components";
import React from "react";
import Slider from "react-slick";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  color: #177ba5;
  font-size: var(--page-header2-size);
`;

export default function Reviews() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div style={{ width: "100%" }} className="container">
      <Title>Khách Hàng Nói Gì Về Chúng Tôi</Title>
      <Slider {...settings}>
        <div>
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
        </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
}
