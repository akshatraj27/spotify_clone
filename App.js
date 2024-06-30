// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import TablePage from './pages/TablePage';
import CalendarPage from './pages/CalendarPage';
import ChartPage from './pages/ChartPage';
import KanbanPage from './pages/KanbanPage';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/tables" element={<TablePage />} />
          <Route path="/charts" element={<ChartPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/kanban" element={<KanbanPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
