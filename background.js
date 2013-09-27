function highlight(){
    chrome.storage.local.get(null,function (obj){
        var keys = obj.keyword.split("|");
        for(var i in keys){
            $("body").highlight(keys[i]);
        }
    });
};
function highlightSelection(){
    var selectedText;
    if(window.getSelection){
        selectedText=window.getSelection();
    }else if(document.selection){
        selectedText=document.selection.createRange().text;
    }
    if(selectedText!=""){
        $("body").highlight(selectedText.toString());
    }
}
$().ready(highlight());
$("body").mouseup(function(){
    $(this).removeHighlight();
    highlight();
    highlightSelection();
});
