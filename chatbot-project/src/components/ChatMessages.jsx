import ChatMessage from "./ChatMessage.jsx";

function ChatMessages({chatMessages}) {

    return (
        <>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage 
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        Time={chatMessage.Time}
                        key={chatMessage.id}
                        
                    />
                );
            })}
        </>
    );
    
}

export default ChatMessages;
