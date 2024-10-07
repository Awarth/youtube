import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import LikedVideos from "./pages/LikedVideos.jsx";
import MyContent from "./pages/MyContent.jsx";
import Collections from "./pages/Collections.jsx";
import Subscriptions from "./pages/Subscriptions.jsx";
import Profile from "./pages/Profile.jsx";
import Upload from "./pages/Upload.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/history" element={<History />} />
          <Route path="/my-content" element={<MyContent />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="//sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
