<template>
    <div class="bkg">
        <!-- title -->
       <div class="tit">
            <div> <img src="http://q2.qlogo.cn/g?b=qq&k=EgmMUFlIUCB6UpkAjqU9zQ&s=100&t=1425108107" alt=""> </div>
            <div>
                <p> 那就叫、阿飞、 吧</p>
            </div>
            <div> <i class="iconfont dianji">&#xe612;</i></div>
       </div>
       <!--  -->
       <div class="tit2">
           <div>
               <p> 游戏大区：</p>
               <p>未绑定：</p>
               <p><i class="iconfont">&#xe671;</i></p>
           </div>
           <div>
               <p> 游戏昵称：</p>
               <p>未绑定：</p>
               <p><i class="iconfont">&#xe671;</i></p>
           </div>
           <div>
               <p> 电话：</p>
               <p>未绑定：</p>
               <p><i class="iconfont">&#xe671;</i></p>
           </div>
       </div>
        <!-- 我的订单 -->
        <div class="mine">
            <div>
                我的订单
            </div>
            <div>
                查看全部订单>
            </div>
        </div>
        <!--  -->
        <div class="tit3">
            <div>
                <i class="iconfont">&#xe704;</i>
                <p>未付款</p>
            </div>
            <div>
                <i class="iconfont">&#xe641;</i>
                <p>待发货</p>
            </div>
            <div>
                <i class="iconfont">&#xe615;</i>
                <p>待收货</p>
            </div>
            <div>
                <i class="iconfont">&#xe621;</i>
                <p>待评价</p>
            </div>
        </div>
        <!--  -->
        <div class="tit4">
            <ul>
                <li>
                    <div>
                        <p>我的购物车(3)</p>
                        <i class="iconfont">&#xe612;</i>
                    </div>
                </li>
                 <li>
                    <div>
                        <p>我的优惠券(1)</p>
                        <i class="iconfont">&#xe612;</i>
                    </div>
                </li>
                 <li>
                    <div>
                        <p>我的收藏</p>
                        <i class="iconfont">&#xe612;</i>
                    </div>
                </li>
                 <li>
                    <div>
                        <p>我的评价</p>
                        <i class="iconfont">&#xe612;</i>
                    </div>
                </li>
                 <li>
                    <div>
                        <p>收货地址</p>
                        <i class="iconfont">&#xe612;</i>
                    </div>
                </li>
            </ul>
        </div>
        <!-- tit5 -->
        <div class="tit5">
            <div>
                <i class="iconfont">&#xe63b;</i>
                <p>系统消息</p>
            </div>
            <div>
                <i class="iconfont">&#xe652;</i>
                <p>帮助中心</p>
            </div>
            <div>
                <i class="iconfont">&#xe654;</i>
                <p>关于我们</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"login",
}
</script>

<style scoped>
    .bkg{
        background: rgb(240, 239, 239)
    }
    .tit{
        width:100%;
        height:1.4rem;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom:1px solid #ccc;
        background: #fff;
    }
    .tit>div:nth-child(1){
        width:1rem;
        height:1rem;
        margin:.1rem 0 0 .3rem;
    }
    .tit>div:nth-child(1)>img{
        width:100%;
        height:100%;
    }
    .tit>div:nth-child(2)>p{
        margin-left:.4rem;
        font-size:.3rem;
        font-family: "微软雅黑"
    }
    .tit>div:nth-child(3){
         position: absolute;
         right:.1rem
    }
    .dianji{
        color:#ccc;
    }
    /* tit2 */
    .tit2{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top:.2rem;
        background: #fff;
        padding-bottom: .2rem;
    }
    .tit2>div>p:nth-of-type(1){
        color:#ccc;
    }
    /* mine */
    .mine{
        background: #fff;
        border-bottom:1px solid #ccc;
        margin-top:.25rem;
        display: flex;
        justify-content: space-between;
    }
     .mine>div:nth-child(1){
         margin-left:.2rem;
         line-height: .6rem;
     }
      .mine>div:nth-child(2){
         margin-right:.2rem;
          line-height: .6rem;
          color:#ccc;
     }
     /* tit3 */
     .tit3{
         display: flex;
         justify-content: space-around;
         align-items: center;
         padding:.3rem 0;
         background:#fff;
         
     }
     .tit3>div{
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
     }
     .tit3>div>i{
         font-size: .5rem;
         line-height: .8rem;
     }
    /* tit4 */
    .tit4>ul>li>div{
        display: flex;
        justify-content:space-between;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .tit4>ul>li>div>i{
        color:#ccc;
        margin-right:.3rem;
         line-height: .9rem;
    }
    .tit4>ul>li>div>p{
        font-size: .2rem;
        line-height: .9rem;
         margin-left:.3rem;
    }
    .tit5{
        padding-top:.8rem;
        display: flex;
        justify-content: space-around;
        background: #fff;
    }
    .tit5>div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
     .tit5>div>i{
         font-size: .4rem;
         line-height: .6rem;
     }
</style>