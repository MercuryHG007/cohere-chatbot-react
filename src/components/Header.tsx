import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ onSettingsClick, onClearClick }) => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
                <img
                    src="bot.png"
                    alt="Cohere AI logo with blue gradient background"
                    className="w-9 h-9 rounded-full mr-3"
                />
                <h1 className="text-2xl font-bold text-gray-800">Cohere AI Chatbot</h1>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={onSettingsClick}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center transition"
                >
                    <i className="fas fa-cog mr-2"></i> Settings
                </button>
                <button
                    onClick={onClearClick}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center transition"
                >
                    <i className="fas fa-trash-alt mr-2"></i> Clear Chat
                </button>
            </div>
        </header>
    );
};

export default Header;