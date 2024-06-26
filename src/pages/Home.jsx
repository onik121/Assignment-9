import Blog from "../components/Blog";
import Properties from "../components/Properties";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto px-5">
                <Slider></Slider>
            </div>
            <Properties></Properties>
            <Blog></Blog>
        </div>
    );
};

export default Home;