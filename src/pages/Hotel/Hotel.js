import React from "react";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HotelCompo from "../../components/Hotel/HotelComp";
import GlobalStylesHotelComp from "../../components/Hotel/globalHotel";

export default function Hotel() {
  return (
    <>
      <HomeCarousel />
      <>
        <GlobalStylesHotelComp />
        <HotelCompo />
      </>
    </>
  );
}
