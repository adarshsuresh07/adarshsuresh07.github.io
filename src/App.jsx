import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/project" element={<Navigate to="/project/labvr" replace />} />
        <Route path="/project/:projectId" element={<Landing />} />
        <Route path="/experience" element={<Navigate to="/experience/inflection" replace />} />
        <Route path="/experience/:experienceId" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
