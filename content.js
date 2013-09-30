function highlight(){
    chrome.storage.local.get(null,function (obj){
        var keys = obj.keyword.split("|");
        for(var i in keys){
            $("body").highlight(keys[i],{ element: 'span', className: 'ma6174-highlight' });
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
        chrome.extension.sendRequest({ text:selectedText.toString()});
        $("body").highlight(selectedText.toString(),{ element: 'span', className: 'ma6174-highlight' });
    }
}
$().ready(function(){
    highlight();
});
$("body").click(function(){
    $(this).unhighlight({ element: 'span', className: 'ma6174-highlight' });
    highlight();
    highlightSelection();
    return true;
});
