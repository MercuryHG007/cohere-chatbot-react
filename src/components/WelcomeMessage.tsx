const WelcomeMessage: React.FC = () => {
    return (
        <div className="text-center py-10">
            <img
                src="bot.png"
                alt="AI assistant character with futuristic blue interface elements"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Cohere AI Chatbot</h2>
            <p className="text-gray-600">Start chatting by typing your message below</p>
        </div>
    );
};

export default WelcomeMessage;