import React from "react";
import "./CustomCssComponent.css";

export default function CustomCssComponent() {
  return (
    <div className="container mt-1">
      <article className="bg-gray-500 p-5 shadow-lg">
        <p className="text-2xl text-white "> Responsive</p>

        <p className="content ">
          {" "}
          Every utility class in Tailwind can be applied conditionally at
          different breakpoints, which makes it a piece of cake to build complex
          responsive interfaces without ever leaving your HTML. There are five
          breakpoints by default, inspired by common device resolutions:
        </p>

        <button className="animation-scale p-4 mt-5 rounded-md">
          {" "}
          Hover me{" "}
        </button>
      </article>
    </div>
  );
}
