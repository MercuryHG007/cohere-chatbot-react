export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface Settings {
  apiKey: string;
  model: 'command' | 'command-light';
  temperature: number;
}

export interface ChatBotProps {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (text: string) => Promise<void>;
}

export interface SettingsModalProps {
  settings: Settings;
  onClose: () => void;
  onSave: (settings: Settings) => void;
}

export interface ChatInputProps {
  sendMessage: (text: string) => Promise<void>;
}

export interface ChatMessageProps {
  message: Message;
}

export interface HeaderProps {
  onSettingsClick: () => void;
  onClearClick: () => void;
}

export interface CohereResponse {
  finish_reason: string;
  id: string;
  meta: CohereResponseMeta;
  text: string;
}

export interface CohereResponseMeta {
  api_version: any;
  billed_units: any;
  warnings: any[];
}