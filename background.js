function highlight(){
    chrome.storage.local.get(null,function (obj){
        var keys = obj.keyword.split("|");
        for(var i in keys){
            $("body").highlight(keys[i]);
        }
    });
};
window.onload = highlight();
