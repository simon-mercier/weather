import React from "react";
import Cloud1 from "../../../../assets/icons/cloud1.svg";
import Sun from "../../../../assets/icons/sun.svg";
import "./WeatherIconsStyles.scss";
const Clear = () => {
    return (
        <div style={{ position: "absolute" }} className="clear">
            <img
                className="icon-sun"
                style={{
                    position: "absolute",
                    width: "15rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(50%, 50%)",
                }}
                src={Sun}
            />
            <img
                className="icon-cloud1"
                style={{
                    position: "absolute",
                    width: "10rem",
                    top: "0rem",
                    left: "0rem",
                }}
                src={Cloud1}
            />
        </div>
    );
};

export default Clear;
