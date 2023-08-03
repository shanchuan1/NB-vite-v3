import axios from './request'


// 首页的请求
export const getHome = () => axios.get("/index-infos")

// 搜索页面的请求
export const search = (params) => axios.get('/search', { params });


// export const login = (params) => axios.post('/user/login', { params })
// post请求携带参数不要加{}


// 登录请求
export const login = (params) => axios.post('/user/login', params)

// 注册请求
export const register = (params) => axios.post('/user/register', params)


// 分类页面请求
export const getCategory = () => axios.get('/categories')





// 购物车页面请求

export const modifyCart = (params) => axios.put('/shop-cart', params)

// 商品获取
export const getCart = (params) => axios.get('/shop-cart', { params })




// 商品删除
export const deleteCartItem = (id) => axios.delete(`/shop-cart/${id}`)

export const getByCartItemIds = (params) => axios.get('/shop-cart/settle', { params });




// 我的页面请求

export const getUserInfo = () => axios.get('/user/info')



//商品详情页面请求
// 获取商品详细数据
export const getDetail = (id) => axios.get(`/goods/detail/${id}`)

export const addCart = (params) => axios.post('/shop-cart', params)



// 获取地址请求
export const getAddressDetail = (id) => axios.get(`/address/${id}`)

export const getDefaultAddress = () => axios.get('/address/default');

export const getAddressList = () =>  axios.get('/address', { pageNumber: 1, pageSize: 1000 })

export const addAddress = (params) => axios.post('/address', params);


export const EditAddress = (params) => axios.put('/address', params);

export const DeleteAddress = (id) => axios.delete(`/address/${id}`);







export const setLocal = (name, value) => {
    localStorage.setItem(name, value)
}

export const getLocal = (name) => {
    return localStorage.getItem(name)
}
