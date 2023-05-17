import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const ProvinceFactory = {
    fetchSampleProvince: async (data) =>
    {
        
        return ApiOperation.request({
            url:ApiConstants.Province,
            method: 'GET',
            data: data
        }) ;
      
    
    },
    updateSample: (data) =>
    {
        return {
            data: {}
        };
        
    },
}

export default ProvinceFactory