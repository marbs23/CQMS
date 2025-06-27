import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage'
import LovePage from './pages/LovePage'
import NavBar from './components/NavBar'
import RiddlePage from './pages/RiddlePage'
import ValePage from './pages/ValePage'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pregunta" element={<QuestionPage />} />
        <Route path="/teamo" element={<LovePage />} />
        <Route path="/acertijo" element={<RiddlePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/vale" element={<ValePage />} />
      </Routes>
    </Router>
  )
}

export default App