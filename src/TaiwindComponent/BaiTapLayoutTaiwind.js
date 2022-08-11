import React from "react";
import CardComponent from "./CardComponent";

export default function BaiTapLayoutTaiwind() {
  return (
    <div className="container">
      <h1 className="text-center text-4xl text-green-500">
        {" "}
        Welcome to Cybersoft Frontend with TailwindCss
      </h1>

      <div className="grid grid-cols-3 gap-4 my-3">
        <div className="text-center">
          <CardComponent />
        </div>
        <div className="text-center">
          <CardComponent />
        </div>
        <div className="text-center">
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
