
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Dashboard,Register,Error,Homepage} from './pages'
function App() {
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/homepage" element={<Homepage/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
