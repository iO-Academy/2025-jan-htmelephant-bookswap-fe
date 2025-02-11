import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DisplaySingleBook from "./pages/DisplaySingleBook";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<DisplaySingleBook />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
