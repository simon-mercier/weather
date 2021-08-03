import Cloud1 from "../../../../assets/icons/cloud1.svg";
import Cloud2 from "../../../../assets/icons/cloud2.svg";
import Sun from "../../../../assets/icons/sun.svg";
import "./WeatherIconsStyles.scss";
const Tunderstorm = () => {
    return (
        <div style={{ position: "absolute" }} className="overcast">
            <img
                className="icon-cloud2"
                style={{
                    position: "absolute",
                    width: "10rem",
                    top: "7rem",
                    left: "-3rem",
                }}
                src={Cloud2}
            />
            <img
                className="icon-cloud2"
                style={{
                    position: "absolute",
                    width: "10rem",
                    top: "2rem",
                    left: "13rem",
                }}
                src={Cloud2}
            />
            <img
                className="icon-cloud1"
                style={{
                    position: "absolute",
                    width: "15rem",
                    top: "5rem",
                    left: "5rem",
                }}
                src={Cloud1}
            />
            <img
                className="icon-cloud1"
                style={{
                    position: "absolute",
                    width: "20rem",
                    top: "0rem",
                    left: "0rem",
                }}
                src={Cloud1}
            />
            <img
                className="icon-cloud2"
                style={{
                    position: "absolute",
                    width: "30rem",
                    top: "5rem",
                    left: "5rem",
                }}
                src={Cloud2}
            />
        </div>
    );
};

export default Tunderstorm;
