import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Chat from './pages/Chat';
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<MainPage />} />
        <Route path="/products" element={<></>} />
        <Route path="/aboutUs" element={<></>} />
        <Route path="/chat" element={<Chat />} />
        {/* Add other protected routes here */}
      </Route>
      <Route path='/login' element={<Registration />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;

