import React, { useEffect } from "react";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu.js/HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowsSlick";
import { getFilmAction } from "../../redux/actions/FilmAction";

export default function Home() {
  const { arrFilm } = useSelector((state) => state.FilmReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmAction);
  }, []);

  return (
    <div>
      <HomeCarousel />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap -m-4  justify-center">
            {renderFilm()}
          </div> */}
        </div>
      </section>
      {/* <MultipleRowsSlick arrFilm={arrFilm} /> */}

      <div className="mx-36">
        <HomeMenu />
      </div>
    </div>
  );
}
