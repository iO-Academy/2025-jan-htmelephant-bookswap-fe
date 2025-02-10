import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import BookGrid from './components/BookGrid'
import Header from './components/Header'
export default function App() {

  return (
    <BrowserRouter>
    <div>
        <Header />
        <BookGrid />

    </div>
      </BrowserRouter>
  )
}