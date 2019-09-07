import axios from "axios"
import qs from "qs"
import loading from "lib/loading/index.js"
/* 将Loading组件保存在变量中  因为在lib文件的lodaing.js中 return出来的都是新的vue
插入的元素div和删除的元素div不是同一个元素，所以loading会一直转删不掉 */
let vm= loading();
const server = axios.create({
	//baseURL:"",
	timeout:5000, 
	withCredentials:true
})

//拦截器的配置
server.interceptors.request.use((config)=>{
	if(config.method.toUpperCase()=="GET"){
		config.params={...config.data}
	}else if(config.method.toUpperCase() == "POST"){
		config.headers["content-type"]="appliaction/x-www-form-urlencoded";
		//config.data=qs.stringify(config.data)
	}
	vm.handlemount()
	return config;
},(err)=>{
	promise.reject(err);
})

server.interceptors.response.use((res)=>{
	if(res.statusText=="OK"){
		vm.handleDestory()
		return res.data
	}
},(err)=>{
	promise.reject(err);
})

export default (method,url,data={})=>{
	if(method.toUpperCase()=="GET"){
		return server.get(url,{
			params:data
		})
	}else if(method.toUpperCase()=="POST"){
		return server.post(url,data);
	}
}

