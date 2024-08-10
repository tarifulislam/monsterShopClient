import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=" my-20">
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=" flex flex-col items-center text-center  mx-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            <p>{review?.details}</p>
                            <h2>{review?.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;