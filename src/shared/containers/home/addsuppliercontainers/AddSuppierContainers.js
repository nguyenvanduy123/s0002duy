import React, { useEffect, useState } from "react";
import addfromcontai from "./AddSuppierContainers.module.scss";
import FormAdd from "shared/components/formadd/FromAdd";
import ItemInput from "shared/components/Iteminput/ItemInput";
import Dropdown from "shared/components/dropdown/Dropdown";
import DropdownItem from "shared/components/fromitemdropdown/FromItemDropdown";
import Footer from "shared/components/footer/Footer";
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SupplierAction from "redux/supplier/action";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Provideraction from "redux/province/action"
  import Province from 'App';
import { DateSchema } from "yup";

function AddsupplierContainer(props) {
    let history = useHistory();
    let location = useLocation();
    const [Options, setOptionsDM] = useState([
        { value: "Danh mục 1", name: "Danh mục 1" },
        { value: "Danh mục 2", name: "Danh mục 2" },
        { value: "Danh mục 3", name: "Danh mục 3" },
        { value: "Danh mục 4", name: "Danh mục 4" },
        { value: "Danh mục 5", name: "Danh mục 5" },
    ])
    const [OptionsCN, setOptionsCN] = useState([
        { value: "Danh mục 1", name: "Danh mục 1" },
        { value: "Danh mục 2", name: "Danh mục 2" },
        { value: "Danh mục 3", name: "Danh mục 3" },
        { value: "Danh mục 4", name: "Danh mục 4" },
        { value: "Danh mục 5", name: "Danh mục 5" },
    ])
    const [Optionsstatus, setOptionsstatus] = useState([
        { value: 1, name: "Giao dịch" },
        { value: 2, name: "Tạm dừng" },

    ]);
    ////dữ liệu api thành phố
     const { data} = useSelector(state => state.Province.provinceData);
    
     const [Optionsprovice, setOptionsprovice] = useState([]);
    
    const dispatch = useDispatch();
    let { id } = useParams();
    const [recotdata, setrecotdata] = useState({});

    let recotda = history.location.state

///gét dữ liệu api tỉnh thành
useEffect(()=>{
  
        dispatch({
            type: Provideraction.FETCH_GET_PROVINCE,
            payload: {
                data: {}
            }
        })
},[])

useEffect(() =>
{
    if(Array.isArray(data)){
        setOptionsprovice(data)
        for(let v in data){
            if(data[v].name==data){
                setrecotdata(data[v])
            }
        }
    }
}, [data])

    useEffect(() => {

        if (recotda) {
            setrecotdata(recotda);
        }
    }, []);
    const chaneChangeText = (e, tyle = "") => {

        if (e.target) {
          
            let name = e.target.name;
            let value = e.target.value;
            setrecotdata({ ...recotdata, [name]: value })
           
        } else {
            if (tyle) {
                setrecotdata({ ...recotdata, [tyle]: e.value })
            }
        }
    }
    const getstatustext = (e) => {

        if (!e) {
            return;
        }
        return (Optionsstatus.filter(item => {

            return e === item.value

        }))
    }
    const setsave = (e) => {
       
       if(e.Name  && e.cate && e.codeCN && e.distri && e.email && e.phone && e.provin  && e.war){
        if(id){
            console.log(e);
           dispatch({
                type: SupplierAction.FETCH_UPDATE_DATA,
                payload: {
                    data: e
                }
            })
        }else{
            dispatch({
                type: SupplierAction.FETCH_ADD_DATA,
                payload: {
                    data: e
                }
            })
        }
        
        
            
            toast.success(
                "Hoàn Tác Thêm mới",{position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick:true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",});
                setTimeout(() => {
                    history.push("/nhacungcap");
                 }, 5000);  
            
      
       }else {
    
        
        toast.warning("Thêm mới thất bại!",{})
       }
       
    }



    const { handleSubmit, formState: { errors }, control } = useForm({});
    const onSubmit = (data) => {

    }

    return <div className={addfromcontai["addsupplier-containers"]}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer ></ToastContainer>
            <FormAdd title={<span>Thông Tin Nhà Cung Cấp</span>}>
                <div className={addfromcontai["fromaddsupplier"]}>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <ItemInput
                                        title="Tên nhà cung cấp"
                                        valide="*"
                                        name="Name"
                                        id="Name"
                                        className="item-tenncc"
                                        placeholder="Nhập tên nhà cung cấp"
                                        value={recotdata ? recotdata.Name ?? '':''}

                                        onChange={(e) => {
                                            chaneChangeText(e, 'Name');
                                                onChange(
                                                    e.target.value
                                                );
                                        }}
                                        
                                        style={{
                                            
                                            border:recotdata.Name ? "": errors.Name
                                                ? '1px solid #FF3434'
                                                : '1px solid #ACACAC',
                                        }}
                                    />
                                );
                                
                            }}
                            name="Name"
                            
                        />
                           
                           
                                 {recotdata.Name ? "":errors.Name && (
                                    <span className={addfromcontai['_notedtt']}>
                                        *Không được để trống
                                    </span>
                                )
                                 
                            }
                     
                        
                       
                   

                    </div>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                        <DropdownItem placeholder={"Danh mục"} id="cate" name="cate"
                            Options={OptionsCN}
                            title="Danh Mục"
                            valide="*"
                            top="199px"
                            icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                            value={recotdata ? recotdata.cate ?? '':''}
                            onChange={(e) => {chaneChangeText(e, "cate");onChange(e.value);}
                        }
                        style={{
                            border: recotdata.cate ?"":errors.cate
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                        >

                            <span>{recotdata.cate ?? "Danh Mục"}</span>
                        </DropdownItem>
                         );
                        }}
                        name="cate"
                    />

                    {recotdata.cate ?"":errors.cate && (
                        <span className={addfromcontai['_notedtt']}>
                            *Không được để trống
                        </span>
                    )}
                    </div>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                        <ItemInput
                        title="Số điện thoại"
                        valide="*"
                        name="phone"
                        className="item-tenncc"
                        placeholder="Nhập số điện thoại"
                        value={recotdata.phone}
                        onChange={(e) => {chaneChangeText(e, "phone"),onChange(
                            e.target.value
                        )}}
                        style={{
                            border: recotdata.phone?"":errors.phone
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                    />
                    );
                }}
                name="phone"
            />

            {recotdata.phone?"":errors.phone && (
                <span className={addfromcontai['_notedtt']}>
                    *Không được để trống
                </span>
            )}
                    </div>
                </div>
                <div className={addfromcontai["fromaddsupplier"]}>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                        <ItemInput
                            title="Mã code"
                            valide="*"
                            name="code"
                            className="item-tenncc"
                            placeholder="abc@gmail.com"
                            value={recotdata.code}
                       
                            onChange={(e) => {chaneChangeText(e, "code"),
                            onChange(
                                e.target.value,
                            );

                        }}
                        style={{
                            border: recotdata.code?"": errors.cate
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                           
                        ></ItemInput>
                        );
                    }}
                    name="code"
                />

                {recotdata.code?"":errors.code && (
                    <span className={addfromcontai['_notedtt']}>
                        *Không được để trống
                    </span>
                )}
                    </div>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                    <DropdownItem placeholder={"Nhập mã công nợ"} id="codeCN" name="codeCN"
                        Options={OptionsCN}
                        title="Công nợ"
                        valide="*"
                        top="278px"
                        icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                        value={recotdata.codeCN}
                        onChange={(e) => {chaneChangeText(e, "codeCN"),
                        onChange(e.value,)}}
                        style={{
                            border: recotdata.codeCN?"":errors.cate
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                           
                    ></DropdownItem>
                    );
                    }}
                    name="codeCN"
                />

                {recotdata.codeCN?"":errors.codeCN && (
                    <span className={addfromcontai['_notedtt']}>
                        *Không được để trống
                    </span>
                )}
                    </div>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                    <ItemInput
                        title="Email"
                        valide="*"
                        name="email"
                        className="item-tenncc"
                        placeholder="abc@gmail.com"
                        value={recotdata.email}
                        onChange={(e) => {chaneChangeText(e, "email"),onChange(e.target.value,)}}
                        style={{
                            border: recotdata.email?"":errors.email
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                           
                    ></ItemInput>
                    );
                }}
                name="email"
            />

            {recotdata.email?"":errors.email && (
                <span className={addfromcontai['_notedtt']}>
                    *Không được để trống
                </span>
            )}
                    </div>
                </div>
                <div className={addfromcontai["fromaddsupplier"]}>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                    <DropdownItem placeholder={"Tỉnh/ Thành phố"} id="provin" name="provin"
                        Options={OptionsCN}
                        title="Tỉnh/ Thành phố"
                        valide="*"
                        top="363px"
                        icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                        value={recotdata.provin}
                        onChange={(e) => {chaneChangeText(e, "provin"),
                        onChange(e.value,)}}
                        style={{
                            border:recotdata.provin?"": errors.provin
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                        ></DropdownItem>
                    );
                }}
                name="provin"
            />

            {recotdata.provin?"": errors.provin && (
                <span className={addfromcontai['_notedtt']}>
                    *Không được để trống
                </span>
            )}
                    </div>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                    <DropdownItem placeholder={"Quận/ Huyện"} id="distri" name="distri"
                        Options={OptionsCN}
                        title="Quận/ Huyện"
                        valide="*"
                        top="363px"
                        icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                        value={recotdata.distri}
                        onChange={(e) => {chaneChangeText(e, "distri");onChange(e.value)}}
                        style={{
                            border: recotdata.distri?"":errors.distri
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                        ></DropdownItem>
                    );
                }}
                name="distri"
            />

            {recotdata.distri?"":errors.distri && (
                <span className={addfromcontai['_notedtt']}>
                    *Không được để trống
                </span>
            )}
                    </div>
                    <div>
                    <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                    <DropdownItem placeholder={"Phường/ Xã"} id="war" name="war"
                        Options={OptionsCN}
                        title="Phường/ Xã"
                        valide="*"
                        top="363px"
                        icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                        value={recotdata.war}
                        onChange={(e) => {chaneChangeText(e, "war");onChange(e.value);}}
                        style={{
                            border: recotdata.war?"":errors.war
                                ? '1px solid #FF3434'
                                : '1px solid #ACACAC',
                        }}
                    ></DropdownItem>
                    );
                }}
                name="war"
            />

            {recotdata.war?"":errors.war && (
                <span className={addfromcontai['_notedtt']}>
                    *Không được để trống
                </span>
            )}
                    </div>
                </div>
                <div className={addfromcontai["fromaddsupplier"]}>
                    <ItemInput
                        title="Địa chỉ cụ thể"
                        name="address"
                        className="item-tenncc"
                        placeholder="Nhập địa chỉ cụ thể"
                        value={recotdata.address}
                        onChange={(e) => chaneChangeText(e, "address")}
                        errors={errors}
                    ></ItemInput>
                    <DropdownItem placeholder={"Giao Dịch"} id="status" name="status"
                        Options={Optionsstatus}
                        title="Trạng thái"
                        onChange={(e) => chaneChangeText(e, "status")}
                        top="438px"
                        icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                        value={recotdata.status == 2 ? "Tạm Dừng" : "Giao dịch"}
                    >
                        <span>{getstatustext(recotdata.status) ?? "Trạng thái"}</span>
                    </DropdownItem>

                </div>

            </FormAdd>
            <Footer>
                <div className={addfromcontai["footer-left"]}>
                    <button className={addfromcontai["reset_btn"]} onClick={() => {
                        history.goBack()
                    }}>
                        <img src='images/icon-exit.svg' className='icon_ ' style={{ width: "24px", height: "24px" }} />
                        <span className='footer-left-text' >Quay lại</span></button>

                </div>
                <div className={addfromcontai["footer-right"]}>

                    <button className={addfromcontai["footer-right-btn-detele"]}>
                        <span className={addfromcontai["footer-right-text-detele"]}> Hủy Bỏ</span>
                    </button>
                    <button className={addfromcontai["footer-right-btn-update"]}
                        onClick={() => {
                            setsave(recotdata)
                        }}
                    >

                        <span className={addfromcontai["footer-right-text-update"]}>Lưu</span>
                    </button>
                   


                </div>



            </Footer>
 </form>
        </div>
   

}
export default AddsupplierContainer