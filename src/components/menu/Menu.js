import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {navigation} from '../../redux/slice/navigationSlice'
import {favoriteRequest} from '../../redux/slice/favoriteSlice'
import {favoriteTrue, favoriteFalse} from '../../redux/slice/switchSlice'
import SearchComponent from '../search/Search'
import HistoryComponent from '../history/History'
import Brand from './img/brand.svg'
import Search from './img/search.svg'
import Favorites from './img/favorite.svg'
import History from './img/history.svg'
import './Menu.scss'

const Menu = () => {
  const {searchComponent, historyComponent} = useSelector((state) => state.navigation)
  const {content} = useSelector((state) => state.request)
  const {favorite} = useSelector((state) => state.favorite)
  // const {switchContent} = useSelector((state) => state.switchContent)
  const dispatch = useDispatch()

  const favoriteFilter = () => {
    const result = content.filter(item => favorite.includes(item.id))
    dispatch(favoriteTrue())
    dispatch(favoriteRequest(result))
  }

  const navStock = (event) => {
    dispatch(favoriteFalse())
    dispatch(navigation(event))
  }

  const imageStock = () => {
    dispatch(favoriteFalse())
  }

  return (
    <div className='menu' style={searchComponent || historyComponent ? {padding: "5.6rem"} : null}>
      <div className='menu__inner'>
        <div className='menu__navigation'>
          <div className='menu__brand'>
            <Link to='/' className='menu__block' onClick={imageStock}>
              <div className='menu__image'>
                <img src={Brand} alt="logo" />
              </div>
              <div className='menu__text'>ImageStock</div>
            </Link>
          </div>
          <div className='menu__container'>
            <div data-item='search'
              className={searchComponent ? 'menu__block menu__block_line active' : 'menu__block menu__block_line'}
              onClick={(event) => navStock(event)}>
              <div className='menu__image'>
                <img src={Search} alt="search" />
              </div>
              <div className='menu__text'>Поиск</div>
            </div>
            <Link data-item='favorites' to='/' className='menu__block menu__block_line' onClick={favoriteFilter}>
              <div className='menu__image'>
                <img src={Favorites} alt="favorites" />
              </div>
              <div className='menu__text'>Избранное</div>
            </Link>
            <div data-item='history'
              className={historyComponent ? 'menu__block menu__block_line active' : 'menu__block menu__block_line'}
              onClick={(event) => navStock(event)}>
              <div className='menu__image'>
                <img src={History} alt="history" />
              </div>
              <div className='menu__text'>История поиска</div>
            </div>
          </div>
        </div>
      </div>
      {searchComponent ? <SearchComponent /> : null}
      {historyComponent ? <HistoryComponent /> : null}
    </div>
  )
}

export default Menu