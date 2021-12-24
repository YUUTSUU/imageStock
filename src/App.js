import {BrowserRouter, Routes, Route} from "react-router-dom"
import store from './redux/store/store'
import {Provider} from 'react-redux'
import HomePage from './pages/homePage/HomePage'
import PhotoPage from './pages/photoPage/PhotoPage'
import FavoritesPage from './pages/favoritesPage/FavoritesPage'
import NotFound from './pages/404/NotFound'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/photo' exact element={<PhotoPage />} />
          <Route path='/favorites' exact element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App