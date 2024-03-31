'use client'
import React from 'react';

interface MatchButtonProps {
  playerId: string; // 明确指定playerId为string类型
}

export default function MatchButton({ playerId }: MatchButtonProps) {
    const handleMatchClick = async () => {
        console.log('Match button clicked');
        const ws = new WebSocket('ws://localhost:3001'); // 替换成你的WebSocket服务器端点
        ws.onopen = () => {
            console.log('Connection opened');
            // 发送请求加入匹配队列的消息
            ws.send(JSON.stringify({ action: 'joinMatchQueue', playerId: playerId })); // 确保提供正确的playerId
        };
        ws.onmessage = (event) => {
            // 处理从服务器收到的消息，例如匹配成功的通知
            console.log('Message from server ', event.data);
        };
        // 可以在这里添加更多的事件处理逻辑，例如错误处理和连接关闭
    };

    return <button onClick={handleMatchClick}>开始匹配</button>;
}