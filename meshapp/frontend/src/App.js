import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PostForm from "./components/PostForm";
import DataFetcher from "./components/DataFetcher";


function App() {
  return (
    <Router>
      <AppNavbar />
      <DataFetcher />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
