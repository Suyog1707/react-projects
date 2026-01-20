import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
      setInputText(event.target.value);
  }

  async function sendMessage() {

      setInputText('');

      const newChatMessages = [
          ...chatMessages,
          {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
          }
      ]

      setChatMessages(newChatMessages);

      setChatMessages([
          ...newChatMessages,
          {
              message: 'Loading...',
              sender: 'robot',
              id: crypto.randomUUID()
          }
      ]);

      setChatMessages([
          ...newChatMessages,
          {
              message: await Chatbot.getResponseAsync(inputText),
              sender: 'robot',
              id: crypto.randomUUID()
          }
      ]);

      setInputText('');

  }

  function handleKeyDown(event) {
      
      if (event.key === 'Enter') {
          sendMessage();
      } else if (event.key === 'Escape') {
              setInputText('');
      }

  }

  return (
      <>
          <center >
              <input
                  placeholder="Send a message to Chatbot"
                  size="50" 
                  onChange={saveInputText}
                  onKeyDown={handleKeyDown}
                  value={inputText}
                  className="chatbox"
              />
              <button 
                  className="send-button"
                  onClick={sendMessage}
              >
                  Send
              </button>
          </center>
      </>
  );
}

export default ChatInput;
