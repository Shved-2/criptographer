import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';
import Create from './components/Create';
import Error from './components/Error';
import Main from './components/Main';
import Footer from './components/Footer';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route exact path="/note" element={<Note />} />
          <Route exact path="/note/:noteURL" element={<Note />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
