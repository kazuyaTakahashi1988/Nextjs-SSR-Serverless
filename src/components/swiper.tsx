import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore from "swiper"; 
import { Autoplay, Navigation } from 'swiper/modules';

SwiperCore.use([Autoplay, Navigation]);

/* -------------------------------------------------------
  ▽ 使用imageの配列 ▽
---------------------------------------------------------- */
const images = ["/lambda.png", "/logo-react.png", "/logo-wp.png", "/ogp.jpg"];

const SwiperComp = () => {
  return (
    <Swiper
      /* -------------------------------------------------------
        ▽ スワイパーオプション ▽
      ---------------------------------------------------------- */
      slidesPerView={1} // 表示スライド数
      navigation={true} // スライドナビ
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation]}
    >

      {images.map((src: string, index: number) => {
        /* -------------------------------------------------------
          ▽ DOM ▽
        ---------------------------------------------------------- */
        return (
          <SwiperSlide key={`${index}`}>
            <img src="/frame-sw.png" alt="frame" />
            <img src={src} alt="test_image" className="sw-img" />
          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};

export default SwiperComp;
