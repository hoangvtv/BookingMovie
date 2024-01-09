import React, { Fragment, useEffect } from "react";
import Header from "./Layout/Header/Header";
import FooterI from "./Layout/FooterI/FooterI";

export default function HomeTempale({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <Header />
      {children}
      <FooterI />
    </Fragment>
  );
}
