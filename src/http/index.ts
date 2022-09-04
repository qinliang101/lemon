import axios from 'axios'

const http = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? '/api' : '',
    timeout: 5000, // 请求的超时时间
    withCredentials: true // 允许携带cookie
})

http.interceptors.request.use(config => {
    console.log('拦截请求');
    
    return config
    //设置header
    // config.headers["Content-Type"] = "application/json;charset=UTF-8";

    // // 让每个请求携带自定义token 
    // if (store.getters.token) {
    //     // header添加token
    //     config.headers["Authorization"] = store.getters.token;
    //     }
    //     return config;
    // },
    // error => {
    //     return Promise.reject(error);
    // }
});

http.interceptors.response.use(res => {
    console.log('拦截响应')
    console.log(res.data)
    return Promise.resolve(res.data)
});

export default http