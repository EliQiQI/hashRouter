const path=require("path");
const baseConfig=require("./base.config");
const webpackMerge=require("webpack-merge");
const ExtractTextWebpackplugin=require("extract-text-webpack-plugin");

const config=webpackMerge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:ExtractTextWebpackplugin.extract({
                    use:[
                        {loader:"css-loader"},
                        {loader:"postcss-loader"},
                        {loader:"sass-loader"}
                    ],
                    fallback:"style-loader",
                }),
                exclude:path.join(__dirname,"../node_modules")
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackplugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})

module.exports=config;
