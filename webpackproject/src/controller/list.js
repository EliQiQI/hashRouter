import list from "view/list.art";

class List{
    constructor(){

    }
    init(){
        
    }
    render(){
        var html=list();
        $("#app").html(html);
    }
}

export default new List()