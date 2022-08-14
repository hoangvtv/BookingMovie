import { GET_CAROUSEL } from "../types/CarouselType";
import { CarouselService } from "../../services/CarouselService";

export const getCarouselAction = async (dispatch) => {
  try {
    const res = await CarouselService.getCarousel();

    dispatch({
      type: GET_CAROUSEL,
      carouselList: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
