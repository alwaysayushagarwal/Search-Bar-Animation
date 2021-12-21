function searchToggle(){
    var container = document.getElementsByClassName("search-wrapper");
    if(!container.item(0).classList.contains("active")){
        container.item(0).classList.add("active");       
    }else if(container.item(0).classList.contains("active")){
        container.item(0).classList.remove("active");
        document.getElementsByClassName("search-input").item(0).val="";
    }
    console.log(document.getElementsByClassName("search-input").length);
}