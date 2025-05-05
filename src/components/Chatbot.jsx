import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import {useTimer} from "../hooks/useTimer";

const Chatbot = () => {
    const {showChatbot, setShowChatbot} = useAppContext();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const {time, startTimer, stopTimer, resetTimer} = useTimer();

    const handleShowChatbot=()=>{
        setShowChatbot(true);
        startTimer();
    }

    const handleResetChatbot=()=>{
        setMessages([]);
        setInput("");
        resetTimer();
    }

    const handleHideChatbot=()=>{
        setShowChatbot(false);
        stopTimer();
        resetTimer();
    }

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages((prev) => [...prev, { text: input, from: "user" }]);
        setInput("");
        // Simulate a response
        setTimeout(() => {
            setMessages((prev) => [...prev, { text: "Hello! How can I help you?", from: "bot" }]);
        }, 1000);
    }

    if (!showChatbot) {
      return <button className="chat-icon" onClick={handleShowChatbot}>💬</button>;
    }
  
    return (
      <div className="chatbot">
        <div className="chat-header">
          <button onClick={handleResetChatbot}>Reset</button>
          <span>{time}s</span>
          <button onClick={handleHideChatbot}>Close</button>
        </div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.from}`}>{msg.text}</div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    sendMessage();
                  }
            }}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  };

export default Chatbot