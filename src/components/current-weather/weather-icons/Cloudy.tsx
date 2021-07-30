import React from "react";

import Cloud1 from "../../../assets/icons/cloud1.svg";
import Cloud2 from "../../../assets/icons/cloud2.svg";
import Sun from "../../../assets/icons/sun.svg";
import "./WeatherIconsStyles.scss";

const Cloudy = () => {
    return (
        <div style={{ position: "absolute" }} className="cloudy">
            <img
                style={{
                    position: "absolute",
                    width: "15rem",
                    top: "-5rem",
                    left: "0",
                }}
                src={Sun}
            />
            <img
                style={{
                    position: "absolute",
                    width: "20rem",
                    top: "0rem",
                    left: "-5rem",
                }}
                src={Cloud1}
            />

            <img
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

export default Cloudy;
