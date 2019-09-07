<template>
    <div class= "classify">
        <div class="tit">
            <ul class="tit_ul">
               <li v-for="(item,index) in nav" :key="index">
                   {{item}}
               </li>
            </ul> 
        </div>
        <div class="tit1">
             <ul class="tit_ul1">
                <li v-for="(item,index) in nav1" :key="index">
                    {{item}}
                </li>    
            </ul> 
        </div>
        <div class="goodlists">
            <ul>
                <li>
                   <div class="li_img">

                   </div>
                   <div class="container">
                       <p class="title2">
                           逍遥游抱枕
                       </p>
                       <p class="price">
                           <span>￥138.00</span>
                           <span><del>￥138.00</del></span>
                       </p>
                   </div>
                </li>
                 <li>
                   <div class="li_img">
                   </div>
                   <div class="container">
                       <p class="title2">
                           逍遥游抱枕
                       </p>
                       <p class="price">
                           <span>￥138.00</span>
                           <span><del>￥138.00</del></span>
                       </p>
                   </div>
                </li>
                 <li>
                   <div class="li_img">

                   </div>
                   <div class="container">
                       <p class="title2">
                           逍遥游抱枕
                       </p>
                       <p class="price">
                           <span>￥138.00</span>
                           <span><del>￥138.00</del></span>
                       </p>
                   </div>
                </li>
                <li>
                   <div class="li_img">

                   </div>
                   <div class="container">
                       <p class="title2">
                           逍遥游抱枕
                       </p>
                       <p class="price">
                           <span>￥138.00</span>
                           <span><del>￥138.00</del></span>
                       </p>
                   </div>
                </li>
                <li>
                   <div class="li_img">

                   </div>
                   <div class="container">
                       <p class="title2">
                           逍遥游抱枕
                       </p>
                       <p class="price">
                           <span>￥138.00</span>
                           <span><del>￥138.00</del></span>
                       </p>
                   </div>
                </li>
                <li>
                   <div class="li_img">

                   </div>
                   <div class="container">
                       <p class="title2">
                           逍遥游抱枕
                       </p>
                       <p class="price">
                           <span>￥138.00</span>
                           <span><del>￥138.00</del></span>
                       </p>
                   </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"classify",
    data(){
        return {
            nav:["全部","手办模玩","数码3C","服饰","毛绒玩具","生活用品","智能机器人","金银首饰","数据线"],
            nav1:["默认","最热销","新上架","价格"]
        }
    }
}
</script>

<style scoped>
    .tit{
        position: fixed;
        top:0;
        left:0;
        z-index:999;
        background: hsla(0,0%,100%,.8)
    }
    .tit_ul{
        height: 1rem;
        border-bottom: 1px solid #ccc;
        display:flex;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space:nowrap;
    }
    .tit_ul>li{
        margin-left:6%;
        margin-right:3%;
        line-height:1rem;
        font-size: 14px;
    }
    .tit_ul>li:nth-of-type(9){
        padding-right:3%;
    }
    .tit1{
        display: flex;
        width:100%;
        height: .7rem;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
        position: fixed;
        top:1rem;
        left:0;
        z-index:999;
        background:#fff;
    }
    .tit_ul1{
        height: .7rem;
        display:flex;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space:nowrap;
    }
    .tit_ul1>li{
        padding:0 0.42rem;
        line-height:.7rem;
        font-size: 12px;
    }

    .goodlists{
         width:98%;
         /* margin:0.1rem auto 0; */
         overflow-y: scroll;
        position: absolute;
         top: 1.7rem;
         bottom:1rem;
    }
    .goodlists>ul{
         width:100%;
         display: flex;
         justify-content: space-around;
         flex-wrap: wrap;
         margin:0 auto;
    }
    .goodlists>ul>li{
        width:3.5rem;
        height:3.3rem;
        margin-bottom:1rem;
    }
    .li_img{
       width:100%;
       height:100%;
       background:rgb(73, 189, 131);
    }
    .container{
        margin-top:10px;
        
    }
    .title2{
        font-size:12px;
    }
    .price span:nth-of-type(1){
        font-size: 14px;
        color:red;
    }
    .price span:nth-of-type(2){
        font-size: 10px;
    }
</style>