import React from "react";
import "./Film.css";

export default function Film(props) {
  const { film } = props;
  return (
    <div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          backgroundImage: `url(${film.hinhAnh}) `,
          backgroundPosition: "center",
          backgroundSize: "100%",
          borderRadius: "10px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={film.hinhAnh}
          alt={film.hinhAnh}
          className="opacity-0 w-full"
          style={{ height: "200px" }}
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900  mb-3 h-16 mt-2">
        {film.tenPhim}
      </h1>
      <p
        className="leading-relaxed mb-3 film__description"
        style={{
          display: "webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {/* {film.moTa.length > 100 ? (
          <span>{film.moTa.slice(0, 100) + "..."}</span>
        ) : (
          <span> {film.moTa}</span>
        )} */}
        {film.moTa}
      </p>
      <a className="text-indigo-500 inline-flex items-center">
        Đặt vé
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
