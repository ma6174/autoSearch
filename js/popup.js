window.onload = function(){
    ele = document.getElementById("ma6174-keyword");
    if(localStorage['ma6174-keyword']){
        ele.value = localStorage['ma6174-keyword'].replace(/\|/g,"\n");
    }
    ele.onkeyup= function(){
        var val=this.value.replace(/\s+/g,"|");
        localStorage['ma6174-keyword']=val;
        chrome.storage.local.set({keyword:val},function (){
            console.log("Storage Succesful");
        });
    };
};
