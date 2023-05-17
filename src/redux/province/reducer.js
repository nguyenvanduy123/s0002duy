import ProvinceAction from './action';



let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    sampleData: {
        loading: false,
        data: {}
    },
    provinceData:{
        loading: false,
        data:{},
        detail:{}
    }
   
};

const ProvinceReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ProvinceAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case ProvinceAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case ProvinceAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case ProvinceAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
       
            case ProvinceAction.FETCH_GET_PROVINCE:
                
                return{
                    ...state,
                        provinceData:{
                            ...state.provinceData,
                            loading:true,
                        }
                };
                case ProvinceAction.FETCH_GET_PROVINCE_SUCCESS:
                    
                    return{
                        ...state,
                        provinceData:{
                            ...state.provinceData,
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

export default ProvinceReducer;
