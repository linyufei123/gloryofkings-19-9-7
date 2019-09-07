<template>
    <div class="detail">
        <!-- 头部 -->
        <div class="tit">
             <ul class="tit_ul">
                 <li v-for="(item,index) in nav" :key="index">
                     {{item}}
                 </li>
             </ul>
             <i class="iconfont">&#xe61a;</i>
        </div>
        <!-- 滚动条 -->
        <div class="scroll_div">
            <!-- 空div -->
            <div style="width:100%;height:2rem;"></div>
            <!-- scroll Map -->
           <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                
                <!-- 如果需要滚动条 -->
                <div class="swiper-scrollbar"></div>
            </div>
            <!--  -->
            <div style="padding-left:0.2rem;padding-top:0.3rem">
                <p style="font-size:.3rem;">
                    {{goodlists[0].name}}
                </p>
                <p style="color:#c33;font-size:.4rem">
                    {{goodlists[0].nowprice}}
                </p>
            </div>
            <div style="width:100%;margin-top:.5rem;">
                <div class="type">
                   <p style="line-height:.7rem">请选择：</p> 
                </div>
            </div>
           <div class="box_img">
               <ul>
                   <li v-for="(item,index) in goodlists[0].img" :key="index">
                      <img :src="item" >
                   </li>
               </ul>
           </div>
        </div>
        <div class="footer">
            <div>
                <div>
                    <i class="iconfont">&#xe63d;</i>
                    <p>首页</p>
                </div>
                <div>
                    <i class="iconfont">&#xe75e;</i>
                    <p>客服</p>
                </div>
                <div>
                    <i class="iconfont">&#xe668;</i>
                    <p>收藏</p>
                </div>
            </div>
             <div @click="addgoodlist">
                 加入购物车
             </div>
             <div >
                 立即购买
             </div>
        </div>

        <!-- 蒙板 -->
        <div class="mb_bk" v-show="this.flag" @click="handledisappear()">
            <div class="mb_containt" @click.stop>
                <div  class="mb_img_pr_p">
                    <div class="div_img" style="background:red;width:1.5rem;height:1.5rem">
                    <img :src="goodlists[0].img1" style="width:100%;height:100%;">
                    </div>
                    <div class="mb_tit">
                        <p>
                            ￥{{goodlists[0].nowprice}}
                        </p>
                        <p>
                            {{goodlists[0].name}}
                        </p>
                    </div>
                </div>
                <div class="div_p">
                   数量
                </div>
                 <el-input-number class="div_inp" v-model="num1"  size="mini" :min="1" :max="10" label="描述文字"></el-input-number>
                <div class="add_ok" @click="handleAdd()">
                    确定
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import http from "utils/http"
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default {
    name:"detail",
    props:{
        id:{
            type:String,
        },
        name:{
            type:String,
        }
    },
    data(){
        return{
            flag:false,
            nav:["商品","详情","评价"],
            goodlists:[],
            num1:1,
        }
    },
    beforeCreate(){
        http()
    },
    created(){
        http("get","/sc/goodsList",{
            params:{
                limit:5,
                page:1,
            }
        }).then((data)=>{
           let list =data.data
           console.log(list.length)
            for(let i=0;i<list.length;i++){
                if(list[i].id==this.id){
                    this.goodlists.push(list[i])
                }
            }
             //console.log(this.goodlists[0])
        })
    },
    mounted(){
     new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  })        
  },
  methods:{
    addgoodlist(e){
        this.flag=!this.flag;
    },
    handledisappear(){
        this.flag=!this.flag;
    },
    handleAdd(){
        let nowprice = this.goodlists[0].nowprice;
        let name = this.goodlists[0].name;
        let picture = this.goodlists[0].img1;
        let num = this.num1;
         this.$axios.post("http://localhost:3000/user/addlist",{
        nowprice,
        name,
        picture,
        num,
        }).then((data)=>{
            console.log(data)
            this.$message({
                message: data.data.data.info,
                type: 'success',
                center: true,
            });
        })
    }
  },
}
</script>

<style scoped>
/* 蒙版 */
.mb_bk {
	width:100%;
	height:100%;
	background:rgba(0,0,0,.6);
	position: absolute;
	z-index:1000;
	top:0;
	left:0;
	color:#FFF;
}
.mb_containt{
    width:100%;
    height:7rem;
    background:#fff;
    position: fixed;
    bottom:0;
   
}
.mb_containt .add_ok{
    width:100%;
    height:1rem;
    background:#c33;
    font-size:.25rem;
    display: flex;
    justify-content: center;
    align-items:center; 
    position: absolute;
    bottom:0;
}
.mb_img_pr_p{
    display: flex;
    width:100%;
    height:1.7rem;
    margin-top:.2rem;
    margin-left:.3rem;
    border-bottom: 1px solid rgb(199, 196, 196);
}
.mb_containt .mb_tit{
    margin-top:.2rem;
    margin-left:.1rem;
}
.mb_containt .mb_tit>p:nth-child(1){
    color:red;
    font-size:.3rem;
}
.mb_containt .mb_tit>p:nth-child(2){
    color:#000;
}
.mb_containt .div_p{
    width:100%;
    color:#000;
    margin:.3rem;
    font-size:.2rem;
}

/* plating Map */
.swiper-container {
    width: 375px;
    height: 300px;
    background: rgb(80, 173, 80);
} 

.tit{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    background:#fff;
    opacity: 0.6;
    z-index: 999;
}
.tit_ul{
        height: 1rem;
        display:flex;
}
.tit_ul>li{
        line-height:1rem;
        font-size: .3rem;
}
.tit_ul>li:nth-of-type(2){
    padding:0 1rem;
}
.tit i {
    position: absolute;
    right: .5rem;
   line-height:1rem;
   font-size:.5rem
}

/* scroll_div*/
.scroll_div{
    position: absolute;
    bottom:1rem;
    height:100%;
    width:100%;
    overflow-y: scroll;
}


/* scroll下层 */
.type{
    padding-left: .2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: .5rem;
    border-top:solid 1px #ccc;
    border-bottom:solid 1px #ccc;
}
.box_img>ul{
    width:100%;
}
.box_img>ul>li img{
    width:100%;
    height:5rem;
}

/* footer */
.footer{
    display: flex;
    height:1rem;
    width:100%;
    position: fixed;
    bottom:0;
}
.footer>div:nth-child(1){
    display: flex;
    padding-left:.3rem;
}
.footer>div:nth-child(1)>div{
    width:.9rem;
}
.footer>div:nth-child(2){
    width:2.3rem;
    background:rgb(255, 136, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.footer>div:nth-child(3){
     width:2.3rem;
    background:rgb(255, 30, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-left:.05rem;
}
/* 加减按钮框 */
.div_inp{
    margin-left:.3rem;
}
</style>