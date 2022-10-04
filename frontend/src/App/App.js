import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home ,notFound} from '../pages';
// import Layout from '../layout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<notFound />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
