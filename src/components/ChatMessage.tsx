import { ChatMessageProps } from '../types';

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    return (
        <div className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
            >
                <div className="text-sm">{message.text}</div>
                <div
                    className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                >
                    {message.timestamp.toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;