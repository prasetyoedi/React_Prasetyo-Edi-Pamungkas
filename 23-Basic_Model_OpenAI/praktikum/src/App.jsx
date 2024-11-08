import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmojiChatbot from './pages/EmojiChatbot';
import HalloweenChat from './pages/HalloweenChat';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <nav className="navbar">
                        <ul className="nav-list ms-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/halloween-chat" className="nav-link">Halloween Chatbot</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/emoji-chatbot" className="nav-link">Emoji Chatbot</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<h1 className='text-center mt-5'>Welcome to the AI App</h1>} />
                        <Route path="/halloween-chat" element={<HalloweenChat />} />
                        <Route path="/emoji-chatbot" element={<EmojiChatbot />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
