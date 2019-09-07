export default {
    name:"detail",
    path:"/detail/:id/:name",
    props:true,
    meta:{
        show:false,
    },
    component:()=>import("common/detail"),
}
