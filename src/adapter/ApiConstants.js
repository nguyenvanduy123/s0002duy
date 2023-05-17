const BASE_PREFIX = 'http://127.0.0.1:8000'

const ApiConstants = {
    LOGIN: `${BASE_PREFIX}/auth/login`,
    LOGOUT: `${BASE_PREFIX}/auth/login/logout`,
    REFRESH_TOKEN: `${BASE_PREFIX}/auth/login/refresh-token`,
    AUTH: `${BASE_PREFIX}/auth/me`,

    
    LOGIN_: `${BASE_PREFIX}/api/FM/login`,


    ///duy test dữ liệu nhà cung cấp
     Supplier: ` http://localhost:3984/Data`,
    // duy test dũ liệu thành phố
    Province:`http://localhost:3689/tinh`,
    
}
    
export default ApiConstants

export { BASE_PREFIX }
