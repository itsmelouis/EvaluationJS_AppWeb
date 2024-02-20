import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import NotFoundPage from './pages/404';
import Nav from './components/Nav';

function App() {

  return (
    <>
     <Router>
      <Nav />
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
