
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=" text-center w-3/12 mx-auto py-6">
            <h4 className=" text-yellow-600 mb-2">--{subHeading}--</h4>
            <h2 className=" text-4xl  font-semibold uppercase border-t-2 border-b-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;