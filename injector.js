var iFrame  = document.createElement ("iframe");
iFrame.id = "counter";
iFrame.src  = chrome.extension.getURL ("counter.html");

document.body.insertBefore (iFrame, document.body.firstChild);
