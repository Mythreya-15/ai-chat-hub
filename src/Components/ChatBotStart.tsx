import React from "react";
import "./ChatBotStart.css";
import { useTypewriter } from "../hooks/useTypewriter";
import { BotMessageSquare } from "lucide-react";

interface ChatBotStartProps {
  onStartChat: () => void;
}

const providers = [
  { label: "Gemini", color: "#4285F4" },
  { label: "Groq",   color: "#6366F1" },
  { label: "OpenRouter", color: "#7C3AED" },
  { label: "HuggingFace", color: "#F59E0B" },
  { label: "OpenAI", color: "#10B981" },
];

const ChatBotStart: React.FC<ChatBotStartProps> = ({ onStartChat }) => {
  const { displayText: typewriterText, isComplete } = useTypewriter({
    text: "> INITIALIZING CHAT AI MULTI MODEL SYSTEM...",
    speed: 70,
    delay: 500,
  });

  const { displayText: subtitleText } = useTypewriter({
    text: "Powered by Gemini, Groq, OpenRouter, Hugging Face & OpenAI",
    speed: 50,
    delay: 3500,
  });

  return (
    <div className="start-page">
      <div className="start-page-bg">
        <img src="/chatbot.svg" alt="Chatbot" className="bg-chatbot-icon" />
      </div>

      <div className="animated-icon-container">
        <BotMessageSquare className="animated-icon" />
      </div>

      <div className="start-page-content">
        <div className="start-page-header">

          {/* Live status chip */}
          <div className="brand-chip">
            <span className="brand-chip-dot" />
            AI HUB · MULTI MODEL
          </div>

          {/* Terminal card */}
          <div className="typewriter-container">
            <div className="terminal-dots">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
            </div>
            <pre className="typewriter-text">
              {typewriterText}
              {isComplete && <span className="typewriter-cursor">_</span>}
            </pre>
          </div>

          {isComplete && (
            <div className="subtitle-text">
              {subtitleText}
              <span className="typewriter-cursor">_</span>
            </div>
          )}
        </div>

        {/* Provider pills */}
        {isComplete && (
          <div className="provider-pills">
            {providers.map((p) => (
              <span key={p.label} className="provider-pill">
                <span
                  style={{
                    width: "0.7rem",
                    height: "0.7rem",
                    borderRadius: "50%",
                    background: p.color,
                    display: "inline-block",
                    flexShrink: 0,
                    boxShadow: `0 0 6px ${p.color}80`,
                  }}
                />
                {p.label}
              </span>
            ))}
          </div>
        )}

        {isComplete && (
          <button className="start-page-btn" onClick={onStartChat}>
            <span className="btn-icon">▶</span>
            <span className="btn-text">Get Started</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatBotStart;
