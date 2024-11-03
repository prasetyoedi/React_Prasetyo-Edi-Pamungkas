import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateProduct from './pages/CreateProduct';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './pages/Unauthorized';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
};

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar setIsAuthenticated={setIsAuthenticated} />}

      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createproduct"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} requiredRole="admin">
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
      </Routes>

      {location.pathname !== '/login' && <Footer />}
    </>
  );
};

export default App;
