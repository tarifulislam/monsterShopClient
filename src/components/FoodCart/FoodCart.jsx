
const FoodCart = ({ items }) => {
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img className=" w-full" src={items?.image} alt="Shoes" />
                <p className=" bg-black px-3 absolute right-3 top-3 text-red-100">{items?.price}</p>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;