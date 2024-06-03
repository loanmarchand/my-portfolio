import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/#projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
