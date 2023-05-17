import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../dropdown/Dropdown';
import InputSeach from '../inputseach/InputSeach';

import gagin from "./Pagination.module.scss"
function Pagination(props)
{

    const { value, ValueSelectLimit, id, placeholder, onChange, isHover, icon, top, style, OnChangeSelectNumPages, ShowStatus, CurrentPage, TotalRecord } = props;

    const [ValueSelect, setValueSelect] = useState({});
    const [Statuspage, setStatuspage] = useState("Hiển thị từ - trên tổng");
    const [Options, setOptions] = useState(
        [{value:10,text:"10"},
         {value:30,text:"30"},
         {value:50,text:"50"},
        ]
    )
    useEffect(() =>
    {
        setValueSelect(ValueSelectLimit)
    }, [ValueSelectLimit]);

    const onchangeStatus = (e) =>
    {

        setValueSelect(e)
        OnChangeSelectNumPages(e)
    }
    useEffect(() =>
    {

        setValueSelect(ValueSelectLimit)
        setShowStatus()

    }, []);


    useEffect(() =>
    {

        setShowStatus()

    }, [ValueSelect]);
    useEffect(() =>
    {

        setShowStatus()

    }, [ValueSelectLimit, CurrentPage]);


    const setShowStatus = () =>
    {
        const start = ((CurrentPage - 1) * ValueSelect.value) + 1;
        const end = (CurrentPage * (ValueSelect.value));
        setStatuspage(`Hiển thị từ ${start ?? ""} - ${end} trên tổng ${TotalRecord ?? ""}`)
    }
    return (
        <div className={`Pagination stand_radius`} id={gagin['pagination']} style={{ ...style }}>
            <div className={gagin['chose_row_show']}>
                <span style={{ marginRight: "10px" }}>Hiển thị</span>
                <Dropdown className={gagin["_select_input"]} placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={onchangeStatus}
                    value={ValueSelect.value}
                    isHover={true}
                    style={{
                        height: "24px",
                        width: "65px",
                        padding: 0
                    }}
                    icon={"images/icon-pagi.svg"
                    }
                />
            </div>
            {ShowStatus && <div className={gagin['_show_detail']}>
                <span style={{ marginRight: "10px" }}>{Statuspage}</span>

            </div>
            }
            <div className={gagin['pagination_wrrap']}>
                
                <ButtonPage {...props} limit={ValueSelect.value} />


            </div>
        </div>
    )
}

function ButtonPage(props)
{
    const { TotalRecord, CurrentPage, OnclickButtonChangePage, OnclickButtonNext, OnclickButtonPre, limit, LimitButton } = props;
    const renders = [];
    let totalVisiblePages = LimitButton
  
    let TotalPage = Math.ceil((TotalRecord / limit))
   
    let startPage = Math.max(1, CurrentPage - Math.floor(totalVisiblePages / 2));
    
    let endPage = Math.min(TotalPage, startPage + totalVisiblePages - 1);
   
    if (endPage - startPage < totalVisiblePages - 1) {
        startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }
    if (TotalPage) {

        for (let i = startPage; i <= endPage; i++) {

            renders.push(<button className={`reset_btn ${gagin["item"]} item_left ${CurrentPage == i ? gagin["active"] : ""}`}
                onClick={(e) => OnclickButtonChangePage(e, i)}
            >
                {i}
            </button>)
        }


    }
    return (<>
        <button className={`reset_btn ${gagin["item"]} item_left`} onClick={(e) => { OnclickButtonPre(e, CurrentPage <= 1 ? 1 : CurrentPage - 1) }}>
            <img src='images/icon-pagi1.svg' className='icon_' style={{
                width: "24px", height: "24px"
            }} />
        </button>
        {renders.map((item, index) =>
        {
            return <div key={index}>{item}</div>

        })}
        <button className={`reset_btn ${gagin["item"]} item_right`} onClick={(e) => OnclickButtonNext(e, CurrentPage >= TotalPage ? TotalPage : CurrentPage + 1)}>
            <img src='images/icon-pagi2.svg' className='icon_' style={{
                width: "24px", height: "24px"
            }} />
        </button>
    </>

    )


}

export default Pagination;