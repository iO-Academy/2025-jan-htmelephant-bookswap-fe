import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import BookGrid from "./components/BookGrid";
import DisplaySingleBook from "./components/DisplaySingleBook";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BookGrid claimed={0}/>} />
        <Route path="/books/:id" element={<DisplaySingleBook />} />
        <Route path="/claimed-books/" element={<BookGrid claimed={1} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
