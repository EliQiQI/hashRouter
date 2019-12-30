/*
路由表的设置:将用户请求的
*/
import AlleyRouter from "lib/alley-router"
import home from "controller/home"
import list from "controller/list"


const router=new AlleyRouter({
    //
    mode:"hash",
    routes:[
        {
            //用户访问根路径
            path:"/",
            template:home
        },
        {
            //用户访问/list
            path:"/list",
            template:list
        }
    ]
})

window.router=router;
export default router;