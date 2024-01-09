import React, { Fragment, useEffect } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export default function HomeTempale({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
