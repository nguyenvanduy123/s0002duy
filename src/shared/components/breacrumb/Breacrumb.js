import React from 'react';
import Breacrumb from './Breacrumb.module.scss';
import { Link } from 'react-router-dom';
function Brearumb(props)
{
    const {pathtile , pathps} = props;


    return (
        <div className={Breacrumb["breacrumb"]} id={Breacrumb["breacrumb"]}>
            {pathtile && pathtile.map((item, index) =>
            {
                var icon = '';
                if(index==0 || index==1){
                    
                        icon = "images/icon-right.svg";
                   
                }else{
                    icon ="";
                }
                    return <div key={index} className={`${Breacrumb["item_"]} ${Breacrumb["titel-breabum"]}`}>
                    <Link to={pathps[index]}>{item}</Link>
                    <img src={icon} className={Breacrumb["icon_"]} />
                    
                </div>
                
                

            })}
        </div>
    )
}


export default Brearumb;