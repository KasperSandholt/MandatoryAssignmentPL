import { Routes, Route } from 'react-router-dom'
import MyNavbar from './components/myNavbar'
import HomePage from './pages/homePage'
import TablePage from './pages/tablePage' 

function App() {
  return (
    <>
      <MyNavbar /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App