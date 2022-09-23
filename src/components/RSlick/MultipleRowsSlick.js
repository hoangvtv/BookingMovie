import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";
import { useDispatch, useSelector } from "react-redux";
import FilmFlip from "../Film/FilmFlip";
import { GET_FILM_COMING, GET_FILM_PLAYING } from "../../redux/types/FilmType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { playing, coming } = useSelector((state) => state.FilmReducer);

  const renderFilms = () => {
    return props.arrFilm.slice(0, 20).map((item, index) => {
      // return (
      //   <div className={`${styleSlick["width-item"]}`} key={index}>
      //     <Film film={item} />
      //   </div>
      // );
      return (
        <div key={index} className="mt-2">
          <FilmFlip film={item} />
        </div>
      );
    });
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let activeStylePlaying = playing
    ? "bg-gray-800 text-white"
    : "bg-purple-800 text-gray-800";
  let activeStyleComing = coming
    ? "bg-gray-800 text-white"
    : "bg-purple-800 text-gray-800";

  return (
    <div>
      <button
        type="button"
        className={`relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded    ${activeStylePlaying}`}
        onClick={() => {
          const action = {
            type: GET_FILM_PLAYING,
          };
          dispatch(action);
        }}
      >
        PHIM ĐANG CHIẾU
      </button>

      <button
        type="button"
        className={`relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded   mt-5 ${activeStyleComing}`}
        onClick={() => {
          const action = {
            type: GET_FILM_COMING,
          };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 text-white">
          New
        </span>
      </button>

      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
