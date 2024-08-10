
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(items => items.category === "popular");


    return (
        <div className=" py-6">

            <SectionTitle heading={"Check it out"} subHeading={"FROM OUR MENU"}></SectionTitle>
            <div className=" container mx-auto  grid grid-cols-2 gap-6">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className=" text-center  my-6">
                <button className=" btn btn-primary ">View full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;