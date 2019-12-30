const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const PATH={
    app:path.join(__dirname,"../src/main.js"),
    build:path.join(__dirname,"../dist")
}

module.exports={
    entry:{
        app:PATH.app
    },
    output:{
        path:PATH.build,
        filename:"[name].js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename: "index.html",
            title:"M站开发"
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        extensions:[".js","scss","art","css","json"],
        alias:{
            "@":path.join(__dirname,"../src"),
            "view":path.join(__dirname,"../src/view"),
            "controller":path.join(__dirname,"../src/controller"),
            "lib":path.join(__dirname,"../src/lib"),
            "router":path.join(__dirname,"../src/router")
        }
    },
    module:{
        rules:[
            {
                //引入非模块化的插件
                test:require.resolve('zepto'),
                //转换成模块的方式
                loader:'exports-loader?window.Zepto!script-loader'
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:path.join(__dirname,"../node_modules")
            },{
                test:/\.art$/,
                loader:"art-template-loader"
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048,
                        name:"img/[name].[ext]"
                    }
                },
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:/\.(woff|woff2|svg|ttf|eot)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"font/[name].[ext]"
                    }
                },
                exclude:path.join(__dirname,"../node_modules")
            }
        ]
    }
}
