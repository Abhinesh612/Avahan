import './carousel.css';
import dragon_1 from "../../assets/carrotate/dragon_1.jpg";
import dragon_2 from "../../assets/carrotate/dragon_2.jpg";
import dragon_3 from "../../assets/carrotate/dragon_3.jpg";
import dragon_4 from "../../assets/carrotate/dragon_4.jpg";
import dragon_5 from "../../assets/carrotate/dragon_5.jpg";
import dragon_6 from "../../assets/carrotate/dragon_6.jpg";
import dragon_7 from "../../assets/carrotate/dragon_7.jpg";
import dragon_8 from "../../assets/carrotate/dragon_8.jpg";
import dragon_9 from "../../assets/carrotate/dragon_9.jpg";
import dragon_10 from "../../assets/carrotate/dragon_10.jpg";


const CarouselRotate = () => {
    return (
        <div className="car">
            <div className="slider" style={{ '--quantity': 7 }}>
                <div className="item" style={{ '--position': 1 }}>
                    <img src={dragon_1} alt="Dragon 1" />
                </div>
                <div className="item" style={{ '--position': 2 }}>
                    <img src={dragon_2} alt="Dragon 2" />
                </div>
                <div className="item" style={{ '--position': 3 }}>
                    <img src={dragon_3} alt="Dragon 3" />
                </div>
                <div className="item" style={{ '--position': 4 }}>
                    <img src={dragon_4} alt="Dragon 4" />
                </div>
                <div className="item" style={{ '--position': 5 }}>
                    <img src={dragon_5} alt="Dragon 5" />
                </div>
                <div className="item" style={{ '--position': 6 }}>
                    <img src={dragon_6} alt="Dragon 6" />
                </div>
                <div className="item" style={{ '--position': 7 }}>
                    <img src={dragon_7} alt="Dragon 7" />
                </div>
                {/* <div className="item" style={{ '--position': 8 }}>
                    <img src={dragon_8} alt="Dragon 8" />
                </div>
                <div className="item" style={{ '--position': 9 }}>
                    <img src={dragon_9} alt="Dragon 9" />
                </div>
                <div className="item" style={{ '--position': 10 }}>
                    <img src={dragon_10} alt="Dragon 10" />
                </div> */}
            </div>
        </div>
    );
};

export default CarouselRotate;
