const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/user":{
                //连接mongoose数据库用
                target:"http://localhost:3000",//接口的域名
                 secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin:true ,// 如果接口跨域，需要进行这个参数配置
               pathRewrite: {
                    '^/user': '/user/',  
                }
            },
            "/daoju":{
                target:"https://capps.game.qq.com",
                changeOrigin:true
            },
            "/api":{
                target:"https://b2capigateway.yiguo.com",
                secure:true,
                changeOrigin:true,
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{                  
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "lib":path.join(__dirname,"./src/lib")
            }
        }
    }
}