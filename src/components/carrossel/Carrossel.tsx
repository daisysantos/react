import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrossel.css";
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                        delay:5000,
                        disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {/* <SwiperSlide>
                    <img src="https://st.depositphotos.com/1258191/4122/i/450/depositphotos_41229993-stock-photo-wineglass-and-bottle-still-life.jpg" alt="Imagem" />
                </SwiperSlide> */}

                <SwiperSlide>
                    <img src="https://i.pinimg.com/originals/74/9b/43/749b4369d00b455aa19c01f8393b4c73.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://soubh.uai.com.br/uploads/post/image/12543/main_Bacalhau-com-vinho-branco.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://blog.supernosso.com/wp-content/uploads/2022/09/vinhosfrutados-1-1200x900.webp" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel