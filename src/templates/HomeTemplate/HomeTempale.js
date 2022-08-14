import React, { Fragment } from "react";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export default function HomeTempale() {
  return (
    <Fragment>
      <HomeCarousel />

      <footer className="bg-black h-10 text-white">
        Đây là footer homepage
      </footer>
    </Fragment>
  );
}
