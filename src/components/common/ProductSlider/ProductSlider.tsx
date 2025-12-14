import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TProduct } from "@types";
import { Product } from "@components/eCommerce";

type ProductSliderProps = {
    products: TProduct[];
};

const ProductSlider = ({ products }: ProductSliderProps) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper p-3"
            style={{ paddingBottom: "3rem" }}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <Product {...product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSlider;
