
const MenuItem = ({ item }) => {

    // const { name, image, price, recipe } = item;
    return (

        <div className=" w-full flex  space-x-6">
            <img className=" w-2/12 rounded-b-full rounded-l-full" src={item?.image} alt="" />
            <div className=" w-8/12">
                <h3>{item?.name}</h3>
                <p>{item?.recipe}</p>
            </div>
            <p className=" w-2/12">{item?.price}</p>
        </div>


    );
};

export default MenuItem;