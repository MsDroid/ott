import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryTitle from "../CategoryTitle.json";
const Testslider = () => {
  const design = (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CategoryTitle.map((i) => {
          return (
            <>
              <SwiperSlide>
                <Button variant="primary">{i.title}</Button>
              </SwiperSlide>
              ;
            </>
          );
        })}
      </Swiper>
    </>
  );

  return design;
};

export default Testslider;
