import FoodCart from "../../../components/FoodCart/FoodCart";

const OrderTab = ({ items }) => {
    return (
        <div className=" grid grid-cols-3 gap-6">
            {
                items.map(item => <FoodCart key={item._id} items={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;