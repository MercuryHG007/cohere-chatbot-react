import { useState } from 'react';
import Header from './components/Header';
import Chat from './components/Chat';
import SettingsModal from './components/SettingsModal';
import { Message, Settings } from './types';
import { generateResponse } from './utils/api';
import './App.css';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    apiKey: process.env.COHERE_API_KEY || localStorage.getItem('cohere-api-key') || '',
    model: 'command',
    temperature: 0.3,
  });

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    if (!settings.apiKey) {
      setShowSettings(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiText = await generateResponse(text, settings);
      const aiMessage: Message = {
        id: Date.now().toString(),
        text: aiText,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    if (newSettings.apiKey) {
      localStorage.setItem('cohere-api-key', newSettings.apiKey);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header 
          onSettingsClick={() => setShowSettings(true)}
          onClearClick={clearMessages}
        />
        <Chat 
          messages={messages}
          sendMessage={sendMessage}
          isLoading={isLoading}
        />
        {showSettings && (
          <SettingsModal
            settings={settings}
            onClose={() => setShowSettings(false)}
            onSave={(newSettings) => {
              updateSettings(newSettings);
              setShowSettings(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;