import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import TeachersPage from "./pages/TeachersPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
export default App;
