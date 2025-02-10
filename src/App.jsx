import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BookGrid from './components/BookGrid'
import Header from './components/Header'
import DisplaySingleBook from './pages/DisplaySingleBook'
import HomePage from './pages/HomePage'
export default function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books/:id" element={<DisplaySingleBook/>} />
      <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

    </BrowserRouter>
  )
}