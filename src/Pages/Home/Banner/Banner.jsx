import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../assets/home/01.jpg"
import banner2 from "../../../assets/home/02.jpg"
import banner3 from "../../../assets/home/03.png"
import banner4 from "../../../assets/home/04.jpg"
const Banner = () => {
    return (
        <div className="text-center">
            <Carousel>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner4} />
                    <p className="legend">Legend 1</p>
                </div>


            </Carousel>
        </div>
    );
};

export default Banner;