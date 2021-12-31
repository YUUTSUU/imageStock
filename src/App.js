import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './redux/store/store'
import MainPage from './page/mainPage/MainPage'
import FavoritePage from './page/favoritePage/FavoritePage'
import SearchPage from './page/searchPage/SearchPage'
import PhotoPage from './page/photoPage/PhotoPage'
import NotFound from './page/404/NotFound'
import './style/Style.scss'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/search/:name" element={<SearchPage />} />
          <Route path="/photo/:id" element={<PhotoPage />} />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App