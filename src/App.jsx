import { Routes, Route } from "react-router";

import LoginPage from "./pages/LoginPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="profile" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;
