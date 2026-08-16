import { useState } from "react";
import Header from "./components/layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import QuizPage from "./pages/QuizPage";
import TopicDetailsPage from "./pages/TopicDetailsPage";
import ResultPage from "./pages/ResultPage";
import TopicsPage from "./pages/TopicsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="quiz/:topicId" element={<QuizPage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="topics" element={<TopicsPage/>} />
        <Route path="topics/:slug" element={<TopicDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;