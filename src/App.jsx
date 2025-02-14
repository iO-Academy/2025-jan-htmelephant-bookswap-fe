import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import BookGrid from "./components/BookGrid";
import DisplaySingleBook from "./components/DisplaySingleBook";
import AddBook from "./components/Story-9-AddBook";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BookGrid claimed={0}/>} />
        <Route path="/books/:id" element={<DisplaySingleBook />} />
        <Route path="/claimed-books/" element={<BookGrid claimed={1} />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
