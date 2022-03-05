// create a var with custum html content
var chatComponent = document.getElementById("chat-inner-messaggi");
var chatInner = chatComponent.innerHTML;

setInterval(() => {
    chatComponent.innerHTML += chatInner;
}, 1000);