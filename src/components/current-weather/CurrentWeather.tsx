
import React from 'react';
import { ReactComponent as Cloud1 } from '../../assets/cloud-1.svg'
import { ReactComponent as Cloud2 } from '../../assets/cloud-2.svg'
import { ReactComponent as Cloud3 } from '../../assets/cloud-3.svg'
import { ReactComponent as Cloud4 } from '../../assets/cloud-4.svg'
import { ReactComponent as LargeCloud1 } from '../../assets/large-cloud-1.svg'
import { ReactComponent as LargeCloud2 } from '../../assets/large-cloud-2.svg'
import { ReactComponent as LargeCloud3 } from '../../assets/large-cloud-3.svg'
import { ReactComponent as LargeCloud4 } from '../../assets/large-cloud-4.svg'
import './CurrentWeather.scss';



export const PartiallyCloudy =
        <div id="partially-cloudy">
            <Cloud1 className="cloud-1"/>
            <Cloud2 className="cloud-2"/>
        </div>


export const Cloudy = 
        <div id="cloudy">
            <LargeCloud1 className="large-cloud-1" style={{width: '5vw', position: 'absolute', top:'50px', left:'50px'}} />
            <LargeCloud2 className="large-cloud-2" style={{ width: '1500px', position: 'absolute', top: '-50px', right: '-50px' }} />
            <LargeCloud3 className="large-cloud-3" style={{ width: '500px', position: 'absolute', top: '-100px', right: '-50px' }} />
            <LargeCloud4 className="large-cloud-4" style={{width: '500px', position: 'absolute', top:'100px', left:'500px'}} />
        </div>

const CurrentWeather = () => {
    return PartiallyCloudy;
}
 

export default CurrentWeather;