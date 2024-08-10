import Cover from "../Shared/Cover/Cover";
import coverPhoto from "../../assets/shop/banner2.jpg"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCart from "../../components/FoodCart/FoodCart";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();



    const dessert = menu.filter(items => items.category === "dessert");
    const pizza = menu.filter(items => items.category === "pizza");
    const salad = menu.filter(items => items.category === "salad");
    const drinks = menu.filter(items => items.category === "drinks");
    const offered = menu.filter(items => items.category === "offered");
    const soup = menu.filter(items => items.category === "soup");



    return (
        <div className="">
            <Cover img={coverPhoto} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;