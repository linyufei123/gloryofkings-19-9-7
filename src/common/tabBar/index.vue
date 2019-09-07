<template>
	<div id="footer">
		<ul>
			<router-link 
			v-for="(item,index) in navs"
			:key="index"
			:to="item.path"
			tag="li"
			>
			<i class="iconfont" v-html="item.icon"></i>
			<span>{{item.text}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"TabBar",
		data(){
			return{
				navs:[
					{
						icon:"&#xe63d;",
						text:"首页",
						path:"/home"
					},
					{
						icon:"&#xe691;",
						text:"分类",
						path:"/classify"
					},
					{
						icon:"&#xe61a;",
						text:"购物车",
						path:"/cart"						
                    },
                    {
						icon:"&#xe620;",
						text:"我的",
						path:"/mine"						
					},
				]
			}
		}
	}
</script>

<style scoped>
    *{
        margin:0;padding:0;
    }
	#footer{
		width:100%;
		height:1rem;
		position: fixed;
		left:0;
		bottom:0;
		background:#fff;
		border-top:1px solid #ccc;
	}
	#footer>ul,#footer>ul>li{
		width:100%;
		height:100%;
	}
	#footer>ul{
		display: flex;
	}
	#footer>ul>li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: .3rem;
        color: #8b8b8b;
        background:#1b1b1b;
        font-weight: 400;
	}
	#footer>ul .router-link-active{
		color:#fff;
	}
	.iconfont{
		font-size:.5rem;
	}
</style>
 