import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Projects from './components/Projects';
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/#projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
