import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './feature.css'
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="featuredBg  bg-fixed py-16 ">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className=" w-8/12  mx-auto">
                <div className=" flex grid grid-cols-2 gap-6 flex items-center">
                    <img src={featuredImg} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima quis porro possimus velit ex laboriosam voluptatibus obcaecati consectetur! Incidunt nesciunt eos facilis quod assumenda eaque ipsam distinctio? Id veniam, libero saepe ducimus dignissimos neque beatae blanditiis. In, molestias fuga exercitationem, nulla eius fugit voluptate soluta ipsam dolorum sequi quibusdam.</p>

                        <button className=" btn btn-primary mt-6">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;