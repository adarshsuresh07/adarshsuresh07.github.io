import React, { useState } from "react";
import { Avatar, Stack, Card, CardContent } from '@mui/material';

function MessageList(props) {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    {props.messages.slice(0).reverse().map(
                        messageItem => (
                            <MessageItem
                                key={messageItem.id}
                                owner={props.owner}
                                sender={messageItem.sender}
                                senderAvatar={messageItem.senderAvatar}
                                message={messageItem.message}
                            />
                        )
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}


function MessageItem(props) {
    let messagePosition = (props.owner == props.sender) ? { direction: "row" } : { direction: "row-reverse" }
    return (
        <Stack width="100%" spacing={2} alignItems="right" {...messagePosition}>
            <Avatar alt={props.sender} src={props.senderAvatar} />
            <Card sx={{ maxWidth: "80%" }}>
                <CardContent>
                    {props.message}
                </CardContent>
            </Card>
        </Stack>
    );
}

function ChatBox(props) {
    return (
        <MessageList
            owner={props.owner}
            messages={props.messages}
        />
    );
}

const MESSAGES = [{
    id: 1,
    sender: 'Shun',
    senderAvatar: 'https://i.pravatar.cc/150?img=32',
    message: 'Hello 👋'
},
{
    id: 2,
    sender: 'Gabe',
    senderAvatar: 'https://i.pravatar.cc/150?img=56',
    message: 'Hey!'
},
{
    id: 3,
    sender: 'Gabe',
    senderAvatar: 'https://i.pravatar.cc/150?img=56',
    message: 'How are you?'
},
{
    id: 4,
    sender: 'Shun',
    senderAvatar: 'https://i.pravatar.cc/150?img=32',
    message: 'Great! It\'s been a while... 🙃'
},
{
    id: 5,
    sender: 'Gabe',
    senderAvatar: 'https://i.pravatar.cc/150?img=56',
    message: 'Indeed.... We\'re gonna have to fix that. 🌮🍻'
}];

export function ChatRoom() {
    const [messages, setMessages] = useState(MESSAGES);

    function sendMessage(sender, senderAvatar, message) {
        setTimeout(() => {
            let messageFormat = message;
            let newMessageItem = {
                id: messages.length + 1,
                sender: sender,
                senderAvatar: senderAvatar,
                message: messageFormat
            };
            setMessages((messages) => [...messages, newMessageItem]);
        }, 400);
    }

    const users = [{ name: 'Shun', avatar: 'https://i.pravatar.cc/150?img=32' }, { name: 'Gabe', avatar: 'https://i.pravatar.cc/150?img=56' }];

    return (
        <ChatBox
            owner={users[0].name}
            ownerAvatar={users[0].avatar}
            sendMessage={sendMessage}
            messages={messages}
        />
    );
}