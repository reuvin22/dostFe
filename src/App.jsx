import { Routes, Route } from 'react-router-dom'
import Form from './pages/Form'
import Login from './pages/Login'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default App
