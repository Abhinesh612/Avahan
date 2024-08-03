import Banner from "./utils/Banner";
import CarouselRotate from "./utils/CarouselRotate";
import './home.css'

function Home() {
    return (
        <>
            <div className="parallex">
                <Banner />
                <div className="wrapper">
                    <CarouselRotate />
                    <div className="below-banner-2"></div>
                </div>
            </div>
        </>
    );
}

export default Home;