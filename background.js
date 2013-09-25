window.onload = function(){
    chrome.storage.local.get(null,function (obj){
        var reg = new RegExp("("+obj.keyword+")(?=[^<>]*<)","ig");
        document.body.innerHTML = document.body.innerHTML.replace(reg,"<span class='ma6174' style='color:red;background-color:#ff0;'>$1</span>");
    });
};

