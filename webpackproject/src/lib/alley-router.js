import router from "../router";

class AlleyRouter{
    constructor(options){
        //
        this.$options=options;
        //路由的形式 当用户传递了路由的形式就用用户传递的 没有则用哈希 
        this.$mode=this.$options.mode || "hash";
        this.$routes=this.$options.routes || [];

        this.current="/";
        this.mapRoutes={};

        //获取路由传值的对象
        this.$route={
            query:{}
        }

        

        this.init();
    }
    init(){
        //判断hash路由还是history路由
        this.isMode();
        //监听路由变化的事件
        this.bindEvent();
        //获取路由表对象
        this.mapRoutesEvent();
        //渲染对应的页面
        this.randerTemplate();
    }
    isMode(){
        //定义hash路由
        window.location.href=window.location.origin+"#/";
    }
    bindEvent(){
        //页面第一次加载进来的时候也需要监听路由变化
        window.addEventListener("load",this.handlerBindEventSucc.bind(this));
        //监听hash值改变的事件
        window.addEventListener("hashchange",this.handlerBindEventSucc.bind(this));
    }
    //hash改变要做的事情
    handlerBindEventSucc(){
        
        
        let hash=window.location.hash.split("?")[0].slice(1) || "/";
        this.current=hash;
        
        this.getQuery();
        
        
        this.randerTemplate();

        
    }
    //将路由表转换为路由对象
    mapRoutesEvent(){
        this.$routes.forEach((item)=>{
            this.mapRoutes[item.path]=item;
        })
        console.log(this.mapRoutes);
    }
    randerTemplate(){
        //渲染
        var template=this.mapRoutes[this.current].template;
        template.render();
    }
    //路由跳转
    push(path){
        window.location.hash=path;
        
    }
    getQuery(){
        var href=window.location.href;
        var obj=href.substr(href.indexOf("?")+1).split("&").reduce(function(prev,item){
            let key=item.split("=")[0];
            let val=item.split("=")[1];
            prev[key]=val;
            return prev;
        },{})

        this.$route.query=obj;
    }
}
// router.push("/list")

export default AlleyRouter;