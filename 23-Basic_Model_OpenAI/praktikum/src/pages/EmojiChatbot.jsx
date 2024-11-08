import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function EmojiChatbot() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const apiKey = 'AIzaSyCbCzeXSnEJRxx2d-sqVq-RHzGh_lQGwCM';
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

    const generationConfig = {
        maxOutputTokens: 50,
        temperature: 0.5,
    };

    async function handlePromptSubmit() {
        setError('');
        setResponse('');
        setLoading(true);

        const emojiPrompt = `Respond with emojis only. Question: ${input}`;

        try {
            const chatSession = model.startChat({
                generationConfig,
                history: [],
            });
            const result = await chatSession.sendMessage(emojiPrompt);
            setResponse(result.response.text);
        } catch (error) {
            console.error(error);
            setResponse('Oops! Something went wrong. Try again!');
        } finally {
            setLoading(false);
        }
    }

    function handleReset() {
        setInput('');
        setResponse('');
        setError('');
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Emoji Chatbot</h1>
            <p>Ketik pesan di bawah ini dan chatbot akan merespons kamu dengan emoji!</p>
            <div className="card shadow-lg p-4">
                <div className="form-group mb-4">
                    <input
                        type="text"
                        id="userInput"
                        className="form-control"
                        placeholder="Ketik sesuatu..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <div className="">
                    <button
                        onClick={handlePromptSubmit}
                        type="button"
                        className="btn btn-primary w-25 me-2 mb-2 mb-md-0"
                        disabled={loading || !input.trim()}
                    >
                        {loading ? 'Loading...' : 'Send'}
                    </button>
                    <button
                        onClick={handleReset}
                        type="button"
                        className="btn btn-secondary w-25"
                        disabled={!input && !response}
                    >
                        Reset
                    </button>
                </div>
                {loading && (
                    <div className="mt-4 text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {response && (
                    <div className="mt-5">
                        <h5 className="response-title">Response dari Emoji Chatbot:</h5>
                        <div className="response-text">{response}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmojiChatbot;
