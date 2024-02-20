import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import NotFoundPage from './pages/NotFoundPage';

import './App.css'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
