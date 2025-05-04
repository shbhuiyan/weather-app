import "../Styles/background.css"

const Home = () => {

    return (
        <section className="background">
            <div className="max-w-[600px] mx-auto px-3 pt-20 lg:pt-36">
                <div className=" border rounded-2xl shadow-xl backdrop-blur p-8">
                    <input type="text"
                    placeholder="Enter City Name"
                    className="py-3 px-6 w-full border rounded-xl focus:outline-none text-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;