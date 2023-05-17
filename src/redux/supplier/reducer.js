import { data } from 'jquery';
import SupplierAppAction from './action';
///dữ liệu gét api
// const tmpRow = [];
// for (let i = 1; i < 300; i++) {
//     tmpRow.push({
//         codeNCC: 'NC0000' + i.toString(),
//         Name: 'Nhà cung cấp ' + i.toString(),
//         cate: "Ngành may mặc",
//         code: "322",
//         codeCN: "11111202" + i.toString(),
//         phone: "0358749335",
//         email: "abc123@gmail.com",
//         address: "72 Núi Thành, Đà Nẵng",
//         provin: "Đà Nẵng",
//         distri: "Hải Châu",
//         war: "Hoà Thuận Đông",
//         status: 2,
//         id: i

//     })

// }


let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    sampleData: {
        loading: false,
        data: {}
    },
    supplierData:{
        loading:false,
        data:{},
        detail:{}
    }
};

const AppReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case SupplierAppAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case SupplierAppAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case SupplierAppAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case SupplierAppAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
        case SupplierAppAction.FETCH_SAMPLE_1:

            return {
                ...state,
                sampleData: {
                    ...state.sampleData,
                    loading: true,
                },
            };
        case SupplierAppAction.FETCH_SAMPLE_1_SUCCESS:
            return {
                ...state,
                sampleData: {
                    ...state.sampleData,
                    data: action.payload,
                    loading: false,
                },
            };
            case SupplierAppAction.FETCH_GET_DATA:///g
                return{
                    ...state,
                        supplierData:{
                            ...state.supplierData,
                            loading:true,

                        }
                };
                case SupplierAppAction.FETCH_GET_DATA_SUCCESS:
                  
                    return{
                        ...state,
                        supplierData:{
                            ...state.supplierData,
                            data:action.payload,
                            loading:false,
                        }
                    };
                    case SupplierAppAction.FETCH_GET_DATA_ID:
                       
                        return{
                            ...state,
                                supplierData:{
                                    ...state.supplierData,
                                     data:action.payload.data,
                                    loading:false,
                        }
                        };
                        case SupplierAppAction.FETCH_GET_DATA_ID_SUCCESS:
                            
                            return{
                                ...state,
                                    supplierData:{
                                        ...state.supplierData,
                                        data:action.payload,
                                        loading:false,
                            }
                            };
                        case SupplierAppAction.FETCH_UPDATE_DATA:
                           
                            return{
                                ...state,
                                supplierData:{
                                    ...state.supplierData,
                                    data:state.supplierData.data,
                                    loading:false,
                                    check:0
                                }
                            };
                            case SupplierAppAction.FETCH_UPDATE_DATA_SUCCESS:
                                return{
                                    ...state,
                                    supplierData:{
                                        ...state.supplierData,
                                        data:action.payload,
                                        loading:false,
                                        check:1
                                    }
                                };
                                case SupplierAppAction.FETCH_PUTSATUS_DATA:
                                return{
                                    ...state,
                                    supplierData:{
                                        ...state.supplierData,
                                        data:state.supplierData.data,
                                        loading:false,
                                       
                                    }
                                };
                                case SupplierAppAction.FETCH_PUTSATUS_DATA_SUCCESS:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:action.payload,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_ADD_DATA:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:state.supplierData.data,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_ADD_DATA_SUCCESS:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:action.payload,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_POSTDELETE_DATA:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:state.supplierData.data,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_POSTDELETE_DATA_SUCCESS:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:action.payload,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_GETSEARCH_DATA:
                                        return{
                                            ...state,
                                            supplierData:{
                                                ...state.supplierData,
                                                data:state.supplierData.data,
                                                loading:false,
                                               
                                            }
                                        };
                                        case SupplierAppAction.FETCH_GETSEARCH_DATA_SUCCESS:
                                        return{
                                            ...state,
                                            supplierData:{
                                                ...state.supplierData,
                                                data:action.payload,
                                                loading:false,
                                               
                                            }
                                        };
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
