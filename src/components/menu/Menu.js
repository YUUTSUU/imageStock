import {Link} from 'react-router-dom'
import BrandImage from './img/brand.svg'
import SearchImage from './img/search.svg'
import FavoritesImage from './img/favorite.svg'
import HistoryImage from './img/history.svg'
import Search from '../search/Search'
import History from '../history/History'

const Menu = ({
  text,
  textHandler,
  queryHandler,
  history,
  historyQueryHandler,
  imageStockDefaultQuery,
  navigationSearchToggle,
  navigationHistoryToggle,
  searchToggle,
  historyToggle,
  favoriteContentAddFilter,
  imagesShowContent,
  favoritesShowContent
}) => {
  return (
    <div className='menu' style={searchToggle || historyToggle ? {padding: "5.6rem"} : null}>
      <div className='menu__inner'>
        <div className='menu__navigation'>
          <div className='menu__brand'>
            <Link
              to='/'
              className='menu__block'
              onClick={() => {
                imagesShowContent()
                imageStockDefaultQuery()
              }}
            >
              <div className='menu__image'>
                <img src={BrandImage} alt="logo" />
              </div>
              <div className='menu__text'>ImageStock</div>
            </Link>
          </div>
          <div className='menu__container'>
            <Link
              to='/'
              className={
                searchToggle ?
                  'menu__block menu__block_line active' :
                  'menu__block menu__block_line'
              }
              onClick={() => {
                navigationSearchToggle()
                imagesShowContent()
              }}
            >
              <div className='menu__image'>
                <img src={SearchImage} alt="search" />
              </div>
              <div className='menu__text'>Поиск</div>
            </Link>
            <Link
              to='/'
              className='menu__block menu__block_line'
              onClick={() => {
                favoriteContentAddFilter()
                favoritesShowContent()
              }}
            >
              <div className='menu__image'>
                <img src={FavoritesImage} alt="favorites" />
              </div>
              <div className='menu__text'>Избранное</div>
            </Link>
            <Link to='/'
              className={
                historyToggle ?
                  'menu__block menu__block_line active' :
                  'menu__block menu__block_line'
              }
              onClick={() => {
                navigationHistoryToggle()
                imagesShowContent()
              }}
            >
              <div className='menu__image'>
                <img src={HistoryImage} alt="history" />
              </div>
              <div className='menu__text'>История поиска</div>
            </Link>
          </div>
        </div>
      </div>
      {
        searchToggle ?
          <Search
            text={text}
            textHandler={textHandler}
            queryHandler={queryHandler}
            history={history}
            historyQueryHandler={historyQueryHandler}
          /> : null
      }
      {
        historyToggle ?
          <History
            history={history}
            historyQueryHandler={historyQueryHandler}
          /> : null
      }
    </div>
  )
}

export default Menu