
import React from 'react';
import './CurrentWeatherBackground.scss';
import Sun1  from '../../assets/svg/sun-1.svg'
import Cloud1 from '../../assets/svg/cloud-1.svg'
import Cloud2 from '../../assets/svg/cloud-2.svg'
import Cloud3 from '../../assets/svg/cloud-3.svg'
import Cloud4 from '../../assets/svg/cloud-4.svg'
import LargeCloud1 from '../../assets/svg/large-cloud-1.svg'
import LargeCloud2 from '../../assets/svg/large-cloud-2.svg'
import LargeCloud3 from '../../assets/svg/large-cloud-3.svg'
import LargeCloud4 from '../../assets/svg/large-cloud-4.svg'
import { opacity, randomHeight, randomStartPosition, translate, TranslationDirection } from './CurrentWeatherBackgroundStyles';
import { WeatherType } from '../../enums/weatherType';



const PartiallyCloudy =
    <div id="partially-cloudy">
        <img className="sun-1" src={Sun1} alt="sun"/>
        <img className="large-cloud-1" src={LargeCloud1} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(50), ...translate(TranslationDirection.LEFT, 15, 3250) }}/>
        <img className="large-cloud-2" src={LargeCloud2} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(55), ...translate(TranslationDirection.LEFT, 15, 3500) }}/>
        <img className="large-cloud-3" src={LargeCloud3} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(65), ...translate(TranslationDirection.LEFT, 20, 3000) }}/>
        <img className="large-cloud-4" src={LargeCloud4} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(70), ...translate(TranslationDirection.LEFT, 15, 2000) }}/> 
        <img className="cloud-1 cloud-gradien" src={Cloud1} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(80, 65), ...opacity(80), ...translate(TranslationDirection.LEFT, 35, 600) }}/>
        <img className="cloud-2" src={Cloud2} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(-10, 10), ...opacity(90), ...translate(TranslationDirection.RIGHT, 35, 500) }}/>
    </div>


const Cloudy = 
        <div id="cloudy">
            <img className="large-cloud-1" src={LargeCloud1} alt="cloud" />
            <img className="large-cloud-2" src={LargeCloud2} alt="cloud" />
            <img className="large-cloud-3" src={LargeCloud3} alt="cloud" />
            <img className="large-cloud-4" src={LargeCloud4} alt="cloud" /> 
    </div>

const Clear =
    <div id="clear">
        <img className="sun-1" src={Sun1} alt="sun"/>
    </div>

const Overcast =
    <div id="overcast">
        <img className="sun-1" src={Sun1} alt="sun"/>
    </div>
    
const Rain =
    <div id="rain">
        <img className="sun-1" src={Sun1} alt="sun"/>
    </div>

const Drizzle =
    <div id="drizzle">
        <img className="sun-1" src={Sun1} alt="sun"/>
    </div>

const Snow =
    <div id="snow">
        <img className="sun-1" src={Sun1} alt="sun"/>
    </div>

const Thunderstorm =
    <div id="clear">
        <img className="sun-1" src={Sun1} alt="sun"/>
    </div>

const watherConditionMap: Map<WeatherType, JSX.Element> = new Map<WeatherType, JSX.Element>([[WeatherType.CLEAR, Clear], [WeatherType.PARTIALLY_CLOUDY, PartiallyCloudy], [WeatherType.CLOUDY, Cloudy], [WeatherType.DRIZZLE, Drizzle], [WeatherType.OVERCAST, Overcast], [WeatherType.SNOW, Snow], [WeatherType.TUNDERSTORM, Thunderstorm], ]);

const CurrentWeatherBackground = () => {
    return watherConditionMap.get(WeatherType.PARTIALLY_CLOUDY) as JSX.Element;
}
 

export default CurrentWeatherBackground;