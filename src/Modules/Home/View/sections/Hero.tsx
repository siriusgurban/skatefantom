// React icons

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import ArrowLeft from "../../../../assets/images/svg/arrow-left.svg?react";
import ArrowRight from "../../../../assets/images/svg/arrow-right.svg?react";
import { useRef, useState } from "react";

const Hero = () => {
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  // const [init, setInit] = useState(false); 
  const swiper = useSwiper();
  return (
    <section id="hero" className="hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
         // Trigger re-render after initialization
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper_item">
          <div className="image">
            <img
              src="https://skatefantom.com/wp-content/uploads/2025/04/slider_hoodie.jpg"
              alt="skate"
            />
            <div className="container">
              <div className="content">
                <h2>Nocturnal Hoodie</h2>
                <Link to="/shop" className="see_more">
                  <span>Shop</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_item">
          <div className="image">
            <img
              src="https://skatefantom.com/wp-content/uploads/2025/04/slider_hoodie.jpg"
              alt="skate"
            />
            <div className="container">
              <div className="content">
                <h2>Nocturnal Hoodie</h2>
                <Link to="/shop" className="see_more">
                  <span>Shop</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="arrows">
          <ArrowLeft onClick={() => swiper.slidePrev()} />
          <ArrowRight onClick={() => swiper.slideNext()} />
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
