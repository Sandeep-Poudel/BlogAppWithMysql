import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import About from "./pages/About";
import CreateBlog from "./pages/CreatePage";
function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogPage />} />
                    <Route path="/create" element={<CreateBlog />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
export default App;
