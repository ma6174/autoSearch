window.onload = function(){
    //    document.body.innerHTML = document.body.innerHTML.replace(/(ma6174@163.com|ma617495@gmail.com|ma6174|岱浩|小码哥|马伟伟|15824114566|18766964456|weiwei)(?=[^<>]*<)/gi,"<span class='ma6174' style='color:red;background-color:#ff0;'>$1</span>");
    chrome.storage.local.get(null,function (obj){
        console.log(obj.keyword);
        var reg = new RegExp("("+obj.keyword+")(?=[^<>]*<)","ig");
        console.log(reg);
        document.body.innerHTML = document.body.innerHTML.replace(reg,"<span class='ma6174' style='color:red;background-color:#ff0;'>$1</span>");
    });
};

