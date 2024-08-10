import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import imgCat1 from "../../../assets/home/slide1.jpg"
import imgCat2 from "../../../assets/home/slide2.jpg"
import imgCat3 from "../../../assets/home/slide3.jpg"
import imgCat4 from "../../../assets/home/slide4.jpg"
import imgCat5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div className=' pb-9'>
            <div>
                <SectionTitle heading="ORDER ONLINE" subHeading="From 11:00 am to 10:00 pm"></SectionTitle>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className=' w-full' src={imgCat1} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' w-full' src={imgCat2} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' w-full' src={imgCat3} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' w-full' src={imgCat4} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' w-full' src={imgCat5} alt="" />
                    <h3 className=' text-4xl uppercase text-center -mt-16'>Salad</h3>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Category;