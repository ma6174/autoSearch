chrome.extension.onRequest.addListener(function (msg, sender, sendResponse) {
    var textarea = document.getElementById("tmp-clipboard");
    textarea.value = msg.text;
    textarea.select();
    document.execCommand("copy", false, null);
    sendResponse({});
});

