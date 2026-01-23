import { useEffect, useState } from 'react'
import ChatInput from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect( () => {
    Chatbot.addResponses({
      'Can you help me':'Sure, How can I help you ?',
      'Best Game':'GTA 5 & Minecraft',
      'Best GPU in minimum budget':'RTX 4060 ti which is best for minimum budget',
      'Best GPU in maximum budget':'RTX 5090 ti which is best for maximum budget',
      'goodbye':'Goodbye ! have a nice day'
    })
  }, []);

  useEffect( () => {
    localStorage.setItem('message', JSON.stringify(chatMessages));
  }, [chatMessages]);
  
  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        Time={dayjs().valueOf()}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
