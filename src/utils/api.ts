import { CohereResponse } from "../types";

export const generateResponse = async (
    prompt: string,
    settings: {
        apiKey: string;
        model: 'command' | 'command-light';
        temperature: number;
    }
): Promise<string> => {
    const response = await fetch('https://api.cohere.ai/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.apiKey}`,
        },
        body: JSON.stringify({
            model: settings.model,
            prompt,
            max_tokens: 300,
            temperature: settings.temperature,
            stop_sequences: ['\n'],
        }),
    });

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data: CohereResponse = await response.json();
    return data.text;
};
