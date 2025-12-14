import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSlider = () => {
    return (
        <div className="mb-5">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: "400px", borderRadius: "10px" }}
            >
                <SwiperSlide>
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            background: "url(https://placehold.co/1200x400/2196f3/ffffff?text=New+Arrivals) center/cover no-repeat",
                        }}
                    ></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            background: "url(https://placehold.co/1200x400/e91e63/ffffff?text=Summer+Sale) center/cover no-repeat",
                        }}
                    ></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            background: "url(https://placehold.co/1200x400/ff9800/ffffff?text=Kids+Collection) center/cover no-repeat",
                        }}
                    ></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSlider;
