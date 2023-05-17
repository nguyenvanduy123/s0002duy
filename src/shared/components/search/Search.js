import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../dropdown/Dropdown';
import InputSeach from '../inputseach/InputSeach';
// import Notification from '../Notification/Notification';

import seach from "./Search.module.scss"
import Popover from '../popover/Popover';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function Search(props)
{
    const {reacode , onchangeSearch , Optionstatus,Optionsaddress 
        , ValueStatus,ValueAddress,ValueSearch,resetitem,btnsearch,
        idsa,idstatus,idaddress,valuesearch,onchangeStatus} = props
        
  
    const {titel_chitiet} = props;
 
   
    const [Optionss, setOptionss] = useState([
        {value:1,title:"Giao dịch"},
        {value:2,title:"Tạm dừng"}
    ])
    let location = useLocation();
    // const [ValueStatus, setValueStatus] = useState(false);
    // const [ValueAddress, setValueAddress] = useState(false);
    // const [ValueSearch, setValueSearch] = useState(false);
    const [isChangeData, setisChangeData] = useState(false);
    const [issetvalue, setissetvakue] = useState({})
    
   
    // const popRef = useRef()
   

    
    
    if(titel_chitiet == undefined ){
    return (
        <div className={`${seach["Search"]} ${seach["stand_radius"]}`} id={seach['search']} >
            {/* <div className={seach['search_item_btn']}> */}
            <div className={seach['inputs_']}>
                <InputSeach className={`${seach["search_input"]} ${seach["inputs_item"]}`}
                    placeholder={"Tìm kiếm mã NCC, tên NCC, email, "} id={idsa} name={idsa}
                    onChange={onchangeSearch}
                    value={valuesearch?valuesearch.Name:""}
                   
                />
                <Dropdown className={`${seach["_select_input"]} ${seach["inputs_item"]}`} placeholder={"Trạng thái "} 
                id={idstatus} name={idstatus}
                    Options={Optionstatus}
                    onChange={(e)=>{onchangeSearch(e,'status')}}
                    value={valuesearch?valuesearch.status:""}
                    isHover={true}
                    icon={"images/icon-statuscenter.svg"}
                />

                <Dropdown className={`${seach["_select_input"]} ${seach["inputs_item"]}`} 
                placeholder={"Địa chỉ "} id={idaddress} name={idaddress}
                    Options={Optionsaddress}
                    onChange={(e)=>{onchangeSearch(e,'address')}}
                    value={valuesearch?valuesearch.provin:""}
                    isHover={true}
                    icon={"images/icon-statuscenter.svg"}
                />
            </div>

            <div className={seach["action_btn"]}>
                <button className={seach['btn-setup-reset']}
                onClick={()=>{
                    resetitem();
                }}>
                    Thiết lập lại</button>
                <button className={seach['btn-setup-seach']}
                onClick={()=>{
                    btnsearch();
                }}>Tìm kiếm</button>
                <button className={seach['btn-setting']}>
                    <img src='images/icon-caidat.svg' className={seach['icon_btn-setting']} />
                </button>

                <button className={seach["btn-seedetail"]}>
                    <img src='images/icon-xemchitiet.svg' className={seach["icon_btn-seedetail"]} />
                </button>
            </div>
            {/* </div> */}
        </div>
    )
}else{
    return <div className={`${seach["Search"]} ${seach["stand_radius"]}`}  id={seach["search_chitiet"]} >
            <div className={seach['inputs_chitiet']}>
                <Popover
                title={""}
                body={
                    <div className={seach['btn-chitiet']} style={{display:"flex",flexDirection:"column"}}>
                        {Optionss && Optionss.map((item,idel)=>{
                            let textAlign = item.value===1? seach["text-success"] : seach["text-danger"] ;
                            return <button className={seach['btn-status-chitiet']} onClick={() =>
                                {
                                    onchangeStatus(item.value)
                                }}>
                                <span className={textAlign}>{item.title}</span>

                            </button>
                            
                        })}

                    </div>
                }
                style={{width: "95px",height: "auto",}}
                >
                    <button className={seach['btn-reset-chitiet']}>
                        <img src='images/icon_change.svg' className={seach['icon_']} style={{ width: "24px", height: "24px" }} />
                        <span className=''>Trạng Thái</span>
                    </button>
                    
                </Popover>
            </div>
        </div>
}
}


export default Search;