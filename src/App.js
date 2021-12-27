import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './pages/main/Main'
import NotFound from './pages/404/NotFound'
import './style/Style.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
    </BrowserRouter>
  )
}

export default App