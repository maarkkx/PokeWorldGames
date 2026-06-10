import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './config/nav.js';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/routing/ProtectedRoute.jsx';
import PublicRoute from './components/routing/PublicRoute.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage.jsx';
import GamesPage from './pages/GamesPage/GamesPage.jsx';
import GuessPokemonPage from './pages/GuessPokemonPage/GuessPokemonPage.jsx';
import GuessShinyPage from './pages/GuessShinyPage/GuessShinyPage.jsx';
import PokedokuPage from './pages/PokedokuPage/PokedokuPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import TrainerProfilePage from './pages/TrainerProfilePage/TrainerProfilePage.jsx';
import RankingPage from './pages/RankingPage/RankingPage.jsx';
import TradePage from './pages/TradePage/TradePage.jsx';
import FriendsPage from './pages/FriendsPage/FriendsPage.jsx';
import LootboxPage from './pages/LootboxPage/LootboxPage.jsx';
import PokedexPage from './pages/PokedexPage/PokedexPage.jsx';

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
                <GuessShinyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games/pokedoku"
            element={
              <ProtectedRoute>
                <PokedokuPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trade"
            element={
              <ProtectedRoute>
                <TradePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/friends"
            element={
              <ProtectedRoute>
                <FriendsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lootboxes"
            element={
              <ProtectedRoute>
                <LootboxPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pokedex"
            element={
              <ProtectedRoute>
                <PokedexPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ranking"
            element={
              <ProtectedRoute>
                <RankingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainers/:username"
            element={
              <ProtectedRoute>
                <TrainerProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.login}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.register}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.forgotPassword}
            element={
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.resetPassword}
            element={
              <PublicRoute>
                <ResetPasswordPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
