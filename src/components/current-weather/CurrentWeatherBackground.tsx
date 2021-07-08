
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



export const PartiallyCloudy =
    <div id="partially-cloudy">
        <img className="sun-1" src={Sun1} alt="sun"/>
        <img className="large-cloud-1" src={LargeCloud1} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(50), ...translate(TranslationDirection.LEFT, 35, 4000) }}/>
        <img className="large-cloud-2" src={LargeCloud2} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(55), ...translate(TranslationDirection.LEFT, 35, 3500) }}/>
        <img className="large-cloud-3" src={LargeCloud3} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(65), ...translate(TranslationDirection.LEFT, 35, 3750) }}/>
        <img className="large-cloud-4" src={LargeCloud4} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(0, 20), ...opacity(70), ...translate(TranslationDirection.LEFT, 35, 3000) }}/> 
        <img className="cloud-1" src={Cloud1} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(80, 65), ...opacity(80), ...translate(TranslationDirection.LEFT, 35, 600) }}/>
        <img className="cloud-2" src={Cloud2} alt="cloud" style={{ ...randomStartPosition, ...randomHeight(-10, 10), ...opacity(90), ...translate(TranslationDirection.RIGHT, 35, 500) }}/>
    </div>


export const Cloudy = 
        <div id="cloudy">
            <img className="large-cloud-1" src={LargeCloud1} alt="cloud" />
            <img className="large-cloud-2" src={LargeCloud2} alt="cloud" />
            <img className="large-cloud-3" src={LargeCloud3} alt="cloud" />
            <img className="large-cloud-4" src={LargeCloud4} alt="cloud" /> 
        </div>

const CurrentWeatherBackground = () => {
    return PartiallyCloudy;
}
 

export default CurrentWeatherBackground;