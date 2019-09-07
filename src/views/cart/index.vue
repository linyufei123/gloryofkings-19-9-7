<template>
    <div class= "cart">
            <div class="tit">
                <i class="iconfont">&#xe63d;</i>
                <p>
                购物车
                </p>    
            </div>
            <div class="big_container">
                <div style="width:100%;height:3.5rem;"></div>
                    <div class="no_cart" >
                <ul>
                    <li>
                        <i class="iconfont">&#xe61a;</i>
                    </li>
                    <li>
                        <p>
                            购物车空空如也~
                        </p>
                    </li>
                    <li>
                        <div class="gocart" @click="gohome()">
                            去逛逛
                        </div>
                    </li>
                </ul>
                </div>
                <!-- 购物车渲染 -->
                <div class="have_cart">
                    <ul>
                        <!-- <li v-for="(item,index) in list1" :key="index">
                            11111
                        </li> -->
                        <li v-for="(item,index) in list1" :key="index">
                            <div class="check_radio" style="width:12%;">
                            <input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" value="#f0544d" />
                            <label  for="color-input-red"></label >
                            </div>
                            <div class="container">
                                <div style="width:50px;height:50px;margin-right:10px;">
                                    <img :src="item.picture" style="width:100%;height:100%">
                                </div>
                                <div class="good_price">
                                    <p>
                                        {{item.name}}
                                    </p>
                                    <p>
                                        ￥{{item.nowprice}}
                                    </p>
                                </div>
                                <div class="reduce_add_del">
                                    <i class="iconfont" style="font-size:16px;">&#xe645;</i>
                                    <div class="add_reduce">
                                        <el-input-number v-model="num1" size="mini" :min="1" :max="10" label="描述文字"></el-input-number>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="for_you">
                    <h4>
                        为你推荐
                    </h4>
                </div>
                <div class="goodlists">
                    <ul>
                        <router-link
                        v-for ="(item,index) in list" :key="index"
                        :to="{name:'detail',params:{id:item.id,name:item.name}}"
                        tag="li"
                        >
                        <div class="li_img">
                            <img :src="item.img1">
                        </div>
                        <div>
                            <p class="title1">
                                {{item.name}}
                            </p>
                            <p class="price">
                                <span>￥{{item.nowprice}}</span>
                                <span><del>￥{{item.oldprice}}</del></span>
                            </p>
                        </div>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="jiesuan">
                <div class="div1">
                    <p>
                    <el-tooltip :content="'Switch value: ' + value" placement="top">
                        <el-switch
                            v-model="value"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-value="100"
                            inactive-value="0"
                            >
                        </el-switch>
                        </el-tooltip>
                    </p>
                    <p>
                        全选
                    </p>
                </div>
                <div class="div2">
                    <p>
                    共计
                    </p>
                    <p>
                    0件
                    </p>
                </div>
                <div class="div3">
                    <p>
                        合计
                    </p>
                    <p>
                    ￥0.00
                    </p>
                </div>
                <div class="div4">
                    结算
                </div>
            </div>
    </div>
</template>

<script scoped>
import http from "utils/http"
 export default {
     name:"cart",
    data(){
      return {
        value: 1,
        list:[],    //moke数据
        num1:"",
        list1:[],   //node数据
      }
    },             
    created(){
        /* moke假数据获取的在main.js中添加了 */
        this.$axios.get("/sc/goodsList",{
            params:{
                limit:5,
                page:1,
            }
        }).then((data)=>{
            this.list=data.data
        })
        /* node数据库中获取 */
        this.$axios.get("/user/getlist").then((data)=>{
            this.list1=data.data.data.list
            console.log(data,22)
        })
    },
    methods:{
        gohome(){
            this.$router.push("/home")
        }
    }
  };
</script>

<style scoped>
    .cart{
        position: relative;
        width:100%;
        height:100%;
    }
    .big_container{
        position: absolute;
       
    }
    .big_container{
        position: absolute;
        bottom: 2rem;
        height: 100%;
        width: 100%;
        overflow: scroll;
    }
    .tit{
        position: fixed;
        top:0;
        width:100%;
        height:1rem;
        border-bottom:1px solid #ccc;
        z-index: 999;
        background: #ccc;
        opacity: 0.5;
    }
    .tit>p{
      display: block;
      width:50px;
      height:20px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top:0;
      margin: auto;
    }
    .tit>i{
        font-size:30px;
        line-height: 50px;
        margin-left:10px;
    }
    .no_cart{
        width:100%;
        height:120px;
        position: relative;
    }
     .no_cart>ul{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top:0;
        margin: auto;
        width:250px;
        height:50px;
     }
    .no_cart>ul>li{
        float: left;
    }
    .no_cart>ul>li:nth-of-type(1) i{
        font-size: 50px;
        color:rgb(175, 175, 175);
    }
    .no_cart>ul>li:nth-of-type(2) p{
         font-size: 15px;
         line-height: 50px;
         color:rgb(175, 175, 175);
         padding-right:10px;
    }
    .no_cart>ul>li:nth-of-type(3) div{
        display: block;
         width:100%;
         height:20px;
         border:1px solid #ccc;
         padding:2px 5px;
         text-align: center;
         color:red;
         font-size: 12px;
         margin-top:13px
    }
    .container{
        display: flex;
    }
    .have_cart{
        width:95%;
        position: relative;
    }
    .have_cart li{
        display: flex;
        position: relative;
        margin-bottom:.3rem;
    }
    .check_radio{
        display: flex;
        justify-content: center;
        align-items:center;
        margin-right:2%;
        margin-left:2%;
    }
    .good_price{
        width:116px;
        height:50px;
    }
    .good_price>p:nth-of-type(1){
        font-size:10px;
    }
    .good_price>p:nth-of-type(2){
        font-size:10px;
        color:#c33;
    }
    .reduce_add_del{
        width:130px;
        height:60px;
        position: absolute;
        right:0;
        overflow: hidden;
    }
    .reduce_add_del>i{
        position: absolute;
        right:0;
        top:0;
    }
     .reduce_add_del .add_reduce{
         position: absolute;
         right:0;
         bottom:0;
     }




    .for_you{
        padding-bottom:10px;
    }
    .for_you>h4{
        font-size: 14px;
        color: #000;
        margin-left:4%;
    }
    /* 问题区 */
    .goodlists{
         width:98%;
         margin:0 auto;
    }
    .goodlists>ul{
         width:100%;
         display: flex;
         justify-content: space-around;
         flex-wrap: wrap;
    }
    .goodlists>ul>li{
        width:46%;
        margin-bottom:8px;
        margin-left:-8px;

    }
    .li_img{
       width:3.5rem;
       height:3.5rem;
    }
    .li_img>img{
        width:100%;
        height:100%;
    }
    .title1{
        font-size:12px;
    }
    .price span:nth-of-type(1){
        font-size: 14px;
        color:red;
    }
    .price span:nth-of-type(2){
        font-size: 10px;
    }

    .jiesuan{
        width:100%;
        height:60px;
        background: rgb(255, 255, 255);
        position: fixed;
		left:0;
		bottom:1rem;
        display: flex;
    
    }
    .jiesuan>div{
        width:25%;
        height:60px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .div3>p:nth-of-type(2){
        color:red;
    }
    .div4{
        background:#e62d40;
        color:#fff;
    }

      /*lable标签的大小、位置、背景颜色更改，在css选择时，“+”代表相邻元素，即当前元素的下一元素*/
#color-input-red +label{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    /* position: absolute;
    top: 2px;
    left: 15px; */
    background: rgba(240, 84, 77, 1);;
}
 
/*当input框为选中状态时，lable标签的样式，其中在css选择时，“：”表示当前input框的值，即checked；
      该部分主要对显示的“对号”的大限居中方式，显示颜色进行了设置*/
#color-input-red:checked +label::before{
/*     display: block;
    content: "\2714";
    text-align: center;
    font-size: 16px;
    color: white; */
    display: block;
    content: "\2714";
    text-align: center;
    color: white;
    font-size: 16px;
}
input[type=checkbox]{
	visibility: hidden;
}
</style>