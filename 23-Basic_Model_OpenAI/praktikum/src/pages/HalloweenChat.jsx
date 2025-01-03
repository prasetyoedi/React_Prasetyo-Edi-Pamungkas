import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaGhost } from 'react-icons/fa';

function App() {
  const [inputUser, setInputUser] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = 'AIzaSyCbCzeXSnEJRxx2d-sqVq-RHzGh_lQGwCM';
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 0.8, // Mengurangi temperatur sedikit untuk jawaban yang lebih tepat sasaran
  };

  // Daftar kata kunci bertema Halloween
  const halloweenKeywords = [
    "hantu", "seram", "horor", "Halloween", "makhluk mistis", "cerita seram", "halloween",
    "drakula", "zombie", "mistis", "legenda seram", "malam Halloween", "pesta seram"
  ];

  function isHalloweenQuestion(question) {
    return halloweenKeywords.some(keyword =>
      question.toLowerCase().includes(keyword)
    );
  }

  async function handlePromptSubmit() {
    // Reset error dan response setiap kali submit
    setError('');
    setResponse('');

    // Validasi apakah pertanyaan sesuai dengan tema Halloween
    if (!isHalloweenQuestion(inputUser)) {
      setError("Pertanyaan harus terkait dengan Halloween atau tema seram. Coba lagi dengan pertanyaan lain.");
      return;
    }

    setLoading(true);

    // Membuat prompt dengan konteks Halloween
    const halloweenPrompt = `Anda adalah AI yang ahli dalam cerita seram dan tema Halloween. 
    Jawab pertanyaan pengguna dengan tema horor atau Halloween, 
    seperti cerita hantu, makhluk mistis, sejarah Halloween, atau fakta seram lainnya. 
    Pertanyaan: ${inputUser}`;

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
      const result = await chatSession.sendMessage(halloweenPrompt);
      setResponse(result.response.text);
    } catch (error) {
      console.error(error);
      setResponse('Ooops! Terjadi kesalahan. Coba lagi, kalau berani!');
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setInputUser('');
    setResponse('');
    setError('');
  }

  return (
    <div className="container mt-5 halloween-theme">
      <h1 className="text-center mb-4 halloween-title">
        <FaGhost className="ghost-icon" /> Gemini AI Halloween Chat
      </h1>
      <div className="card shadow-lg p-4 custom-card halloween-card">
        <div className="form-group mb-4">
          <label htmlFor="userInput" className="form-label halloween-label">
            Masukkan pertanyaan seram Anda:
          </label>
          <input
            type="text"
            id="userInput"
            className="form-control custom-input halloween-input"
            placeholder="Contoh: Apa cerita horor paling terkenal?"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />
        </div>
        {error && (
          <div className="alert alert-danger halloween-error" role="alert">
            {error}
          </div>
        )}
        <div className="d-flex justify-content-between flex-wrap">
          <button
            onClick={handlePromptSubmit}
            type="button"
            className="btn btn-warning w-100 me-2 mb-2 mb-md-0 halloween-submit"
            disabled={loading || !inputUser.trim()}
          >
            {loading ? 'Memanggil Hantu...' : 'Kirim'}
          </button>
          <button
            onClick={handleReset}
            type="button"
            className="btn btn-dark w-100 halloween-reset"
            disabled={!inputUser && !response}
          >
            Reset
          </button>
        </div>
        {loading && (
          <div className="loading-spinner mt-4 text-center">
            <div className="custom-spinner" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {response && (
          <div className="mt-5">
            <h5 className="response-title halloween-response-title">Respons dari Dunia Lain:</h5>
            <div className="response-text halloween-response">{response}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
