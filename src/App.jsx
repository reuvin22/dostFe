import { Routes, Route } from 'react-router-dom'
import Form from './pages/Form'
import Login from './pages/Login'
import Attendance from './pages/Data'
import PrivateRoutes from './utils/PrivateRoutes'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/login" element={<Login />}/>
      <Route element={<PrivateRoutes />}>
        <Route path="/attendance" element={<Attendance />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
