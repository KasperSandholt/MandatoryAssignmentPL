import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import TablePage from './pages/tablePage' 

function App() {
  return (
    <>
      <h1>Premier League</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>

    </>
  )
}

export default App
