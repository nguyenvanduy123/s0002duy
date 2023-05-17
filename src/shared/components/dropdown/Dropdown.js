import React, { useState, useEffect, useRef } from 'react';
import dropdow from "./Dropdown.module.scss";
function Dropdown(props)
{

    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()
    const timeoutRef = useRef(null);

    const { Options, value, id, placeholder, onChange, isHover, icon, top } = props;
   
    
    const [isTitle, setIsTitle] = useState("");
    const [heightDropdown, setHeightDropdown] = useState("");
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() =>
    {
        const pop = popRef.current;
        const Optionslen = Options.length;
        setHeightDropdown(Optionslen * 10);

        setPosition({ top: pop.offsetHeight, bottom: 0, left: 0, right: 0 })
    }, []);
    useEffect(() =>
    {
        if (!isHovering) {
            setIsClick(isHovering);
        }
        if (isHover && isHovering) {
            setIsClick(isHovering);
        }
    }, [isHovering]);
    const handleMouseEnter = () =>
    {
        clearTimeout(timeoutRef.current);
        setIsHovering(true);
    };

    const handleMouseLeave = () =>
    {
        timeoutRef.current = setTimeout(() => setIsHovering(false), 200);
    };

    return (
        <div
            className={` ${dropdow["Dropdown"]}  ${props.className ?? ""}`}
            id={dropdow["dropdown"]}
            style={{ ...props?.style ?? "" }}
            onClick={() => { setIsClick(!isClick) }}
            ref={popRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className={`${dropdow["inputs_item"]}`} >
                <div className={` ${dropdow["icon_float"]} ${isClick ? dropdow["is_change"] : ""}`}><img src={icon} className={dropdow['icon_drop']} /></div>
                <input className={`${dropdow["input_item"]}`} id={id ?? ""} name={props.name ?? ""} placeholder={placeholder ?? ""}
                    value={value ?? ""} 
                    autoComplete={("off").toString()} onChange={() => { }} />
            </div>
            <div className={` ${dropdow["dropdown_body"]} ${dropdow["stand_radius"]} ${props.classNameBody ?? ""} ${isClick ? dropdow["show"] : ""}`}
                style={{

                    top: !top ? Position.top : top,
                    
                }}>

                <ul>
                    {Options && Options.map((item, index) =>
                    {
                        return <li className={dropdow["stand_input"]} key={index} onClick={() => { setIsTitle(item); onChange(item) }} >{item.text}</li>
                    })}


                </ul>
            </div>
        </div>
    )
}


export default Dropdown;