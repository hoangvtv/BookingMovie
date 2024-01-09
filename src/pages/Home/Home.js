import React, { useEffect } from "react";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import Offers from "../../components/Offers/Offers";
import GlobalStyles from "../../components/Offers/global";
import GlobalStylesPlaces from "../../components/TopPlaces/globalPlaces";
import GlobalStylesBanner from "../../components/Banner/globalBanner";
import GlobalStylesReviews from "../../components/Reviews/globalReviews";
import TopPlaces from "../../components/TopPlaces/TopPlaces";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import Places from "../../components/Places/Places";

export default function Home() {
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
        <GlobalStyles />
        <Offers />
      </>
      <Places />
      <>
        <GlobalStylesPlaces />
        <TopPlaces />
      </>
      <>
        <GlobalStylesReviews />
        <Reviews />
      </>
      <>
        <GlobalStylesBanner />
        <Banner />
      </>

      {/* <Slide /> */}

      {/* <div className="mx-36">
        <HomeMenu movieTheates={movieTheates} />
      </div> */}
    </div>
  );
}
