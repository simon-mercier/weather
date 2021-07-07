
import React from 'react';
import Sun1  from '../../assets/svg/sun-1.svg'
import Cloud1 from '../../assets/svg/cloud-1.svg'
import Cloud2 from '../../assets/svg/cloud-2.svg'
import Cloud3 from '../../assets/svg/cloud-3.svg'
import Cloud4 from '../../assets/svg/cloud-4.svg'
import LargeCloud1 from '../../assets/svg/large-cloud-1.svg'
import LargeCloud2 from '../../assets/svg/large-cloud-2.svg'
import LargeCloud3 from '../../assets/svg/large-cloud-3.svg'
import LargeCloud4 from '../../assets/svg/large-cloud-4.svg'
import './CurrentWeather.scss';



export const PartiallyCloudy =
    <div id="partially-cloudy">
        <img className="sun-1" src={Sun1} alt="sun" />
        <img className="large-cloud-1" src={LargeCloud1} alt="cloud" />
        <img className="large-cloud-2" src={LargeCloud2} alt="cloud" />
        <img className="large-cloud-3" src={LargeCloud3} alt="cloud" />
        <img className="large-cloud-4" src={LargeCloud4} alt="cloud" /> 
        <img className="cloud-1" src={Cloud1} alt="cloud" />
        <img className="cloud-2" src={Cloud2} alt="cloud" />
        
    </div>


// export const Cloudy = 
//         <div id="cloudy">
//             <LargeCloud1 className="large-cloud-1" style={{width: '5vw', position: 'absolute', top:'50px', left:'50px'}} />
//             <LargeCloud2 className="large-cloud-2" style={{ width: '1500px', position: 'absolute', top: '-50px', right: '-50px' }} />
//             <LargeCloud3 className="large-cloud-3" style={{ width: '500px', position: 'absolute', top: '-100px', right: '-50px' }} />
//             <LargeCloud4 className="large-cloud-4" style={{width: '500px', position: 'absolute', top:'100px', left:'500px'}} />
//         </div>

const CurrentWeather = () => {
    return PartiallyCloudy;
}
 

export default CurrentWeather;