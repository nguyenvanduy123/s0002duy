import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';
const tmpRow = [];
for (let i = 1; i < 4; i++) {
    tmpRow.push({
        codeNCC: 'NC0000' + i.toString(),
        Name: 'Nhà cung cấp ' + i.toString(),
        cate: "Ngành may mặc",
        code: "322",
        codeCN: "11111202" + i.toString(),
        phone: "0358749335",
        email: "abc123@gmail.com",
        address: "72 Núi Thành, Đà Nẵng",
        provin: "Đà Nẵng",
        distri: "Hải Châu",
        war: "Hoà Thuận Đông",
        status: 2,
        id: i, 
        delete: false

    })

}
let getdulieusupplier = {
    Datasupplier: tmpRow,
    search:{}
};
const AppFactory = {
    fetchSupplier: (data) =>
    {
       
        ///duy test
        // return ApiOperation.request({
        //     url: ApiConstants.Supplier,
        //     method: 'GET',
        //      data: data
        // });
        var supplierloadsearch = getdulieusupplier.Datasupplier
        
        if(data.payload.data.Name || data.payload.data.status|| data.payload.data.provin){
            supplierloadsearch = getdulieusupplier.Datasupplier.filter((item,index)=>{
                let supplierloadstatus = data.payload.data.status!=""?item.status == parseInt(data.payload.data.status):true
                let supplierloadprovin = data.payload.data.provin!=""?item.provin == data.payload.data.provin:true
                let supplierloadName = data.payload.data.Name!=""?item.Name.includes(data.payload.data.Name.trim()):true
               
                return supplierloadName  && supplierloadstatus && supplierloadprovin && !item.delete
            })
            
        }
        
       return {
            data:supplierloadsearch
        }
    },
    updateSupplier: (data) =>
    {
        
        tmpRow[1*(data.payload.data.id)-1]=data.payload.data;
        return {
            Data: tmpRow
        };
        // return ApiOperation.request({
        //     url: ApiConstants.CREATE_CATEGORY,
        //     method: 'POST',
        //     data: data
        // });
    },
    putstatussupplier:(data)=>{
        let i = 0;

        const dd = tmpRow;
        dd.map((item, index) =>
        {
            if (item.id == data.payload.data.id) {
                i = index
            }
        });
        dd[i] = data.payload.data
      
        return {
            data:dd[i]
        }
    },
    putgetdataid:(data)=>{
        let i = 0;
        console.log(data);
        let recode =tmpRow.filter(item=>{
            
            return parseInt(item.id) == parseInt(data.payload.data.id);

        });
        recode[0]=data.payload.data;
        return {
            data: recode[0]
        };

    },postaddgetdata:(data)=>{

       ///gét dữ liệu mẫu
        let nccnew ={id:((1*getdulieusupplier.Datasupplier.length)+1),codeNCC:'NC0000'+((1*getdulieusupplier.Datasupplier.length)+1),delete:false,...data.payload.data}
        suppliernew = getdulieusupplier.Datasupplier.push(nccnew);
        
        return{
            data:suppliernew
        }
    },postdeletegetdata:(data)=>{
        let i = 0;
        
        let deleterecode =tmpRow.filter((item,index)=>{
           
           return !item.delete
        });
        deleterecode[i]=data.payload.data;
        return {
            data: deleterecode[i]
        };

    },
    postsearchpostdata:(data)=>{
        var resutsearch = []
        let searchs = data.payload.data
      
        if(searchs){
            if(searchs.status||searchs.Name||searchs.provin){
                
                resutsearch = tmpRow.filter(item=>{
                    if(searchs.Name || searchs.provin || searchs.status){
                        console.log(searchs.Name);
                        return item.Name.includes(searchs.Name)
                    }
                })
            }
        }else{
            resutsearch = tmpRow
        }
        console.log(resutsearch);
        return{
            data:resutsearch
        }

    }
    
}

export default AppFactory