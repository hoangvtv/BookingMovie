import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const { carouselList } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction);
  }, []);

  const renderImgae = () => {
    return carouselList.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              alt="hinh anh"
              className="w-full opacity-0 "
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel effect="fade">{renderImgae()}</Carousel>;
}
