import React, { useEffect } from "react";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

import GlobalStylesDiscover from "../../components/Discover/globalDiscover";
import Discover from "../../components/Discover/Discover";

export default function Discovery() {
  // const { movieTheates } = useSelector((state) => state.MovieTheateReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getFilmAction);
  //   dispatch(getMovieTheatelAction);
  // }, []);

  return (
    <div>
      <HomeCarousel />
      <>
        <GlobalStylesDiscover />
        <Discover />
      </>
    </div>
  );
}
