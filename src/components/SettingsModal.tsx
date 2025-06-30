import { useState, useEffect } from 'react';
import { SettingsModalProps, Settings } from '../types';

const SettingsModal: React.FC<SettingsModalProps> = ({ settings, onClose, onSave }) => {
    const [localSettings, setLocalSettings] = useState<Settings>(settings);

    useEffect(() => {
        setLocalSettings(settings);
    }, [settings]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLocalSettings(prev => ({
            ...prev,
            [name]: name === 'temperature' ? parseFloat(value) : value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Settings</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cohere API Key</label>
                        <input
                            type="password"
                            name="apiKey"
                            value={localSettings.apiKey}
                            onChange={handleChange}
                            placeholder="sk_..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                        <select
                            name="model"
                            value={localSettings.model}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="command">command</option>
                            <option value="command-light">command-light</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
                        <input
                            type="range"
                            name="temperature"
                            min="0"
                            max="1"
                            step="0.1"
                            value={localSettings.temperature}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <div className="text-xs text-gray-500 text-right">
                            {localSettings.temperature}
                        </div>
                    </div>
                    <button
                        onClick={() => onSave(localSettings)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                    >
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;