import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import CreateBlog from "./pages/CreateUpdate";
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
export default App;
