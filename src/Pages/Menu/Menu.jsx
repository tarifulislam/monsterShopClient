

import offeredImg from "../../assets/menu/salad-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import drinksImg from "../../assets/menu/menu-bg.png"
import soupImg from "../../assets/menu/soup-bg.jpg"

import useMenu from "../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(items => items.category === "dessert");
    const pizza = menu.filter(items => items.category === "pizza");
    const salad = menu.filter(items => items.category === "salad");
    const drinks = menu.filter(items => items.category === "drinks");
    const offered = menu.filter(items => items.category === "offered");
    const soup = menu.filter(items => items.category === "soup");

    return (
        <div>
            <SectionTitle heading={"Todays Offers"} subHeading={"don,t miss"}></SectionTitle>
            <MenuCategory items={offered} img={offeredImg} title={"Our Menu"}></MenuCategory>
            <MenuCategory items={dessert} img={dessertImg} title={"dessert"}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;