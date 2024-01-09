import React from "react";
import GlobalStylesFlightComp from "../../components/FlightCompo/globalFlightCompo";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import FlightCompo from "../../components/FlightCompo/FlightCompo";

export default function Flight() {
  return (
    // <Row>
    //   <Col span={6}>col-8</Col>
    //   <Col span={18}>col-12</Col>
    // </Row>
    <>
      <HomeCarousel />
      <>
        <GlobalStylesFlightComp />
        <FlightCompo />
      </>
    </>
  );
}
