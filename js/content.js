function highlight(){
    chrome.storage.local.get(null,function (obj){
        var keys = obj.keyword.split("|");
        for(var i in keys){
            $("body").highlight(keys[i],{ element: 'span', className: 'ma6174-highlight' });
        }
    });
};
function openURL(txt){
    var re=/^((http|https|ftp):\/\/)?(\w(\:\w)?@)?([0-9a-z_-]+\.)*?([a-z0-9-]+\.[a-z]{2,6}(\.[a-z]{2})?(\:[0-9]{2,6})?)((\/[^?#<>\/\\*":]*)+(\?[^#]*)?(#.*)?)?$/i;
    $("#ma6174-tip").empty();
    $("#ma6174-tip").show();
    $("#ma6174-tip").css({
        "top":event.pageY,
        "left":event.pageX
    });
    if(re.test(txt)){
        if(txt.search("://") == -1){
            txt = "http://" + txt;
        }
        $("<a></a>").text("打开连接").attr({
            "href":txt,
            "target":"_blank"
        }).appendTo($("#ma6174-tip"));
    }else{
        $("<a></a>").text("谷歌搜索").attr({
            "href":"https://www.google.com/#q="+txt,
            "target":"_blank"
        }).appendTo($("#ma6174-tip"));
        $("<br />").appendTo($("#ma6174-tip"));
        $("<a></a>").text("百度搜索").attr({
            "href":"http://baidu.com/s?wd="+txt,
            "target":"_blank"
        }).appendTo($("#ma6174-tip"));
        $("<br />").appendTo($("#ma6174-tip"));
        $("<a></a>").text("有道翻译").attr({
            "href":"http://dict.youdao.com/search?q="+txt,
            "target":"_blank"
        }).appendTo($("#ma6174-tip"));
    }
}
function highlightSelection(event){
    var selectedText;
    $("#ma6174-tip").hide();
    if(window.getSelection){
        selectedText=window.getSelection();
    }else if(document.selection){
        selectedText=document.selection.createRange().text;
    }
    selectedText = selectedText.toString().replace(/^\s+|\s+$/g, '');
    if(selectedText.replace(" ","")!=""){
        chrome.extension.sendRequest({ text:selectedText});
        openURL(selectedText.toString());
        $("body").highlight(selectedText,{ element: 'span', className: 'ma6174-highlight' });
    }
}
$().ready(function(){
    highlight();
    $("<div id='ma6174-tip'></div>").appendTo($("body"));
});
$("body").click(function(event){
    $(this).unhighlight({ element: 'span', className: 'ma6174-highlight' });
    highlight();
    highlightSelection(event);
    return true;
});
