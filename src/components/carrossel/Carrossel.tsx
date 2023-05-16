// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
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

                <SwiperSlide>
                    <img src="https://revista.sociedadedamesa.com.br/wp-content/uploads/2020/12/sociedade_da_mesa_vinhos_clube_de_vinhos_revista_digital_vinho_tinto_saiba_como_harmonizar.jpg" alt="Imagem" />
                </SwiperSlide>

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