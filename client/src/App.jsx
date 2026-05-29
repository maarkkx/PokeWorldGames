import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/routing/ProtectedRoute.jsx';
import PublicRoute from './components/routing/PublicRoute.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import GamesPage from './pages/GamesPage/GamesPage.jsx';
import GuessPokemonPage from './pages/GuessPokemonPage/GuessPokemonPage.jsx';
import WipPage from './pages/WipPage/WipPage.jsx';
import { WIP_IDS } from './i18n/keys.js';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games"
            element={
              <ProtectedRoute>
                <GamesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games/guess-pokemon"
            element={
              <ProtectedRoute>
                <GuessPokemonPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games/guess-shiny"
            element={
              <ProtectedRoute>
                <WipPage wipId={WIP_IDS.guessShiny} activeNav="games" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trade"
            element={
              <ProtectedRoute>
                <WipPage wipId={WIP_IDS.trade} activeNav="trade" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ranking"
            element={
              <ProtectedRoute>
                <WipPage wipId={WIP_IDS.ranking} activeNav="ranking" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <WipPage wipId={WIP_IDS.profile} activeNav="profile" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
