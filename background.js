function highlight(){
    chrome.storage.local.get(null,function (obj){
        var keys = obj.keyword.split("|");
        for(var i in keys){
            $("body").highlight(keys[i]);
        }
    });
};
$().ready(highlight());
$("body").mousedown(function(){
    $(this).removeHighlight();
    highlight();
});
