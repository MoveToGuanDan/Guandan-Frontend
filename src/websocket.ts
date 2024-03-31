const ws: WebSocket = new WebSocket('ws://localhost:8000/ws/somepath/');

ws.onmessage = function (e: MessageEvent) {
    const data = JSON.parse(e.data);
    console.log('Message from server: ', data.message);
};

ws.onclose = function (e: CloseEvent) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-message-input').addEventListener('keyup', function (e: KeyboardEvent) {
    if (e.keyCode === 13) {  // enter, return
        const messageInputDom = document.querySelector('#chat-message-input') as HTMLInputElement;
        const message = messageInputDom.value;
        ws.send(JSON.stringify({'message': message}));
        messageInputDom.value = '';
    }
});