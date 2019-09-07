const Mock = require("mockjs");
const url = require("url")
var data= Mock.mock({
data:[
    {
        "id":"000",
        "name":"逍遥游鲲抱枕",
        "nowprice":"76.00",
        "oldprice":"98.00",
        "img1":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201811/20181113204355_75761.big.jpg",
        "img2":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201708/20170830192126_23289.big.jpg",
        "img3":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201708/20170830192123_92476.big.jpg",
        "img4":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201708/20170830192126_23289.big.jpg",
        "img5":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201708/20170830192128_47018.big.jpg",
        "img":{
            "img6":"http://ossweb-img.qq.com/images/zb/x5/uploadImg/goods/201709/20170907221803_96263.jpg",
             "img7":"http://ossweb-img.qq.com/images/zb/x5/uploadImg/goods/201709/20170910152556_81238.jpg",
             "img8":"http://ossweb-img.qq.com/images/zb/x5/uploadImg/goods/201709/20170907221804_89770.jpg",
             "img9":"http://ossweb-img.qq.com/images/zb/x5/uploadImg/goods/201709/20170907221804_30173.jpg",
             "img10":"http://ossweb-img.qq.com/images/zb/x5/uploadImg/goods/201709/20170907221805_45811.jpg",
             "img18":"http://shp.qpic.cn/mall/0/goods_x5_20180207192225_69909/0.jpg",
             "img19":"http://shp.qpic.cn/mall/0/goods_x5_20180301002618_27034/0.jpg",
             "img20":"http://shp.qpic.cn/mall/0/goods_x5_20180207192309_14637/0.jpg",
            },
      
        },{
            "id":"001",
            "name":"齐天大圣孙悟空手办",
            "nowprice":"87.00",
            "oldprice":"76.00",
            "img1":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201811/20181113204413_33243.jpg",
            "img2":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201709/20170901222903_62989.jpg",
            "img3":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201709/20170901222906_47712.jpg",
            "img4":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201709/20170901222910_11178.jpg",
            "img5":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201709/20170901222913_21226.jpg",
            "img":{
              "img6":"http://shp.qpic.cn/mall/0/goods_x5_20180207192218_33098/0.jpg",
             "img7":"http://shp.qpic.cn/mall/0/goods_x5_20180207192218_98387/0.jpg",
             "img8":"http://shp.qpic.cn/mall/0/goods_x5_20180207192219_70949/0.jpg",
             "img9":"http://shp.qpic.cn/mall/0/goods_x5_20180207192219_97210/0.jpg",
             "img10":"http://shp.qpic.cn/mall/0/goods_x5_20180207192220_95599/0.jpg",
             "img11":"http://shp.qpic.cn/mall/0/goods_x5_20180207192220_16530/0.jpg",
             "img12":"http://shp.qpic.cn/mall/0/goods_x5_20180207192220_16582/0.jpg",
             "img13":"http://shp.qpic.cn/mall/0/goods_x5_20180207192221_70113/0.jpg",
             "img14":"http://shp.qpic.cn/mall/0/goods_x5_20180207192221_39007/0.jpg",
             "img15":"http://shp.qpic.cn/mall/0/goods_x5_20180207192222_46833/0.jpg",
             "img16":"http://shp.qpic.cn/mall/0/goods_x5_20180301002559_38293/0.jpg",
             "img17":"http://shp.qpic.cn/mall/0/goods_x5_20180207192223_41100/0.jpg",
             "img18":"http://shp.qpic.cn/mall/0/goods_x5_20180207192225_69909/0.jpg",
             "img19":"http://shp.qpic.cn/mall/0/goods_x5_20180301002618_27034/0.jpg",
             "img20":"http://shp.qpic.cn/mall/0/goods_x5_20180207192309_14637/0.jpg",
            },
        },{
            "id":"002",
            "name":"天美官方艺术典藏（标准版）",
            "nowprice":"98.00",
            "oldprice":"76.00",
            "imgshouye":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201801/20180124195421_35075.big.jpg",
            "img1":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201801/20180124195425_66553.big.jpg",
            "img2":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201801/20180124195429_78384.big.jpg",
            "img3":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201801/20180124195433_87420.big.jpg",
            "img4":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201811/20181113205042_44201.big.jpg",
            "img5":"http://shp.qpic.cn/mall/0/goods_x5_20180329115845_99576/0.jpg",
            "img":{
                "img6":"http://shp.qpic.cn/mall/0/goods_x5_20180329115845_93728/0.jpg",
                "img7":"http://shp.qpic.cn/mall/0/goods_x5_20180329115846_10163/0.jpg",
                "img8":"http://shp.qpic.cn/mall/0/goods_x5_20180329115847_84127/0.jpg",
                "img9":"http://shp.qpic.cn/mall/0/goods_x5_20180329115847_17352/0.jpg",
                "img10":"http://shp.qpic.cn/mall/0/goods_x5_20180329115847_51277/0.jpg",
                "img11":"http://shp.qpic.cn/mall/0/goods_x5_20180329115848_17413/0.jpg",
                "img12":"http://shp.qpic.cn/mall/0/goods_x5_20180329115848_93819/0.jpg",
                "img13":"http://shp.qpic.cn/mall/0/goods_x5_20180329115848_59257/0.jpg",
                "img14":"http://shp.qpic.cn/mall/0/goods_x5_20180329115849_31156/0.jpg",
                "img15":"http://shp.qpic.cn/mall/0/goods_x5_20180329115850_36119/0.jpg",
                "img16":"http://shp.qpic.cn/mall/0/goods_x5_20180329115850_80108/0.jpg",
                "img17":"https://game.gtimg.cn/images/yxzj/mall/m/detail_01.jpg",
                "img18":"https://game.gtimg.cn/images/yxzj/mall/m/detail_02.jpg",
                "img19":"https://game.gtimg.cn/images/yxzj/mall/m/detail_03.jpg"
            },
        },{
            "id":"003",
            "name":"萌新伙伴赵云妲己挂件",
            "nowprice":"18.00",
            "oldprice":"97.00",
            "imgshouye":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201811/20181113204708_18162.big.jpg",
            "img1":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201709/20170905165643_15727.jpg",
            "img2":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201709/20170905165647_89548.big.jpg",
            "img3":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201708/20170830191640_40071.big.jpg",
            "img4":"https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201708/20170830191642_88261.big.jpg",
            "img5":"http://shp.qpic.cn/mall/0/goods_x5_20180207191643_93137/0.jpg",
            "img":{
                "img6":"http://shp.qpic.cn/mall/0/goods_x5_20180207191644_31127/0.jpg",
                "img7":"http://shp.qpic.cn/mall/0/goods_x5_20180207191644_46085/0.jpg",
                "img8":"http://shp.qpic.cn/mall/0/goods_x5_20180207191644_34840/0.jpg",
                "img9":"http://shp.qpic.cn/mall/0/goods_x5_20180207191646_83401/0.jpg",
                "img10":"http://shp.qpic.cn/mall/0/goods_x5_20180207191647_22196/0.jpg",
                "img11":"http://shp.qpic.cn/mall/0/goods_x5_20180207191647_81321/0.jpg",
                "img12":"http://shp.qpic.cn/mall/0/goods_x5_20180207191647_93832/0.jpg",
                "img13":"http://shp.qpic.cn/mall/0/goods_x5_20180207191648_84799/0.jpg",
                "img14":"http://shp.qpic.cn/mall/0/goods_x5_20180207191648_36243/0.jpg",
                "img15":"http://shp.qpic.cn/mall/0/goods_x5_20180207191649_82232/0.jpg",
                "img16":"http://shp.qpic.cn/mall/0/goods_x5_20180207191649_23085/0.jpg",
                "img17":"http://shp.qpic.cn/mall/0/goods_x5_20180207191836_47033/0.jpg",
                "img18":"https://game.gtimg.cn/images/yxzj/mall/m/detail_01.jpg",
                "img19":"https://game.gtimg.cn/images/yxzj/mall/m/detail_02.jpg",
                "img20":"https://game.gtimg.cn/images/yxzj/mall/m/detail_03.jpg"
            },
            
        }
]
})
/* get请求方式 */
Mock.mock(/sc\/goodsList/,"get",function(options){
let {limit,page} = url.parse(options.url,true).query;
return data.data.slice((page-1)*limit,(limit*page)-1)
})
/* post请求方式 */
Mock.mock(/sc\/goodsList/,"post",function(options){
let {limit,page} = JSON.parse(options.body);
return data.data.slice((page-1)*limit,(limit*page)-1)
})

//console.log(data.data)

