// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Image Import
import slideImg1 from '../../assets/slide1.jpg';
import slideImg2 from '../../assets/slide2.jpg';
import slideImg3 from '../../assets/slide3.jpg';
import slideImg4 from '../../assets/slide4.jpg';
import slideImg5 from '../../assets/slide5.jpg';
import slideImg6 from '../../assets/slide6.jpg';

const Slider = () => {

    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper z-10"
            >
                <SwiperSlide><img src={slideImg1} /></SwiperSlide>
                <SwiperSlide><img src={slideImg2} /></SwiperSlide>
                <SwiperSlide><img src={slideImg3} /></SwiperSlide>
                <SwiperSlide><img src={slideImg4} /></SwiperSlide>
                <SwiperSlide><img src={slideImg5} /></SwiperSlide>
                <SwiperSlide><img src={slideImg6} /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;