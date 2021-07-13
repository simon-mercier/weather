import "./App.scss";
import Location from "./components/current-weather/location/Location";
import "./components/navbar/Navbar.tsx";
import { TimesOfDay } from "./enums/timesOfDay";
import styled from "styled-components";

const timeOfDay2Gradient = new Map<TimesOfDay, [string, string]>([
    [TimesOfDay.DAY, ["#a6c1d2", "#11b5d2"]],
    [TimesOfDay.EVENING, ["#11b5d2", "#e19d32"]],
    [TimesOfDay.DUSK, ["#11b5d2", "#f66657"]],
    [TimesOfDay.DAWN, ["#e19d32", "#f66657"]],
]);
interface TimeOfDayProps {
    timeOfDay: TimesOfDay;
}

export const TimeOfDay = styled.div`
    background-image: linear-gradient(
        ${(props: TimeOfDayProps) =>
            (timeOfDay2Gradient.get(props.timeOfDay) as string[])[0]},
        ${(props: TimeOfDayProps) =>
            (timeOfDay2Gradient.get(props.timeOfDay) as string[])[1]}
    );
    height: 100vh;
`;

function App() {
    return (
        <TimeOfDay timeOfDay={TimesOfDay.DUSK}>
            <Location></Location>
        </TimeOfDay>
    );
}

export default App;
