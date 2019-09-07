import Loading from "./index.vue";
import Vue from "vue";

export default ()=>{
     //通过vue.extend继承vue身上公有的一些方法生成小型的vue 动态挂载
    let LoadingComponent = Vue.extend(Loading);
    let vm=new LoadingComponent({
            el:document.createElement("div"),
            methods:{
                handlemount(){
                    document.body.appendChild(vm.$mount().$el)
                },
                handleDestory(){
                    document.body.removeChild(vm.$mount().$el)
                }
            }
        })
       // console.log(vm.$mount().$el) //打印出来整个div的组件
        return vm;
}

