import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<Home />} />
            </Routes>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
             </Router>
    );
}

export default App;
