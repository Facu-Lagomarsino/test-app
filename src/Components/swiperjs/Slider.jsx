import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = ({ slides }) => {
  return (
    <>
        <h3 style={{color: "#FFFFFF"}}>Event Galleries</h3>
        <Swiper
          modules={[ Navigation, Pagination ]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            slides.map((slide) => (
              <SwiperSlide 
                key={slide.image} 
                style={{ textAlign: "center" }}    
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  style={{ borderRadius: "12px", width: "100%" }}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
  
    </>
  );
};

export default Slider;