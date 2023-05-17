import React, { useState ,useEffect,useRef} from "react";
import dropdownitem from "./FromItemDropdown.module.scss";
import { logDOM } from "@testing-library/react";

function DropdownItem(props) {
    // const [Position, setPosition] = useState({ top:"213px", bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    
    const { Options, value, id, placeholder, onChange, isHover, icon, top ,title , valide,children } = props;
   
   
    const [isTitle, setIsTitle] = useState("");
   
    const [heightDropdown, setHeightDropdown] = useState("");
    const [Valueset , setValue ] = useState("");
    const popRef = useRef()
   
//  const change =((e,ty)=>{
  
//    if(e.target && ty!=""){
//         setValue(e.target.value)
//    }else{
//     setValue(ty)
//    }
  
        
    
//  })
    return <div className={dropdownitem["dropitem-input"]}>
            <div className={dropdownitem["inputitem-stand-drop"]}>
                        <span className={dropdownitem["text-item-danhmuc"]}>{title}</span>
                        <span className={dropdownitem["valide-danhmuc"]}>{valide}</span>
                </div>
    <div className={`${dropdownitem["Dropdownitem"]}  ${props.className ?? ""}`}
        id={dropdownitem['dropdown-item']}
        style={{ ...props?.style ?? "" }}
        ref={popRef}
        onClick={() => { setIsClick(!isClick) }}>
        <div className={`${dropdownitem["inputs_item-drop"]} ${dropdownitem["stand_input-item"]}`}>
            <div className={`${dropdownitem["icon_float-drop"]} ${isClick ? dropdownitem["is_change-drop"] : ""}`}>{icon}</div>
            <input className={`${dropdownitem["reset_input-drop"]} ${dropdownitem["input_item-drop"]}`} id={id ?? ""} name={props.name ?? ""} placeholder={placeholder ?? ""}
                value={value ??""}
                autoComplete={("on").toString()} onChange={() => { 
                  

                }} />
        </div>
        <div className={`${dropdownitem["dropdown_body-item"]} ${dropdownitem["stand_radius"]} ${props.classNameBody ?? ""} ${isClick ? dropdownitem["show-drop"] : ""}`}
            style={{top: top}}>

            <ul>
                {Options && Options.map((item, index) => {
                    
                    return <li className={dropdownitem['stand_input']} key={index} onClick={() => { setIsTitle(item); onChange(item) }} >{item.name}</li>
                })}


            </ul>
        </div>
    </div>
    </div>
}
export default DropdownItem