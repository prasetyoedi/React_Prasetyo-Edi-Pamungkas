import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const dummyUsers = [
            { username: 'admin', password: 'admin@admin', role: 'admin' },
            { username: 'user', password: 'user@user', role: 'user' }
        ];
    
        const user = dummyUsers.find(
            (u) => u.username === username && u.password === password
        );
    
        if (user) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('role', user.role);
            setIsAuthenticated(true);
            navigate('/');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };
    
    


    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Halaman Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary w-25">Login</button>
                    </div>
                </form>
                {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
