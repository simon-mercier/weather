import React, { useContext } from "react";
import Cloud1 from "../../../../assets/icons/cloud1.svg";
import Sun from "../../../../assets/icons/sun.svg";
import Moon from "../../../../assets/icons/moon.svg";
import TimeOfDayContext from "../../../../contexts/TimeOfDay";
import TimesOfDay from "../../../../enums/timesOfDay";
import "./WeatherIconsStyles.scss";
const Clear = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    return (
        <div style={{ position: "absolute" }} className="clear">
            <img
                className="icon-sun"
                style={{
                    position: "absolute",
                    width: "15rem",
                    top: "4rem",
                    left: "4rem",
                }}
                src={
                    timeOfDay === TimesOfDay.MORNING ||
                    timeOfDay === TimesOfDay.DAY
                        ? Sun
                        : Moon
                }
            />
            <img
                className="icon-cloud1"
                style={{
                    position: "absolute",
                    width: "10rem",
                    top: "10rem",
                    left: "0rem",
                }}
                src={Cloud1}
            />
        </div>
    );
};

export default Clear;
