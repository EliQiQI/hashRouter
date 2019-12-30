const baseConfig=require("./base.config.js");
const webpackMerge=require("webpack-merge");
const path=require("path");

const config=webpackMerge(baseConfig,{
    mode:"development",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"],
                exclude:path.join(__dirname,"../node_modules")
            }
        ]
    },
    devServer:{
        open:true,
        port:9000,

    }
})


module.exports=config;
