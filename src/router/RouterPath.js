const prefix = "/";
export default class RouterPath
{
    
    static HOME = prefix + '';
    static LOGIN = '/login';
    static nhacungcap = '/nhacungcap';
    static detail = '/nhacungcap/chitietnhacungcap/:id';
    static addncc = '/nhacungcap/themnhacungcap';
    static editncc = '/nhacungcap/chinhsuancc/:id';
    static getRouteWithId(path, id)
    {
        return path.replace(":id", id)
    }
}